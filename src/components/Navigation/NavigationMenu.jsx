import navigationLinks from '../../data/navigationLinks';

import { Nav, NavList, StyledLink } from './Navigation.styled';

export const NavigationMenu = ({ sectionType }) => {
  return (
    <div style={{ display: 'flex' }}>
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
