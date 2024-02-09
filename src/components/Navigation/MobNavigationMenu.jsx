import PropTypes from 'prop-types';

import navigationLinks from '../../data/navigationLinks';
import { Contacts } from '../Footer/Contacts/Contacts';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

import {
  MobNavContainer,
  MobNav,
  MobNavList,
  MobNavLinkItem,
  StyledLink,
  NavWrapper,
} from './Navigation.styled';

export const MobNavigationMenu = ({ isMobile, closeMobMenu }) => {
  return (
    <MobNavContainer>
      <MobNav>
        <NavWrapper>
          <MobNavList>
            {navigationLinks.map(({ id, url, label }) => (
              <MobNavLinkItem
                key={id}
                onClick={() => isMobile && closeMobMenu()}
              >
                <StyledLink to={url}>{label}</StyledLink>
              </MobNavLinkItem>
            ))}
          </MobNavList>
          <Contacts closeMobMenu={closeMobMenu} />
          <SocialNetworks />
        </NavWrapper>
      </MobNav>
    </MobNavContainer>
  );
};

MobNavigationMenu.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  closeMobMenu: PropTypes.func.isRequired,
};
