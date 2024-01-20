export const bullets = ({ isMobileScreen }) => {
  const bulletContainer = document.querySelector('.new .swiper-pagination');
  const bulletEls = document.querySelectorAll('.new .swiper-pagination-bullet');
  const wrapper = document.querySelector('#navigation-wrapper');

  let BULLET_SPACE = 8;
  let BUTTONS_WIDTH = 88;
  let BULLET_CONTAINER_SPACE = 36;
  let BULLETS_MARGIN = 4;
  let BULLET_CONTAINER_WIDTH = 144;

  if (isMobileScreen) {
    BULLET_SPACE = 10;
    BUTTONS_WIDTH = 96;
    BULLET_CONTAINER_SPACE = 48;
    BULLETS_MARGIN = 5;
    BULLET_CONTAINER_WIDTH = 110;
  }

  if (bulletContainer && bulletEls) {
    const bulletsCount = bulletContainer.childElementCount;

    function calculateBulletWidth(bulletContainerWidth) {
      return Math.round(
        (bulletContainerWidth - (bulletsCount - 1) * BULLET_SPACE) /
          bulletsCount
      );
    }

    function setWrapperWidth(bulletContainerWidth) {
      wrapper.style.width = `${
        bulletContainerWidth + BULLET_CONTAINER_SPACE + BUTTONS_WIDTH
      }px`;
      bulletEls.forEach(
        bulletEl => (bulletEl.style.margin = `0 ${BULLETS_MARGIN}px`)
      );
    }

    function setBulletWidth(bulletContainerWidth) {
      const bulletWidth = calculateBulletWidth(bulletContainerWidth);
      bulletEls.forEach(
        bulletEl => (bulletEl.style.width = `${bulletWidth}px`)
      );
    }

    setWrapperWidth(BULLET_CONTAINER_WIDTH);
    setBulletWidth(BULLET_CONTAINER_WIDTH);
  }
};
