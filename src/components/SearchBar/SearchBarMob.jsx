import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchedProducts } from 'redux/products/operations';
import { selectSearchedProducts } from 'redux/products/selectors';
import {
  resetSearchedProducts,
  setSearchedProducts,
} from 'redux/products/productsSlice';

import { ProductComponent } from 'components/ProductComponent/ProductComponent.jsx';

import {
  Container,
  SearchForm,
  SearchBtn,
  SearchIcon,
  SearchMobWrapper,
  SearchInput,
  FormContainer,
  SearchInputListWrapper,
  SearchListWrapper,
  SearchList,
  SearchItem,
  LinkWrapper,
  ProductsLink,
} from './SearchBar.styled';

import Sprite from '../../images/sprite.svg';

export const SearchBarMob = ({
  toggleShowSearch,
  isShowSearching,
  sectionType,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  // const [notFoundProduct, setNotFoundProduct] = useState(false);
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const previousLocation = useRef();

  const showSearchList = searchQuery && isSearchListVisible;
  const trimmedSearchQuerry = searchQuery.trim();
  const visibleProducts = useSelector(selectSearchedProducts) || [];

  useEffect(() => {
    if (searchQuery === '') {
      setSearchQuery('');
      return;
    }

    if (searchQuery.length < 3) {
      // setNotFoundProduct(false);
      return;
    }
    // eslint-disable-next-line
  }, [searchQuery, dispatch]);

  useEffect(() => {
    setIsSearchListVisible(false);
    setIsEmpty(false);
    // setNotFoundProduct(false);
    if (location.pathname !== '/search') {
      setSearchQuery('');
      // setIsSearching(false);
      previousLocation.current = location.pathname;
    }
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    return () => {
      dispatch(resetSearchedProducts());
    };
  }, [dispatch]);

  // FOR CLOSE OUTSIDE DIV
  // useEffect(() => {
  //   const handleClickOutside = event => {
  //     if (searchRef.current && !searchRef.current.contains(event.target)) {
  //       setIsSearching(false);
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [searchRef, dispatch]);

  const clearSearchInput = () => {
    setSearchQuery('');
    toggleShowSearch();
    setIsEmpty(false);
    dispatch(resetSearchedProducts());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (trimmedSearchQuerry === '') {
      setIsEmpty(true);
      setIsSearchListVisible(false);
    } else {
      setIsSearchListVisible(false);
      // setIsShowSearch(false);
      setTimeout(() => {
        const searchUrl = `/search?s=${encodeURIComponent(
          trimmedSearchQuerry
        )}`;
        navigate(searchUrl);
      }, 300);
      toggleShowSearch();
    }
  };

  const handleSearchChange = e => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
    if (searchQuery) {
      setIsEmpty(false);
    }

    if (inputValue.length < 3) {
      setIsEmpty(false);
    } else if (inputValue === '') {
      setSearchQuery('');
    }

    if (inputValue.length >= 3) {
      setIsSearchListVisible(true);
      try {
        dispatch(getSearchedProducts(inputValue));
      } catch (error) {
        console.log(error);
      }
      dispatch(setSearchedProducts(visibleProducts));
    } else {
      dispatch(resetSearchedProducts());
    }
  };

  const searchHandler = e => {
    e.preventDefault();
    if (e.key === 'Enter' && searchQuery.length > 0) {
      navigate(`/search?s=${encodeURIComponent(trimmedSearchQuerry)}`);
    }
  };

  return (
    <SearchMobWrapper isVisible={isShowSearching}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* {isCloseBtn && (
          <SearchBtn type="button" onClick={toggleSearch}>
            <SearchIcon width={24} height={24}>
              <use href={`${Sprite}#icon-search`} />
            </SearchIcon>
          </SearchBtn>
        )} */}

        {isShowSearching && (
          <Container type="search">
            <FormContainer>
              <SearchForm
                onSubmit={handleSubmit}
                type="search"
                isVisible={isShowSearching}
              >
                <SearchInput
                  type="text"
                  value={searchQuery}
                  autoComplete="off"
                  autoFocus
                  placeholder="Шукати"
                  onChange={handleSearchChange}
                  onKeyUp={searchHandler}
                />
                <SearchBtn type="button" onClick={clearSearchInput}>
                  <SearchIcon width={24} height={24} style={{ fill: '#fff' }}>
                    <use href={`${Sprite}#icon-cross`} />
                  </SearchIcon>
                </SearchBtn>

                <SearchInputListWrapper>
                  {isEmpty && !searchQuery && (
                    <SearchListWrapper>
                      <p>Будь ласка, введіть ваш запит!</p>
                    </SearchListWrapper>
                  )}
                  {visibleProducts.length > 5 && showSearchList && (
                    <SearchListWrapper>
                      <SearchList>
                        {visibleProducts
                          .map(product => (
                            <SearchItem key={product.id}>
                              <ProductComponent
                                item={product}
                                type="search"
                                $sectionType={sectionType}
                              />
                            </SearchItem>
                          ))
                          .slice(0, 4)}
                      </SearchList>
                    </SearchListWrapper>
                  )}
                  {visibleProducts.length > 4 && showSearchList && (
                    <LinkWrapper onClick={clearSearchInput}>
                      <ProductsLink
                        to={`/search?s=${searchQuery.trim()}`}
                        state={{ from: location }}
                      >
                        Дивитись всі
                      </ProductsLink>
                    </LinkWrapper>
                  )}
                </SearchInputListWrapper>
              </SearchForm>
            </FormContainer>
          </Container>
        )}
      </div>
    </SearchMobWrapper>
  );
};
