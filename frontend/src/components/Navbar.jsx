import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="brand">🛍️ Product Catalog</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;
