import navigationLinks from '../../data/navigationLinks';
import { Contacts } from '../Footer/Contacts/Contacts';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
// import { Link } from 'react-router-dom';

import {
  MobNavContainer,
  MobNav,
  MobNavList,
  MobNavLinkItem,
  StyledLink,
  NavWrapper
} from './Navigation.styled';

export const MobNavigationMenu = ({ isMobile, closeMobMenu, sectionType }) => {
  return (
    <MobNavContainer>
      <MobNav>
        <NavWrapper>
        <MobNavList>
          {navigationLinks.map(({ id, url, label }) => (
            <MobNavLinkItem key={id} onClick={() => isMobile && closeMobMenu()}>
              <StyledLink to={url}>{label}</StyledLink>
            </MobNavLinkItem>
          ))}
        </MobNavList>
        <Contacts />
        <SocialNetworks />
        </NavWrapper>

      </MobNav>
    </MobNavContainer>
  );
};
