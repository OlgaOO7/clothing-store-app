import {
  LeftText,
  LeftTextWrapper,
  RightText,
  RightTextWrapper,
  Section,
  Wrapper,
} from './MainSection.styled';

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
      </Wrapper>
    </Section>
  );
};
