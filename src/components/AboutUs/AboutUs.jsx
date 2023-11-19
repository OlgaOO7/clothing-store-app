const {
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
} = require('./AboutUs.styled');

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
                    Lorem ipsum dolor sit amet consectetur. Orci netus nisl
                    purus scelerisque quis a in. In habitant pretium ornare
                    tristique ac. Ac non lacus aliquam nullam fermentum eget.
                    Sit lacus nec nisi tempor interdum proin semper. Magna
                    malesuada odio nec tellus commodo cras suspendisse ipsum
                    platea. Ultricies enim sed egestas egestas euismod accumsan
                    in. Risus sagittis sem lectus quam.
                  </ContentText>
                  <ContentText>
                    Lorem ipsum dolor sit amet consectetur. Orci netus nisl
                    purus scelerisque quis a in. In habitant pretium ornare
                    tristique ac. Ac non lacus aliquam nullam fermentum eget.
                    Sit lacus nec nisi tempor interdum proin semper.
                  </ContentText>
                </TextWrapper>
              </div>
              <div>
                <ContentTitle>Історія створення</ContentTitle>
                <ContentText>
                  Magna malesuada odio nec tellus commodo cras suspendisse ipsum
                  platea. Ultricies enim sed egestas egestas euismod accumsan
                  in. Risus sagittis sem lectus quam.Lorem ipsum dolor sit amet
                  consectetur. Orci netus nisl purus scelerisque quis a in. In
                  habitant pretium ornare tristique ac. Ac non lacus aliquam
                  nullam fermentum eget. Sit lacus nec nisi tempor interdum
                  proin semper. Magna malesuada odio nec tellus commodo cras
                  suspendisse ipsum platea. Ultricies enim sed egestas egestas
                  euismod accumsan in. Risus sagittis sem lectus quam.
                </ContentText>
              </div>
            </TextContent>
            <Image></Image>
          </Content>
        </Wrapper>
      </Section>
    </>
  );
};
