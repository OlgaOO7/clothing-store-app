import { Section, Wrapper, LinkTo } from './MainSection.styled';

export const MainSection = () => {
  return (
    <Section>
      <Wrapper>
        <LinkTo to="/catalog" state={{ from: 'Головна' }}>
          Каталог
        </LinkTo>
      </Wrapper>
    </Section>
  );
};
