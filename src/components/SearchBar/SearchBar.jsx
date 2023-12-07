import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

// import { fetchProducts } from '../../services/search-product.js';
import { getSearchedProducts } from 'redux/products/operations';
import { ProductComponent } from 'components/ProductComponent/ProductComponent.jsx';
// import { SearchBarMob } from './SearchBarMob.jsx';
import Sprite from '../../images/sprite.svg';

import { selectSearchedProducts } from 'redux/products/selectors';

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
  ProductsLink,
  LinkWrapper,
} from './SearchBar.styled';
// import { log } from 'util';

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  // const [productsBySearch, setProductsBySearch] = useState([]);
  const [isCloseBtn, setIsCloseBtn] = useState(false);
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [notFoundProduct, setNotFoundProduct] = useState(false);
  const [closeSearchBtn, setCloseSearchBtn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const previousLocation = useRef();

  // FOR CLOSE OUTSIDE DIV
  // const searchRef = useRef(null);

  const visibleProducts = useSelector(selectSearchedProducts) || [];
  // const productsFound = useSelector(selectProductsFound);


  if (visibleProducts.length === 0) {
    console.log('The array is empty.');
  } else {
    console.log('The array is not empty.');
  }

  const toggleSearch = () => {
    setIsShowSearch(!isShowSearch);
    setCloseSearchBtn(!closeSearchBtn);
    console.log(closeSearchBtn);
  };

  const showSearchList = searchQuery && isSearchListVisible;

  const trimmedSearchQuerry = searchQuery.trim();

  // const title = searchQuery;
  // TO DO: when the product base will be imorted, it is needed to cut visibleProducts and show only max 4 product items in 'SearchList',
  // all list of searched products will be displayed by clicking on link 'Дивитись всі' at 'SearchProductPage' page

  useEffect(() => {
    if (searchQuery === '') {
      // dispatch(setSearchQuery(''));
      setSearchQuery('');
      return;
    }

    if (searchQuery.length < 3) {
      setNotFoundProduct(false);
      return;
    }

    // if (searchQuery.length < 3) {
    //   // dispatch(setSearchQuery('')); 
    //   // setNotFoundProduct(false);
    //   // dispatch(productsFound(false));
    //   return;
    // }

    // try {
    //   // dispatch(setSearchQuery(searchQuery)); 
    //     dispatch(getSearchedProducts(searchQuery));
    // } catch (error) {
    //   console.log(error);
    // }
        // eslint-disable-next-line
  }, [searchQuery, dispatch]);

  console.log(visibleProducts);
        // // const getSearchProduct = async () => {
        //   dispatch(getSearchedProducts(searchQuery));
        //   console.log(dispatch(getSearchedProducts('фут')));
        //   // const {
        //   //   data: { content },
        //   // } = await getSearchedProducts(searchQuery);
        //   // const visibleProducts = content.filter(product =>
        //   //   product.title.toLowerCase().includes(searchQuery.toLowerCase())
        //   // );
        //   // if (visibleProducts.length === 0) {
        //   //   setNotFoundProduct(true);
        //   // } else {
        //   //   setNotFoundProduct(false);
        //   // }
        //   // console.log({
        //   //   data: { content },
        //   // });
        //   // setProductsBySearch(visibleProducts);
        // // };
        // // getSearchProduct();

  useEffect(() => {
    setIsSearchListVisible(false);
    setIsEmpty(false);
    setNotFoundProduct(false);
    if (location.pathname !== '/search') {
      setSearchQuery('');
      setIsCloseBtn(false);
      setIsShowSearch(false);
      previousLocation.current = location.pathname;
    }
    // eslint-disable-next-line
  }, [location]);



  // FOR CLOSE OUTSIDE DIV
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (searchRef.current && !searchRef.current.contains(event.target)) {
  //       setIsShowSearch(false);
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, [searchRef]);

  const clearSearchInput = () => {
    setSearchQuery('');
    setIsCloseBtn(false);
    toggleSearch();
    setIsEmpty(false);
    console.log(isEmpty);
  };

  // const closeSearch = () => {
  //   clearSearchInput();
  //   setCloseSearchBtn(false);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    // const trimmedSearchQuerry = searchQuery.trim();
    if (trimmedSearchQuerry === '') {
      setIsEmpty(true);
      setIsSearchListVisible(false);
    } else {
      // setSearchQuery('');
      // setProductsBySearch([]);
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
    setIsCloseBtn(inputValue.length > 0);
    if (inputValue.length < 3) {
      setIsEmpty(false);
    } else if (inputValue === '') {
      setSearchQuery('');
    } else if (inputValue.length >= 3) {
      setIsSearchListVisible(true);
      try {
        dispatch(getSearchedProducts(searchQuery));
    } catch (error) {
      console.log(error);
    }
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



// Wrapper ref={searchRef} for close outside div

  return (
    <Wrapper>
      <SearchWrapper>
        <SearchBtn type="button" onClick={closeSearchBtn ? clearSearchInput : toggleSearch}>
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
          <div
            style={{
              position: 'absolute',
              zIndex: '1002',
              top: '3rem',
              right: '0',
            }}
          >
            <div style={{ position: 'relative' }}>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  width: 287,
                  padding: '10px 18px',
                  background: '#292929',
                  borderRadius: '2px 2px 0px 0px',
                }}
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

                <SearchBtn type="submit">
                  <SearchIcon width={24} height={24} style={{ fill: '#fff' }}>
                    <use href={`${Sprite}#icon-search`} />
                  </SearchIcon>
                </SearchBtn>
              </form>

              <SearchInputListWrapper>
                {isEmpty && !searchQuery && (
                  <SearchListWrapper>
                    <p>Будь ласка, введіть ваш запит!</p>
                  </SearchListWrapper>
                )}
                {notFoundProduct && showSearchList && (
                  <SearchListWrapper>
                    <p>За вашим запитом нічого не знайдено!</p>
                  </SearchListWrapper>
                )}
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
                  <LinkWrapper onClick={toggleSearch}>
                    <ProductsLink
                      to={`/search?s=${searchQuery.trim()}`}
                      state={{ from: location }}
                    >
                      Дивитись всі
                    </ProductsLink>
                  </LinkWrapper>
                )}
              </SearchInputListWrapper>
            </div>
          </div>
        )}
      </SearchWrapper>

      <SearchMobWrapper>
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
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
