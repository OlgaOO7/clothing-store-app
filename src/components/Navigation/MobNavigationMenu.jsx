import { Link } from 'react-router-dom';
import navigationLinks from '../../data/navigationLinks';

import { MobNav, MobNavList, MobNavLinkItem } from './Navigation.styled';

export const MobNavigationMenu = () => {
  return (
    <MobNav>
      <MobNavList>
        {navigationLinks.map(({ id, url, label }) => (
          <MobNavLinkItem key={id}>
            <Link to={url}>{label}</Link>
          </MobNavLinkItem>
        ))}
      </MobNavList>
    </MobNav>
  );
};
