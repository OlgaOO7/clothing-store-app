import { useState, useEffect } from 'react';
import {
  Link,
  useLocation,
  useSearchParams,
  useNavigate,
} from 'react-router-dom';

import { fetchProducts } from '../../services/search-product.js';
import Sprite from '../../images/sprite.svg';

import {
  SearchWrapper,
  SearchBtn,
  SearchIcon,
  SearchMobWrapper,
  SearchInputListWrapper,
  SearchInput,
  SearchCloseIcon,
} from './SearchBar.styled';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [productsBySearch, setProductsBySearch] = useState([]);
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get('s') ?? '';

  const location = useLocation();
  const navigate = useNavigate();

  if (!searchQuery && queryParams) {
    setSearchQuery(queryParams);
  }
  useEffect(() => {
    if (searchQuery.length < 3) {
      setProductsBySearch([]);
      return;
    }
    try {
      const getSearchProduct = async () => {
        const {
          data: { content },
        } = await fetchProducts(queryParams);
        const visibleProducts = content.filter(product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProductsBySearch(visibleProducts);
      };

      getSearchProduct();
    } catch (error) {
      console.log(error);
    }
  }, [searchQuery, queryParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedSearchQuerry = searchQuery.trim();
    setProductsBySearch([]);
    setSearchQuery('');
    if (trimmedSearchQuerry === '') {
      setIsEmpty(true);
      const searchUrl = `/search?s=`;
      navigate(searchUrl);
    } else {
      const searchUrl = `/search?s=${encodeURIComponent(
        trimmedSearchQuerry
      )}`;
      navigate(searchUrl);
    }
    setProductsBySearch([]);
    setSearchQuery('');
  };

  const handleSearchChange = e => {
    const inputValue = e.target.value.toLowerCase();
    setSearchQuery(inputValue);
    if (inputValue < 3) {
      setIsEmpty(false);
    } else if (inputValue === '') {
      setSearchQuery('');
      console.log(searchQuery);
    }

    console.log(e.target.value);
    if (searchQuery) {
      setIsEmpty(false);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <SearchWrapper>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            width: 184,
            borderBottom: '2px solid #000',
          }}
        >
          <SearchBtn type="submit" onClick={handleSubmit}>
            {searchQuery.length < 3 ? (
              <SearchIcon width={24} height={24}>
                <use href={`${Sprite}#icon-search`} />
              </SearchIcon>
            ) : (
              <SearchCloseIcon
                width={24}
                height={24}
                style={{ fill: '#4C4B4B' }}
              >
                <use href={`${Sprite}#icon-cross`} />
              </SearchCloseIcon>
            )}
          </SearchBtn>

          <SearchInput
            type="text"
            value={searchParams}
            autoComplete="off"
            autoFocus
            placeholder="Шукати"
            onChange={handleSearchChange}
          />
        </form>
      </SearchWrapper>

      {isEmpty && <p>Будь ласка, введіть ваш запит!</p>}

      {productsBySearch.length > 0 && (
        <SearchInputListWrapper>
          <ul>
            {productsBySearch.map(
              ({
                id,
                title,
                price: {
                  value,
                  currency: { code },
                },
              }) => (
                <li key={id}>
                  <Link to={`/product/${id}`} state={{ from: location }}>
                    <img alt={title} width={60} />
                    <p>{title}</p>
                    <p>{value}</p>
                    <p>{code}</p>
                  </Link>
                </li>
              )
            )}
          </ul>
        </SearchInputListWrapper>
      )}

      <SearchMobWrapper>
        <SearchBtn type="button">
          <SearchIcon width={24} height={24}>
            <use href={`${Sprite}#icon-search`} />
          </SearchIcon>
        </SearchBtn>
      </SearchMobWrapper>
    </div>
  );
};
