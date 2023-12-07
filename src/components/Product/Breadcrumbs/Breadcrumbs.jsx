import { useNavigate } from 'react-router-dom';

import { BreadcrumbsWrapper, StyleLink } from './Breadcrumbs.styled';

export const Breadcrumbs = ({ category }) => {
  const { id, title } = category;
  const navigate = useNavigate();

  return (
    <BreadcrumbsWrapper>
      <StyleLink to={'/'}>Головна</StyleLink>
      <span>|</span>
      <StyleLink to={'/catalog'}>Каталог</StyleLink>
      <span>|</span>
      <button
        onClick={() => navigate('/catalog', { state: { categoryId: id } })}
      >
        {title}
      </button>
    </BreadcrumbsWrapper>
  );
};
