import { Navigation } from 'components/Navigation/Navigation';

import {
  HeaderWrapper,
} from './Header.styled';
import React from 'react';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Navigation sectionType='header' />
    </HeaderWrapper>
  );
};
