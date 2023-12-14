import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewProducts } from 'redux/products/selectors';
import { getProducts } from 'redux/products/operations';
import { useEffect } from 'react';

import { ProductComponent } from 'components/ProductComponent/ProductComponent';
import Sprite from '../../images/sprite.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Section,
  Wrapper,
  Title,
  PrevBtn,
  NextBtn,
  BtnIcon,
} from './NewProductsSlider.styled';

export const NewProductsSlider = () => {
  const products = useSelector(selectNewProducts) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
            940: {
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
          {products.map(item => (
            <SwiperSlide key={item.id}>
              <ProductComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <NextBtn className="swiper-button-next">
          <BtnIcon>
            <use href={`${Sprite}#icon-next`}></use>
          </BtnIcon>
        </NextBtn>
        <PrevBtn className="swiper-button-prev">
          <BtnIcon>
            <use href={`${Sprite}#icon-prev`}></use>
          </BtnIcon>
        </PrevBtn>
      </Wrapper>
    </Section>
  );
};
