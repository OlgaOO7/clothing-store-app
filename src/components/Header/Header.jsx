import React from 'react';

import { Navigation } from 'components/Navigation/Navigation';

import { HeaderWrapper, NavigationContainer } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </HeaderWrapper>
  );
};
