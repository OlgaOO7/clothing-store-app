import { Link } from 'react-router-dom';
import navigationLinks from '../../data/navigationLinks';

import { MobNav, MobNavList, MobNavLinkItem } from './Navigation.styled';

export const MobNavigationMenu = ({isMobile, closeMobMenu}) => {
  return (
    <MobNav>
      <MobNavList>
        {navigationLinks.map(({ id, url, label }) => (
          <MobNavLinkItem key={id} onClick={() => isMobile && closeMobMenu()}>
            <Link to={url}>{label}</Link>
          </MobNavLinkItem>
        ))}
      </MobNavList>
    </MobNav>
  );
};
