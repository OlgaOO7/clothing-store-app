import {
  Section,
  Wrapper,
  Title,
  Description,
  Button,
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
        <Button>Познайомитись з брендом</Button>
        <Image></Image>
      </Wrapper>
    </Section>
  );
};
