import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { fetchProducts } from '../../services/search-product.js';
// import { SearchBarMob } from './SearchBarMob.jsx';
import Sprite from '../../images/sprite.svg';

import {
  Wrapper,
  SearchWrapper,
  SearchBtn,
  SearchCloseBtn,
  SearchIcon,
  SearchMobWrapper,
  SearchInputListWrapper,
  SearchInput,
  SearchCloseIcon,
  SearchList,
  SearchItem,
  MobSearchWrapper,
  SearchListWrapper,
} from './SearchBar.styled';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [productsBySearch, setProductsBySearch] = useState([]);
  const [isCloseBtn, setIsCloseBtn] = useState(false);
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [notFoundProduct, setNotFoundProduct] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const previousLocation = useRef();

  const toggleSearch = () => {
    setIsShowSearch(!isShowSearch);
  };

  const showSearchList = searchQuery && isSearchListVisible;

  const trimmedSearchQuerry = searchQuery.trim();

  // TO DO: when the product base will be imorted, it is needed to cut visibleProducts and show only max 4 product items in 'SearchList',
  // all list of searched products will be displayed by clicking on link 'Дивитись всі' at 'SearchProductPage' page

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    
    if (searchQuery.length < 3) {
      setProductsBySearch([]);
      setNotFoundProduct(false);
      return;
    }
    try {
      const getSearchProduct = async () => {
        const {
          data: { content },
        } = await fetchProducts(searchQuery);
        const visibleProducts = content.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (visibleProducts.length === 0) {
          setNotFoundProduct(true);
        } else {
          setNotFoundProduct(false);
        }
        // console.log({
        //   data: { content },
        // });
        setProductsBySearch(visibleProducts);
      };
      getSearchProduct();
    } catch (error) {
      console.log(error);
    }
  }, [searchQuery]);

  useEffect(() => {
    setIsSearchListVisible(false);
    setIsEmpty(false);
    setNotFoundProduct(false);
    if (location.pathname !== '/search') {
      setSearchQuery('');
      setIsCloseBtn(false);
      previousLocation.current = location.pathname;
    }
    // eslint-disable-next-line
  }, [location]);

  const clearSearchInput = () => {
    setSearchQuery('');
    setIsCloseBtn(false);
    toggleSearch();
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const trimmedSearchQuerry = searchQuery.trim();
    if (trimmedSearchQuerry === '') {
      setIsEmpty(true);
      setIsSearchListVisible(false);
    } else {
      setProductsBySearch([]);
      setIsSearchListVisible(false);
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
    setIsCloseBtn(inputValue.length > 0);
    if (inputValue < 3) {
      setIsEmpty(false);
    } else if (inputValue === '') {
      setSearchQuery('');
    } else {
      setIsSearchListVisible(true);
    }
    if (searchQuery) {
      setIsEmpty(false);
    }
  };

  const searchHandler = e => {
    e.preventDefault();
    if (e.key === 'Enter' && searchQuery.length > 0) {
      navigate(`/search?s=${encodeURIComponent(trimmedSearchQuerry)}`);
    }
  };

  return (
    <Wrapper>
      <SearchWrapper>
        {/* <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            width: 184,
            borderBottom: '2px solid #000',
          }}
        >
          <SearchBtn type="submit">
            <SearchIcon width={24} height={24}>
              <use href={`${Sprite}#icon-search`} />
            </SearchIcon>
          </SearchBtn>

          <SearchInput
            type="text"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Шукати"
            onChange={handleSearchChange}
            onKeyUp={searchHandler}
          />

          {isCloseBtn && (
            <SearchCloseBtn type="button" onClick={clearSearchInput}>
              <SearchCloseIcon
                width={24}
                height={24}
                style={{ fill: '#4C4B4B' }}
              >
                <use href={`${Sprite}#icon-cross`} />
              </SearchCloseIcon>
            </SearchCloseBtn>
          )}
        </form> */}
                  <SearchBtn type="button">
            <SearchIcon width={24} height={24}>
              <use href={`${Sprite}#icon-search`} />
            </SearchIcon>
          </SearchBtn>
      </SearchWrapper>

      <SearchInputListWrapper>
        {isEmpty && !searchQuery && <SearchListWrapper><p>Будь ласка, введіть ваш запит!</p></SearchListWrapper>}
        {notFoundProduct && showSearchList && (<SearchListWrapper><p>За вашим запитом нічого не знайдено!</p></SearchListWrapper>) }
        {productsBySearch.length > 0 && showSearchList && (
          <SearchListWrapper>
            <SearchList>
              {productsBySearch.map(
                ({
                  id,
                  title,
                  price: {
                    value,
                    currency: { code },
                  },
                  photos
                }) => (
                  <SearchItem key={id}>
                    <Link to={`/catalog/${id}`} state={{ from: location }}>
                      <img src={photos[0].url} alt={title} width={60} />
                      <p>{title}</p>
                      <p>{value}</p>
                      <p>{code}</p>
                    </Link>
                  </SearchItem>
                )
              )}
            </SearchList>

            {/* TO DO: change condition for 'productsBySearch.length' on 'productsBySearch.length >= 4', when product base with all goods will be imported  */}
            {productsBySearch.length > 3 && (
              <Link
                to={`/search?s=${searchQuery.trim()}`}
                state={{ from: location }}
              >
                Дивитись всі
              </Link>
            )}
          </SearchListWrapper>
        )}
      </SearchInputListWrapper>

      {/* (<p>За вашим запитом нічого не знайдено!</p>) */}

      <SearchMobWrapper>
        <div style={{alignItems: 'center', justifyContent: 'center'}}>
          {isShowSearch ? (
            <MobSearchWrapper>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  width: 184,
                  borderBottom: '2px solid #000',
                }}
              >
                <SearchBtn type="submit">
                  <SearchIcon width={24} height={24}>
                    <use href={`${Sprite}#icon-search`} />
                  </SearchIcon>
                </SearchBtn>

                <SearchInput
                  type="text"
                  value={searchQuery}
                  autoComplete="off"
                  autoFocus
                  placeholder="Шукати"
                  onChange={handleSearchChange}
                  onKeyUp={searchHandler}
                />

                {isCloseBtn && (
                  <SearchCloseBtn type="button" onClick={clearSearchInput}>
                    <SearchCloseIcon
                      width={24}
                      height={24}
                      style={{ fill: '#4C4B4B' }}
                    >
                      <use href={`${Sprite}#icon-cross`} />
                    </SearchCloseIcon>
                  </SearchCloseBtn>
                )}
              </form>
            </MobSearchWrapper>
          ) : (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <SearchBtn type="button" onClick={toggleSearch}>
              <SearchIcon width={24} height={24}>
                <use href={`${Sprite}#icon-search`} />
              </SearchIcon>
            </SearchBtn>
            </div>
          )}
        </div>
      </SearchMobWrapper>
    </Wrapper>
  );
};