import {
  ContactsWrapper,
  Button,
  Text,
  LinkWrapper,
  Link,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactsWrapper>
      <Button type="button">Зв’язатися з нами</Button>
      <Text>
        Звертайтесь до нас з будь-яких
        <br />
        додаткових питань
      </Text>
      <LinkWrapper>
        <Link href="tel:380743748270">+380743748270</Link>
      </LinkWrapper>
    </ContactsWrapper>
  );
};
