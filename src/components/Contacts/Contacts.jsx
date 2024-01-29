import { Form } from 'components/Form/Form';

import Sprite from '../../images/sprite.svg';

import {
  LinkTo,
  NavWrapper,
  Section,
  Wrapper,
  MainSection,
  Title,
  MainWrapper,
  ContactsWrapper,
  ContactTitle,
  ContactText,
  IconInstagram,
  IconFacebook,
  IconsWrapper,
  ContactsContent,
  NavSection,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <>
      <NavSection>
        <NavWrapper>
          <LinkTo to={'/'}>Головна</LinkTo>
          <span>|</span>
          <LinkTo to={'/contacts'}>Контакти</LinkTo>
        </NavWrapper>
      </NavSection>
      <MainSection>
        <MainWrapper>
          <Title>Контакти</Title>
        </MainWrapper>
      </MainSection>
      <Section>
        <Wrapper>
          <ContactsContent>
            <ContactsWrapper>
              <ContactTitle>Зв’язок з менеджером</ContactTitle>
              <ContactText href="tel:+380930000000">+380930000000</ContactText>
            </ContactsWrapper>
            <ContactsWrapper>
              <ContactTitle>Email</ContactTitle>
              <ContactText href="mailto:zatyshna@kmail.com">
                zatyshna@kmail.com
              </ContactText>
            </ContactsWrapper>
            <ContactsWrapper>
              <ContactTitle>Соц.мережі</ContactTitle>
              <IconsWrapper>
                <a href="https://www.instagram.com/">
                  <IconInstagram>
                    <use href={`${Sprite}#icon-circum_instagram`}></use>
                  </IconInstagram>
                </a>
                <a href="https://www.facebook.com/">
                  <IconFacebook>
                    <use href={`${Sprite}#icon-fe_facebook`}></use>
                  </IconFacebook>
                </a>
              </IconsWrapper>
            </ContactsWrapper>
          </ContactsContent>
          <Form formType="contact_us" />
        </Wrapper>
      </Section>
    </>
  );
};
