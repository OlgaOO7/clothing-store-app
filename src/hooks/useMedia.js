import { TABLET_SCREEN, DESKTOP_SCREEN } from '../enums/breakPointConstants.js';
import { useEffect, useState } from 'react';

export const useMedia = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth < TABLET_SCREEN
  );
  const [isTabletScreen, setIsTabletScreen] = useState(
    window.innerWidth >= TABLET_SCREEN && window.innerWidth < DESKTOP_SCREEN
  );
  const [isDesktopScreen, setIsDesktopScreen] = useState(
    window.innerWidth >= DESKTOP_SCREEN
  );

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth < TABLET_SCREEN);
    setIsTabletScreen(
      window.innerWidth >= TABLET_SCREEN && window.innerWidth < DESKTOP_SCREEN
    );
    setIsDesktopScreen(window.innerWidth >= DESKTOP_SCREEN);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobileScreen, isTabletScreen, isDesktopScreen };
};
