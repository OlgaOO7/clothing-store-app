import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getSearchedProducts } from 'redux/products/operations';
import {
  selectSearchedProducts,
  selectIsRefreshing,
} from 'redux/products/selectors';
import {
  resetSearchedProducts,
  setSearchedProducts,
} from 'redux/products/productsSlice';
import { ProductComponent } from 'components/ProductComponent/ProductComponent.jsx';
import { Loader } from 'components/Loader/Loader';

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
  InfoText,
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

  const isLoading = useSelector(selectIsRefreshing);

  const showSearchList = searchQuery && isSearchListVisible;
  const trimmedSearchQuerry = searchQuery.trim();
  const visibleProducts = useSelector(selectSearchedProducts) || [];
  const notFound = searchQuery.length >= 3 && visibleProducts.length === 0;

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

  const emptySearch = () => {
    setSearchQuery('');
    toggleShowSearch();
  };

  const clearSearchInput = () => {
    emptySearch();
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
      // toggleShowSearch();
      emptySearch();
      setTimeout(() => {
        const searchUrl = `/search?s=${encodeURIComponent(
          trimmedSearchQuerry
        )}`;
        navigate(searchUrl);
      }, 300);
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
    <SearchMobWrapper $isVisible={isShowSearching}>
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
                $isVisible={isShowSearching}
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
                      <InfoText>Будь ласка, введіть назву товару</InfoText>
                    </SearchListWrapper>
                  )}
                  {isLoading ? (
                    <Loader type="small" />
                  ) : (
                    <div>
                      {notFound && (
                        <SearchListWrapper>
                          <InfoText>За запитом нічого не знайдено!</InfoText>
                        </SearchListWrapper>
                      )}
                      {visibleProducts.length > 0 && showSearchList && (
                        <SearchListWrapper>
                          <SearchList>
                            {visibleProducts
                              .slice(0, 4)
                              .map((product, index) => (
                                <SearchItem
                                  key={product.id}
                                  $even={index % 2 === 0}
                                >
                                  <ProductComponent
                                    item={product}
                                    type="search"
                                    $sectionType={sectionType}
                                  />
                                </SearchItem>
                              ))}
                          </SearchList>
                        </SearchListWrapper>
                      )}
                    </div>
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

SearchBarMob.propTypes = {
  toggleShowSearch: PropTypes.func.isRequired,
  isShowSearching: PropTypes.bool.isRequired,
  sectionType: PropTypes.string.isRequired,
};
