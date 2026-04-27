const mongoose = require('mongoose');

// TODO (Task 02): Add a 'rating' field (Number, min: 1, max: 5, required: true)
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  // ADD YOUR NEW FIELD HERE
  rating: { type: Number, min: 1, max: 5, required: true },
  Madecountry: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
