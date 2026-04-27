import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { getProduct, updateProduct } from '../api/productApi';

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await updateProduct(id, formData);
      navigate('/');
    } catch (err) {
      console.error('Error updating product:', err);
      alert('Failed to update product.');
    }
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Product</h1>
      <div className="form-card">
        <ProductForm initialData={product} onSubmit={handleSubmit} buttonLabel="Update Product" />
      </div>
    </div>
  );
}

export default EditProductPage;
