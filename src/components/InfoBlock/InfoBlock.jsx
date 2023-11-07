import {
  Section,
  Wrapper,
  Title,
  Description,
  LinkTo,
  Image,
} from './InfoBlock.styled';

export const InfoBlock = () => {
  return (
    <Section>
      <Wrapper>
        <div>
          <Title>ZATYSHNA – це український бренд жіночого одягу</Title>
          <Description>
            Створений для жінок, що цінують комфорт. Стильно та зручно - це про
            нас і про тебе.
          </Description>
        </div>
        <LinkTo to="/">Познайомитись з брендом</LinkTo>
        <Image></Image>
      </Wrapper>
    </Section>
  );
};
