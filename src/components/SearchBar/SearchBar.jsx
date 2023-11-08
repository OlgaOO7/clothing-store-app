import { useState, useEffect, useRef } from 'react';
import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { fetchProducts } from '../../services/search-product.js';
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
  SearchItem
} from './SearchBar.styled';

  export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [productsBySearch, setProductsBySearch] = useState([]);
  const [isCloseBtn, setIsCloseBtn] = useState(false);
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);

  const showSearchList = searchQuery && isSearchListVisible;

  const location = useLocation();
  const navigate = useNavigate();
  const previousLocation = useRef();

  useEffect(() => {
    if (searchQuery.length < 3) {
      setProductsBySearch([]);
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
        console.log({
          data: { content },
        });
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
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedSearchQuerry = searchQuery.trim();
    
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

  return (
    <Wrapper>
      <SearchWrapper>
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
      </SearchWrapper>

      <SearchInputListWrapper>
        {isEmpty && !searchQuery && <p>Будь ласка, введіть ваш запит!</p>}
        {productsBySearch.length > 0 && showSearchList  && (
          <div>
            <SearchList>
              {productsBySearch.map(
                ({
                  id,
                  title,
                  price: {
                    value,
                    currency: { code },
                  },
                }) => (
                  <SearchItem key={id}>
                    <Link to={`/catalog/${id}`} state={{ from: location }}>
                      <img alt={title} width={60} />
                      <p>{title}</p>
                      <p>{value}</p>
                      <p>{code}</p>
                    </Link>
                  </SearchItem>
                )
              )}
            </SearchList>
            {productsBySearch.length > 2 && (
              <Link
                to={`/search?s=${searchQuery.trim()}`}
                state={{ from: location }}
              >
                Дивитись всі
              </Link>
            )}
          </div>
        )}
      </SearchInputListWrapper>

      {/* (<p>За вашим запитом нічого не знайдено!</p>) */}

      <SearchMobWrapper>
        <SearchBtn type="button">
          <SearchIcon width={24} height={24}>
            <use href={`${Sprite}#icon-search`} />
          </SearchIcon>
        </SearchBtn>
      </SearchMobWrapper>
    </Wrapper>
  );
};
