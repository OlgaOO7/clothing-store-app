import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { useMedia } from 'hooks/useMedia';

import 'swiper/css';

import 'swiper/css/navigation';

import { Image } from './ImageSlider.styled';

export const ImageSlider = ({ photos, renderPhotos }) => {
  const { isMobileScreen } = useMedia();

  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#000000',
        '--swiper-navigation-size': `${isMobileScreen ? '16px' : '32px'} `,
      }}
      slidesPerView={3}
      spaceBetween={isMobileScreen ? 10 : 16}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {photos.map((item, index) => (
        <SwiperSlide key={index}>
          <li>
            <Image
              src={item.url}
              alt={item.color}
              onClick={() => {
                renderPhotos(index);
              }}
            />
          </li>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
