import Sprite from '../../images/sprite.svg';

import { IconWrapper, MenuIcon } from './SocialNetworks.styled';

export const SocialNetworks = ({ type }) => {
  return (
    <IconWrapper type={type}>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <MenuIcon type={type} style={{ width: '28px', height: '28px' }}>
          <use href={`${Sprite}#icon-circum_instagram`} />
        </MenuIcon>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <MenuIcon type={type}>
          <use href={`${Sprite}#icon-fe_facebook`} />
        </MenuIcon>
      </a>
    </IconWrapper>
  );
};
