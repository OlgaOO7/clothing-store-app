import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { getSearchedProducts } from 'redux/products/operations';
import { selectSearchedProducts } from 'redux/products/selectors';
import {
  resetSearchedProducts,
  setSearchedProducts,
} from 'redux/products/productsSlice';
import { ProductComponent } from 'components/ProductComponent/ProductComponent.jsx';

import Sprite from '../../images/sprite.svg';

import {
  Wrapper,
  SearchWrapper,
  SearchBtn,
  SearchIcon,
  SearchInputListWrapper,
  SearchInput,
  SearchList,
  SearchItem,
  SearchListWrapper,
  ProductsLink,
  LinkWrapper,
  Container,
  FormContainer,
  SearchForm,
} from './SearchBar.styled';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  // const [isCloseBtn, setIsCloseBtn] = useState(false);
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  // const [notFoundProduct, setNotFoundProduct] = useState(false);
  const [closeSearchBtn, setCloseSearchBtn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const previousLocation = useRef();

  // FOR CLOSE OUTSIDE DIV
  // const searchRef = useRef(null);

  const visibleProducts = useSelector(selectSearchedProducts) || [];

  // const notFound = searchQuery.length >= 3 && visibleProducts.length === 0;

  const toggleSearch = () => {
    setIsShowSearch(!isShowSearch);
    setCloseSearchBtn(!closeSearchBtn);
    console.log(closeSearchBtn);
  };

  const showSearchList = searchQuery && isSearchListVisible;
  const trimmedSearchQuerry = searchQuery.trim();

  // if (visibleProducts.length === 0) {
  //   console.log('The array is empty.');
  // } else {
  //   console.log('The array is not empty.');
  // }

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

  // console.log(visibleProducts);

  useEffect(() => {
    setIsSearchListVisible(false);
    setIsEmpty(false);
    // setNotFoundProduct(false);
    if (location.pathname !== '/search') {
      setSearchQuery('');
      // setIsCloseBtn(false);
      setIsShowSearch(false);
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
  //       setIsShowSearch(false);
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [searchRef, dispatch]);

  const clearSearchInput = () => {
    setSearchQuery('');
    // setIsCloseBtn(false);
    toggleSearch();
    setIsEmpty(false);
    console.log(isEmpty);
    dispatch(resetSearchedProducts());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (trimmedSearchQuerry === '') {
      setIsEmpty(true);
      setIsSearchListVisible(false);
    } else {
      setIsSearchListVisible(false);
      setIsShowSearch(false);
      setTimeout(() => {
        const searchUrl = `/search?s=${encodeURIComponent(
          trimmedSearchQuerry
        )}`;
        navigate(searchUrl);
      }, 300);
    }
  };

  const handleSearchChange = e => {
    console.log(searchQuery.length);
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
    // setIsCloseBtn(inputValue.length > 0);
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

  // Wrapper ref={searchRef} for close outside div

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBtn
          type="button"
          onClick={closeSearchBtn ? clearSearchInput : toggleSearch}
        >
          {isShowSearch ? (
            <SearchIcon width={24} height={24}>
              <use href={`${Sprite}#icon-cross`} />
            </SearchIcon>
          ) : (
            <SearchIcon width={24} height={24}>
              <use href={`${Sprite}#icon-search`} />
            </SearchIcon>
          )}
        </SearchBtn>
        {isShowSearch && (
          <Container>
            <FormContainer>
              <SearchForm onSubmit={handleSubmit}>
                <SearchInput
                  type="text"
                  value={searchQuery}
                  autoComplete="off"
                  autoFocus
                  placeholder="Шукати"
                  onChange={handleSearchChange}
                  onKeyUp={searchHandler}
                />

                <SearchBtn type="submit">
                  <SearchIcon width={24} height={24} style={{ fill: '#fff' }}>
                    <use href={`${Sprite}#icon-search`} />
                  </SearchIcon>
                </SearchBtn>
              </SearchForm>

              <SearchInputListWrapper>
                {isEmpty && !searchQuery && (
                  <SearchListWrapper>
                    <p>Будь ласка, введіть ваш запит!</p>
                  </SearchListWrapper>
                )}
                {/* {notFound && (
                  <SearchListWrapper>
                    <p>За запитом нічого не знайдено!</p>
                  </SearchListWrapper>
                )} */}
                {visibleProducts.length > 5 && showSearchList && (
                  <SearchListWrapper>
                    <SearchList>
                      {visibleProducts
                        .map(product => (
                          <SearchItem key={product.id}>
                            <ProductComponent item={product} type="search" />
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
            </FormContainer>
          </Container>
        )}
      </SearchWrapper>
    </Wrapper>
  );
};
