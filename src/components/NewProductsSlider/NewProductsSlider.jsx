import { Section, Wrapper, Title, Link } from './NewProductsSlider.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import data from './data.json';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const NewProductsSlider = () => {
  const { content } = data;

  return (
    <Section>
      <Wrapper>
        <Title>Новинки</Title>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return ` <a
                  class="${className} hover:opacity-100 focus:opacity-100 transition duration-300"
                  style={{ borderRadius: '0', width: '30px', height: '1px' }}
                  tabIndex="0"
                ></a>`;
            },
          }}
          navigation={{
            clickable: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          style={{ width: '100%' }}
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={{
                  width: '322px',
                  height: '416px',
                  backgroundColor: 'gray',
                }}
              ></div>
              <h3>{item.title}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-next uppercase absolute font-thin text-[33px] leading-[40px] tracking-[0] transition duration-300">
          Next
        </button>
        <button className="swiper-button-prev uppercase absolute font-thin text-[33px] leading-[40px] tracking-[0] transition duration-300">
          Prev
        </button>
      </Wrapper>
    </Section>
  );
};
