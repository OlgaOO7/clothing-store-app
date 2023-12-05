import { Logo } from 'components/Logo/Logo';

import { NavigationMenu } from 'components/Navigation/NavigationMenu';
import { Background, FooterWrapper } from './Footer.styled';
import { Contacts } from './Contacts/Contacts';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import { useMedia } from 'hooks/useMedia';

export const Footer = () => {
  const { isMobileScreen, isDesktopScreen } = useMedia();

  return (
    <footer>
      <Background>
        <FooterWrapper>
          <div>
            <Logo />
            {!isMobileScreen && <SocialNetworks type="desktop" />}
          </div>
          <NavigationMenu sectionType="footer" />
          <div>
            <Contacts sectionType="footer" />
            {!isDesktopScreen && <SocialNetworks type="mobile" />}
          </div>
        </FooterWrapper>
      </Background>
    </footer>
  );
};
