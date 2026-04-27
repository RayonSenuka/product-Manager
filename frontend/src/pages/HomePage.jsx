import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../api/productApi';

function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter(p => p._id !== id));
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1>All Products</h1>
      {products.length === 0 ? (
        <p>No products found. Add one!</p>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product._id} product={product} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
