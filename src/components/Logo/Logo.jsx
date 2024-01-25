import { LogoLink } from './Logo.styled';

export const Logo = ({ closeMobMenu }) => {
  const handlClick = () => {
    closeMobMenu();
  };
  return (
    <LogoLink to="/" onClick={handlClick}>
      ZATYSHNA
    </LogoLink>
  );
};
