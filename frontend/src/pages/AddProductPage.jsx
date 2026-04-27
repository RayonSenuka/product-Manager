import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { createProduct } from '../api/productApi';

function AddProductPage() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createProduct(formData);
      navigate('/');
    } catch (err) {
      console.error('Error adding product:', err);
      alert('Failed to add product. Please check all fields.');
    }
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <div className="form-card">
        <ProductForm onSubmit={handleSubmit} buttonLabel="Add Product" />
      </div>
    </div>
  );
}

export default AddProductPage;
