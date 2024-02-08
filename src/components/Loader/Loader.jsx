import PropTypes from 'prop-types';
import { LoaderSpin } from './Loader.styled';

export const Loader = ({ type }) => {
  return <LoaderSpin type={type}></LoaderSpin>;
};

Loader.propTypes = {
  type: PropTypes.string,
};
