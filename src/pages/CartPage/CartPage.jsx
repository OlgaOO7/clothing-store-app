import { Link } from 'react-router-dom';
import { SubscriptionForm } from 'components/SubscriptionForm/SubscriptionForm';
import { InfoBlock } from 'components/InfoBlock/InfoBlock';

export const CartPage = () => {
  return (
    <div style={{ padding: '94px 40px 0 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">Головна</Link>
        <div
          style={{
            width: '1px',
            height: '16px',
            margin: '0 31px',
            backgroundColor: '#000',
          }}
        ></div>
        <Link to="/cart">Кошик</Link>
      </div>
      <InfoBlock />
      <SubscriptionForm />
    </div>
  );
};
