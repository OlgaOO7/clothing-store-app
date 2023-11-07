import { Link, useLocation } from 'react-router-dom';

export const CatalogPage = () => {

  //  ----------- test code -----------
  const getProductLink = productsId => `/catalog/${productsId}`;
  const location = useLocation();

  return (
    <div>
      <div
        style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}
      >
        <h2>Catalog</h2>
      </div>

      <ul style={{ display: 'flex', gap: 10 }}>
        <li productid="fb47b3d339b54d248035599113d7297d_9366">
          <Link to={getProductLink('fb47b3d339b54d248035599113d7297d_9366')} state={{ from: location }}>
            <img
              src="https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/fb47b3d339b54d248035599113d7297d_9366/IJ9771_21_model.WebP"
              alt="рожевий світшот"
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 4,
              }}
            >
              <p>Світшот Adicolor Essentials Originals IJ9771</p>
              <p>2300 UAH</p>
            </div>
          </Link>
        </li>

        <li productid="3a81d99208364a2b83a54a81f3b4f6e4_9366">
          <Link to={getProductLink('3a81d99208364a2b83a54a81f3b4f6e4_9366')}>
            <img
              src="https://assetmanagerpim-res.cloudinary.com/images/w_600/q_90/3a81d99208364a2b83a54a81f3b4f6e4_9366/IJ9772_21_model.WebP"
              alt="зелений світшот"
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 4,
              }}
            >
              <p>Світшот Adicolor Essentials Originals IJ9772</p>
              <p>2200 UAH</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
  //  ----------- test code -----------
};
