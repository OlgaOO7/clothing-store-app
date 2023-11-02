import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'redux/products/operations';
import { useEffect } from 'react';

import { ProductComponent } from 'components/ProductComponent/ProductComponent';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Section,
  Wrapper,
  Title,
  PrevBtn,
  NextBtn,
} from './NewProductsSlider.styled';

export const NewProductsSlider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  });
  const products = useSelector(state => state.products.products.content) || [];
  console.log(products);

  return (
    <Section>
      <Wrapper>
        <Title>Новинки</Title>
        <Swiper
          slidesPerView={2}
          spaceBetween={16}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}" style="border-radius: 0; width: 30px; height: 2px; background:#000000;"></span>`;
            },
          }}
          navigation={{
            clickable: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          style={{ width: '100%', paddingBottom: '50px' }}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <NextBtn className="swiper-button-next">
          <svg
            width="31"
            height="16"
            viewBox="0 0 31 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.7071 8.7071C31.0976 8.31658 31.0976 7.68341 30.7071 7.29289L24.3431 0.92893C23.9526 0.538406 23.3195 0.538406 22.9289 0.92893C22.5384 1.31945 22.5384 1.95262 22.9289 2.34314L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.7071ZM8.74228e-08 9L30 9L30 7L-8.74228e-08 7L8.74228e-08 9Z"
              fill="#4C4B4B"
            />
          </svg>
        </NextBtn>
        <PrevBtn className="swiper-button-prev">
          <svg
            width="31"
            height="16"
            viewBox="0 0 31 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292891 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292891 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292891 7.29289ZM31 7L0.999998 7V9L31 9V7Z"
              fill="#4C4B4B"
            />
          </svg>
        </PrevBtn>
      </Wrapper>
    </Section>
  );
};
