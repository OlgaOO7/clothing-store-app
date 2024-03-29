import {
  Title,
  Logo,
  NavWrapper,
  LinkTo,
  Section,
  Wrapper,
  Content,
  Image,
  ContentTitle,
  ContentText,
  TextWrapper,
  TextContent,
} from './AboutUs.styled';

export const AboutUs = () => {
  return (
    <>
      <NavWrapper>
        <LinkTo to={'/'}>Головна</LinkTo>
        <span>|</span>
        <LinkTo to={'/about'}>Про нас</LinkTo>
      </NavWrapper>
      <Section>
        <Wrapper className="container">
          <Title>
            Про <Logo>Zatyshna</Logo>
          </Title>
          <Content>
            <TextContent>
              <div>
                <ContentTitle>Про нас</ContentTitle>
                <TextWrapper>
                  <ContentText>
                    Zatyshna - це про комфорт у поєднанні зі стилем, про одяг, в
                    якому ти почуваєшся затишно. Наш бренд народився з
                    пристрасті до забезпечення жінок зручним і універсальним
                    одягом, який легко впишеться в їхній активний і повсякденний
                    спосіб життя.
                  </ContentText>
                  <ContentText>
                    У Zatyshna ми розуміємо важливість відчуття невимушеності в
                    одязі, виражаючи свій унікальний стиль. Наша місія полягає в
                    тому, щоб запропонувати підібрану колекцію повсякденного
                    трикотажу, яка втілює ідеальний баланс зручності, комфорту
                    та простоти без шкоди для якості.
                  </ContentText>
                  <ContentText>
                    Кожна річ створена з прискіпливою увагою до деталей і
                    прагненням постачати високоякісний одяг. Ми віримо, що
                    справжній стиль поза часом і що комфортом ніколи не можна
                    жертвувати модою. Наша колекція створена для плавного
                    переходу від активних днів до невимушених вечорів, щоб ви
                    завжди виглядали та почувалися якнайкраще.
                  </ContentText>
                </TextWrapper>
              </div>
              <div>
                <ContentTitle>Історія створення</ContentTitle>
                <TextWrapper>
                  <ContentText>
                    Історія бренду Zatyshna починається з бачення переосмислення
                    повсякденного трикотажу для жінок, що поєднує в собі комфорт
                    і стиль в ідеальній гармонії. Наш шлях розпочався з простої
                    ідеї - створити бренд, який оспівує сутність повсякденного
                    комфорту без шкоди для елегантності стилю.
                  </ContentText>
                  <ContentText>
                    Zatyshna виникла як відповідь на постійно мінливі потреби
                    сучасної жінки. Усвідомлюючи попит на одяг, який органічно
                    вписується в стрімкий ритм сучасного життя, ми поставили
                    собі за мету створити колекцію, що відображає дух легкості
                    та універсальності.
                  </ContentText>
                </TextWrapper>
              </div>
            </TextContent>
            <Image></Image>
          </Content>
        </Wrapper>
      </Section>
    </>
  );
};
