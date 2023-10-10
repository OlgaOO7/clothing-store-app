import { Link, Outlet } from "react-router-dom";


export const SharedLayout = () => {
  return (
    <div>
      <header style={{display: "flex", justifyContent: "space-between", padding: "6px 10px"}}>
        <p>Logo</p>
        <nav>
          <Link to="/" end style={{padding: "6px 10px"}}>Home</Link>
          <Link to="/catalog" style={{padding: "6px 10px"}}>Catalog</Link>
          <Link to="/cart" style={{padding: "6px 10px"}}>Cart</Link>
          <Link to="/contacts" style={{padding: "6px 10px"}}>Contacts</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}