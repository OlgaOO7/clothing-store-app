import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { useMedia } from 'hooks/useMedia';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const ImageSlider = ({ photos, renderPhotos }) => {
  const { isMobileScreen } = useMedia();

  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      slidesPerView={3}
      spaceBetween={isMobileScreen ? 10 : 24}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {photos.map((item, index) => (
        <SwiperSlide key={index}>
          <li>
            <img
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
