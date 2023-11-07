import { Link } from 'react-router-dom';
import {
  ImageWrapper,
  LeftText,
  LeftTextWrapper,
  RightText,
  RightTextWrapper,
  Section,
  Wrapper,
  LinkTo,
} from './MainSection.styled';
import Sprite from '../../images/sprite.svg';

export const MainSection = () => {
  return (
    <Section>
      <Wrapper>
        <LeftTextWrapper>
          <LeftText>ZATYSHNA</LeftText>
          <LeftText>ZATYSHNA</LeftText>
          <LeftText>ZATYSHNA</LeftText>
          <LeftText>ZATYSHNA</LeftText>
          <LeftText>ZATYSHNA</LeftText>
        </LeftTextWrapper>
        <RightTextWrapper>
          <RightText>ZATYSHNA</RightText>
          <RightText>ZATYSHNA</RightText>
          <RightText>ZATYSHNA</RightText>
          <RightText>ZATYSHNA</RightText>
          <RightText>ZATYSHNA</RightText>
        </RightTextWrapper>
        <ImageWrapper>
          <svg>
            <use href={`${Sprite}#icon-image`}></use>
          </svg>
          <Link to="/catalog">
            <LinkTo>Каталог</LinkTo>
          </Link>
        </ImageWrapper>
      </Wrapper>
    </Section>
  );
};
