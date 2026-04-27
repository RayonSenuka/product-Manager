import { useState, useEffect } from 'react';

// TODO (Task 02): Add a 'rating' input field (number, 1-5) to this form
// Make sure the formData state includes 'rating' and it is submitted correctly

function ProductForm({ initialData = {}, onSubmit, buttonLabel = 'Submit' }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    // ADD YOUR NEW FIELD TO STATE HERE
    rating: '',
    Madecountry: '',
    ...initialData,
  });

  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Product Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required placeholder="Enter product name" />
      </div>
      <div className="form-group">
        <label>Category</label>
        <input name="category" value={formData.category} onChange={handleChange} required placeholder="e.g. Electronics, Clothing" />
      </div>
      <div className="form-group">
        <label>Price (Rs.)</label>
        <input name="price" type="number" value={formData.price} onChange={handleChange} required placeholder="Enter price" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="Brief product description" />
      </div>

      {/* TODO (Task 02): Add a Rating input field here (number input, min=1, max=5) */}
      <div className="form-group">
        <label>Rating</label>
        <input name="rating" type="number" min="1" max="5" value={formData.rating} onChange={handleChange} required placeholder="Enter rating (1-5)" />
      </div>

     <div className="form-group">
        <label>Country</label>
        <textarea name="Madecountry" value={formData.Madecountry || ''} onChange={handleChange} required placeholder="Enter the Country" />
      </div>
      

      <button type="submit" className="btn btn-primary">{buttonLabel}</button>
    </form>
  );
}

export default ProductForm;
