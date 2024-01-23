import {
  Section,
  Wrapper,
  Title,
  Description,
  LinkTo,
  Image,
  Logo,
  ContentWrapper,
} from './InfoBlock.styled';

export const InfoBlock = () => {
  return (
    <Section>
      <Wrapper>
        <ContentWrapper>
          <Title>
            <Logo>Zatyshna</Logo> – це український бренд жіночого одягу
          </Title>
          <Description>
            Створений для жінок, що цінують комфорт. Стильно та зручно - це про
            нас і про тебе.
          </Description>
        </ContentWrapper>
        <LinkTo to="/about">Познайомитись з брендом</LinkTo>
        <Image></Image>
      </Wrapper>
    </Section>
  );
};
