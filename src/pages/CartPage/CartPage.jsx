import { Link } from  "react-router-dom";

export const CartPage = () => {
  return (
    <div>
      <h2>Cart</h2>
      <Link to="/order">Order</Link>
    </div>
  )
}