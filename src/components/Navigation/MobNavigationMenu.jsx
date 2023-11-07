import navigationLinks from '../../data/navigationLinks';

import { MobNav, MobNavList, MobNavLinkItem, StyledLink } from './Navigation.styled';

export const MobNavigationMenu = ({isMobile, closeMobMenu}) => {
  return (
    <MobNav>
      <MobNavList>
        {navigationLinks.map(({ id, url, label }) => (
          <MobNavLinkItem key={id} onClick={() => isMobile && closeMobMenu()}>
            <StyledLink to={url}>{label}</StyledLink>
          </MobNavLinkItem>
        ))}
      </MobNavList>
    </MobNav>
  );
};
