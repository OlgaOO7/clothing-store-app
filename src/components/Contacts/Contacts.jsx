import { Form } from 'components/Form/Form';

import Sprite from '../../images/sprite.svg';

import {
  LinkTo,
  NavWrapper,
  Section,
  Wrapper,
  MainSection,
  Title,
  Logo,
  MainWrapper,
  ContactsWrapper,
  ContactTitle,
  ContactText,
  IconInstagram,
  IconFacebook,
  IconsWrapper,
  ContactsContent,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <>
      <NavWrapper>
        <LinkTo to={'/'}>Головна</LinkTo>
        <span>|</span>
        <LinkTo to={'/contacts'}>Контакти</LinkTo>
      </NavWrapper>
      <MainSection>
        <MainWrapper>
          <Title>Контакти</Title>
          <Logo>Zatyshna</Logo>
        </MainWrapper>
      </MainSection>
      <Section>
        <Wrapper>
          <ContactsContent>
            <ContactsWrapper>
              <ContactTitle>Зв’язок з менеджером</ContactTitle>
              <ContactText>+380930000000</ContactText>
            </ContactsWrapper>
            <ContactsWrapper>
              <ContactTitle>Email</ContactTitle>
              <ContactText>zatyshna@kmail.com</ContactText>
            </ContactsWrapper>
            <ContactsWrapper>
              <ContactTitle>Соц.мережі</ContactTitle>
              <IconsWrapper>
                <IconInstagram>
                  <use href={`${Sprite}#icon-circum_instagram`}></use>
                </IconInstagram>
                <IconFacebook>
                  <use href={`${Sprite}#icon-fe_facebook`}></use>
                </IconFacebook>
              </IconsWrapper>
            </ContactsWrapper>
          </ContactsContent>
          <Form />
        </Wrapper>
      </Section>
    </>
  );
};
