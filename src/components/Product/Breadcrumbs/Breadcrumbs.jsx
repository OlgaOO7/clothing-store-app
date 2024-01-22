import { useNavigate } from 'react-router-dom';

import {
  BreadcrumbsWrapper,
  HorizontalLine,
  StyleLink,
} from './Breadcrumbs.styled';

export const Breadcrumbs = ({ category }) => {
  const { id, title } = category;
  const navigate = useNavigate();

  return (
    <BreadcrumbsWrapper>
      <StyleLink to={'/'}>Головна</StyleLink>
      <HorizontalLine />
      <StyleLink to={'/catalog'}>Каталог</StyleLink>
      <HorizontalLine />
      <button
        onClick={() => navigate('/catalog', { state: { categoryId: id } })}
      >
        {title}
      </button>
    </BreadcrumbsWrapper>
  );
};
