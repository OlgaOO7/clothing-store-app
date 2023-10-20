import { Link } from 'react-router-dom';
import navigationLinks from '../../data/navigationLinks';

import { Nav, NavList } from './Navigation.styled';

export const NavigationMenu = () => {
  return (
    <Nav>
      <NavList>
        {navigationLinks.map(({ id, url, label }) => (
          <li key={id}>
            <Link to={url}>{label}</Link>
          </li>
        ))}
      </NavList>
    </Nav>
  );
};
