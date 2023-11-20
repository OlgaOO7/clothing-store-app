// import { Logo } from 'components/Logo/Logo';
import { Navigation } from 'components/Navigation/Navigation';

import {
  HeaderWrapper,
} from './Header.styled';
import React from 'react';

export const Header = () => {
  return (
    <HeaderWrapper>
    {/* <Logo />   */}
      <Navigation type="header" />
    </HeaderWrapper>
  );
};
