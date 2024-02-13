import PropTypes from 'prop-types';

import navigationLinks from '../../data/navigationLinks';
import { Nav, NavList, StyledLink } from './Navigation.styled';

export const NavigationMenu = ({ sectionType }) => {
  return (
    <div>
      <Nav $sectionType={sectionType}>
        <NavList $sectionType={sectionType}>
          {navigationLinks.map(({ id, url, label }) => (
            <li key={id}>
              <StyledLink to={url} $sectionType={sectionType}>
                {label}
              </StyledLink>
            </li>
          ))}
        </NavList>
      </Nav>
    </div>
  );
};

NavigationMenu.propTypes = {
  sectionType: PropTypes.string,
};
