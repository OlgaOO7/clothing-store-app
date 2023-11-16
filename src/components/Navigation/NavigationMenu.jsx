import navigationLinks from '../../data/navigationLinks';

import { Nav, NavList, StyledLink } from './Navigation.styled';

export const NavigationMenu = ({ type }) => {
  return (
    <Nav type={type}>
      <NavList type={type}>
        {navigationLinks.map(({ id, url, label }) => (
          <li key={id}>
            <StyledLink to={url} type={type}>
              {label}
            </StyledLink>
          </li>
        ))}
      </NavList>
    </Nav>
  );
};
