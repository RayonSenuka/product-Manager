import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../api/productApi';

// TODO (Task 02): Display the 'rating' field in this card component

function ProductCard({ product, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm('Delete this product?')) {
      await deleteProduct(product._id);
      onDelete(product._id);
    }
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <span className="badge badge-category">{product.category}</span>
      <p style={{ marginTop: 10 }}>{product.description}</p>
      <p className="price">Rs. {product.price}</p>
      {/* TODO: Show the rating value here */}
      <p className="rating">Rating: {product.rating} / 5</p>
      <p className="country">Country: {product.Madecountry}</p>

      <div className="actions">
        <button className="btn btn-secondary" onClick={() => navigate(`/edit/${product._id}`)}>Edit</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;
