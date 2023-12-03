import { Logo } from 'components/Logo/Logo';

import { NavigationMenu } from 'components/Navigation/NavigationMenu';
import { FooterWrapper } from './Footer.styled';
import { Contacts } from './Contacts/Contacts';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';

export const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <div>
          <Logo />
          <SocialNetworks type="desktop" />
        </div>
        <NavigationMenu sectionType="footer" />
        <div>
          <Contacts sectionType="footer" />
          <SocialNetworks type="mobile" />
        </div>
      </FooterWrapper>
    </footer>
  );
};
