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
  BtnWrapper,
} from './NewProductsSlider.styled';
import { useMedia } from 'hooks/useMedia';
import { bullets } from './bullets';

export const NewProductsSlider = () => {
  const products = useSelector(selectNewProducts) || [];
  const dispatch = useDispatch();
  const { isMobileScreen } = useMedia();
  const size = isMobileScreen ? 5 : 7;
  bullets({ isMobileScreen });

  useEffect(() => {
    dispatch(getProducts({ size }));
  }, [dispatch, size]);

  return (
    <Section>
      <Wrapper>
        <Title>Новинки</Title>
        <Swiper
          className="new"
          slidesPerView={2}
          spaceBetween={16}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className}" style="border-radius: 20px; height: 2px; background:#000000; margin: 0 5px;"></span>`;
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
              <ProductComponent item={item} type="new" />
            </SwiperSlide>
          ))}
        </Swiper>
        <BtnWrapper id="navigation-wrapper">
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
        </BtnWrapper>
      </Wrapper>
    </Section>
  );
};
