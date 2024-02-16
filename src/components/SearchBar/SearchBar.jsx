import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { useMedia } from 'hooks/useMedia';
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
  InfoText,
} from './SearchBar.styled';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [closeSearchBtn, setCloseSearchBtn] = useState(false);
  const { isMobileScreen } = useMedia();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const previousLocation = useRef();
  const isLoading = useSelector(selectIsRefreshing);
  // FOR CLOSE OUTSIDE DIV
  const searchRef = useRef(null);
  const visibleProducts = useSelector(selectSearchedProducts) || [];
  const notFound = searchQuery.length >= 3 && visibleProducts.length === 0;

  const toggleSearch = () => {
    setSearchQuery('');
    setIsShowSearch(!isShowSearch);
    setCloseSearchBtn(!closeSearchBtn);
  };

  const showSearchList = searchQuery && isSearchListVisible;
  const trimmedSearchQuerry = searchQuery.trim();

  let inputValue;
  let searchTimeout;

  useEffect(() => {
    if (searchQuery === '') {
      setSearchQuery('');
      return;
    }
    if (searchQuery.length < 3) {
      return;
    }
    // eslint-disable-next-line
  }, [searchQuery]);

  useEffect(() => {
    setIsSearchListVisible(false);
    if (location.pathname !== '/search') {
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
  useEffect(() => {
    if (!isMobileScreen) {
      const handleClickOutside = e => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
          setIsShowSearch(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [isMobileScreen, searchRef, dispatch]);

  const clearSearchInput = () => {
    toggleSearch();
    setIsEmpty(false);
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
    clearTimeout(searchTimeout);
    inputValue = e.target.value.toLowerCase();

    searchTimeout = setTimeout(async () => {
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
        setSearchQuery(inputValue);
        try {
          dispatch(getSearchedProducts(inputValue));
        } catch (error) {
          console.log(error);
        }
        dispatch(setSearchedProducts(visibleProducts));
      } else {
        dispatch(resetSearchedProducts());
      }
      setIsSearchListVisible(true);
    }, 300);
  };

  const searchHandler = e => {
    e.preventDefault();
    if (e.key === 'Enter' && searchQuery.length > 0) {
      navigate(`/search?s=${encodeURIComponent(trimmedSearchQuerry)}`);
    }
  };

  return (
    <Wrapper ref={searchRef}>
      <SearchWrapper>
        <SearchBtn
          type="button"
          onClick={closeSearchBtn ? clearSearchInput : toggleSearch}
        >
          {isMobileScreen ? (
            <SearchIcon>
              <use href={`${Sprite}#icon-search`} />
            </SearchIcon>
          ) : isShowSearch ? (
            <SearchIcon>
              <use href={`${Sprite}#icon-cross`} />
            </SearchIcon>
          ) : (
            <SearchIcon>
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
                  value={inputValue}
                  autoComplete="off"
                  autoFocus
                  placeholder="Шукати"
                  onChange={handleSearchChange}
                  onKeyUp={searchHandler}
                />
                {isMobileScreen ? (
                  <SearchBtn type="button" onClick={clearSearchInput} $padding>
                    <SearchIcon type="input">
                      <use href={`${Sprite}#icon-cross`} />
                    </SearchIcon>
                  </SearchBtn>
                ) : (
                  <SearchBtn type="submit">
                    <SearchIcon type="input">
                      <use href={`${Sprite}#icon-search`} />
                    </SearchIcon>
                  </SearchBtn>
                )}
              </SearchForm>
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
                          {visibleProducts.slice(0, 4).map((product, index) => (
                            <SearchItem
                              key={product.id}
                              $even={index % 2 === 0}
                            >
                              <ProductComponent item={product} type="search" />
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
            </FormContainer>
          </Container>
        )}
      </SearchWrapper>
    </Wrapper>
  );
};
