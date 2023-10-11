import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 10px',
          background: 'grey',
        }}
      >
        <p>Logo</p>
        <nav>
          <Link to="/" end style={{ padding: '6px 10px' }}>
            Home
          </Link>
          <Link to="/catalog" style={{ padding: '6px 10px' }}>
            Catalog
          </Link>
          <Link to="/cart" style={{ padding: '6px 10px' }}>
            Cart
          </Link>
          <Link to="/contacts" style={{ padding: '6px 10px' }}>
            Contacts
          </Link>
        </nav>
      </header>
      <Outlet />
      <footer
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 80,
          background: 'grey',
        }}
      >
        <div style={{ display: 'flex', justifyContent: "space-between", padding: 10 }}>
          <p>Logo</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p>Our contacts:</p>
            <div style={{ gap: 4 }}>
              <p>phone number</p>
              <p>email</p>
            </div>
          </div>
          <div>
            <p>Social links</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
