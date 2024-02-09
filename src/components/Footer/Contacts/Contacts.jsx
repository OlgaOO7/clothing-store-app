import {
  ContactsWrapper,
  Text,
  LinkWrapper,
  LinkTel,
  StyleLink,
} from './Contacts.styled';

export const Contacts = ({ sectionType, closeMobMenu }) => {
  return (
    <ContactsWrapper $sectionType={sectionType}>
      <StyleLink
        to="/contacts"
        $sectionType={sectionType}
        onClick={closeMobMenu}
      >
        Зв’язатися з нами
      </StyleLink>
      <Text $sectionType={sectionType}>
        Звертайтесь до нас з будь-яких
        <br />
        додаткових питань
      </Text>
      <LinkWrapper $sectionType={sectionType}>
        <LinkTel href="tel:380743748270" $sectionType={sectionType}>
          +380743748270
        </LinkTel>
      </LinkWrapper>
    </ContactsWrapper>
  );
};
