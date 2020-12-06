import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    sample_image1: { type: String, required: true },
    sample_image2: { type: String, required: true },
    sample_image3: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    rating: { type: Number, required: true },
    
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;