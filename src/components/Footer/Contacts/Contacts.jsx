import {
  ContactsWrapper,
  Button,
  Text,
  LinkWrapper,
  Link,
} from './Contacts.styled';

export const Contacts = ({ sectionType }) => {
  return (
    <ContactsWrapper $sectionType={sectionType}>
      <Button type="button" $sectionType={sectionType}>Зв’язатися з нами</Button>
      <Text $sectionType={sectionType}>
        Звертайтесь до нас з будь-яких
        <br />
        додаткових питань
      </Text>
      <LinkWrapper $sectionType={sectionType}>
        <Link href="tel:380743748270" $sectionType={sectionType}>+380743748270</Link>
      </LinkWrapper>
    </ContactsWrapper >
  );
};
