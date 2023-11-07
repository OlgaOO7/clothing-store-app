import navigationLinks from '../../data/navigationLinks';

import { Nav, NavList, StyledLink  } from './Navigation.styled';

export const NavigationMenu = () => {
  return (
    <Nav>
      <NavList>
        {navigationLinks.map(({ id, url, label }) => (
          <li key={id}>
            <StyledLink  to={url}>{label}</StyledLink>
          </li>
        ))}
      </NavList>
    </Nav>
  );
};
