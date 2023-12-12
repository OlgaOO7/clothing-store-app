import { useState } from 'react';
import { Navigation } from 'components/Navigation/Navigation';
import { SearchBarMob } from 'components/SearchBar/SearchBarMob';

import { HeaderWrapper, NavigationContainer } from './Header.styled';
import React from 'react';

export const Header = () => {
  const [isShownSearching, setIsShownSearching] = useState(false);

  const toggleShowSearch = () => {
    setIsShownSearching(!isShownSearching);
  };

  return (
    <HeaderWrapper>
      <NavigationContainer>
        <Navigation sectionType="header" toggleShowSearch={toggleShowSearch} />
        <SearchBarMob
          isShowSearching={isShownSearching}
          toggleShowSearch={toggleShowSearch}
          sectionType="header"
        />
      </NavigationContainer>
    </HeaderWrapper>
  );
};
