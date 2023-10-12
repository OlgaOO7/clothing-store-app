import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="/" end style={{ padding: '6px 10px' }}>
          Головна
        </Link>
        <Link to="/catalog" style={{ padding: '6px 10px' }}>
          Каталог
        </Link>

        {/* <Link to="/cart" style={{ padding: '6px 10px' }}>
          Cart
        </Link> */}
        
        <Link to="/contacts" style={{ padding: '6px 10px' }}>
          Про нас
        </Link>
        <Link to="/order" style={{ padding: '6px 10px' }}>
          Доставка
        </Link>
      </nav>
    </>
  );
};
