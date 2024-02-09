import PropTypes from 'prop-types';
import { LogoLink } from './Logo.styled';

export const Logo = ({ closeMobMenu }) => {
  const handlClick = () => {
    closeMobMenu();
  };
  return (
    <LogoLink to="/" onClick={handlClick}>
      Zatyshna
    </LogoLink>
  );
};

Logo.propTypes = {
  closeMobMenu: PropTypes.func,
};
