import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Navigation } from 'components/Navigation/Navigation';
import { SearchBarMob } from 'components/SearchBar/SearchBarMob';
import { useMedia } from 'hooks/useMedia';

import { HeaderWrapper, NavigationContainer } from './Header.styled';

export const Header = () => {
  const [isShownSearching, setIsShownSearching] = useState(false);
  const { isMobileScreen } = useMedia();
  const location = useLocation();

  const toggleShowSearch = () => {
    setIsShownSearching(!isShownSearching);
  };

  useEffect(() => {
    setIsShownSearching(false);
  }, [location.pathname]);

  return (
    <HeaderWrapper>
      <NavigationContainer>
        <Navigation sectionType="header" toggleShowSearch={toggleShowSearch} />
        {isMobileScreen && (
          <SearchBarMob
            isShowSearching={isShownSearching}
            toggleShowSearch={toggleShowSearch}
            sectionType="header"
          />
        )}
      </NavigationContainer>
    </HeaderWrapper>
  );
};
