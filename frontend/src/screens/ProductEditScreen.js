import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct,updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';

export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [image, setImage] = useState('');
  const [sample_image1, setSampleImage1] = useState('');
  const [sample_image2, setSampleImage2] = useState('');
  const [sample_image3, setSampleImage3] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [brand, setBrand] = useState('');
  const [details, setDetails] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
        props.history.push('/productlist');
      }
      if (!product || product._id !== productId || successUpdate) {
        dispatch({ type: PRODUCT_UPDATE_RESET });      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setOriginalPrice(price.originalPrice)
      setPrice(product.price);
      setImage(product.image);
      setSampleImage1(product.sample_image1)
      setSampleImage2(product.sample_image2)
      setSampleImage3(product.sample_image3)
      setCategory(product.category);
      setQuantity(product.quantity);
      setBrand(product.brand);
      setDetails(product.details);
    }
  }, [product, dispatch, productId,successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
        updateProduct({
          _id: productId,
          name,
          price,
          originalPrice,
          image,
          sample_image1,
          sample_image2,
          sample_image3,
          category,
          brand,
          quantity,
          details,
        })
      );
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="fail">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="fail">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="originalPrice">Original Price</label>
              <input
                id="originalPrice"
                type="text"
                placeholder="Enter original price"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="sample_image1">Sample Image 1</label>
              <input
                id="sample_image1"
                type="text"
                placeholder="Enter sampel image 1"
                value={sample_image1}
                onChange={(e) => setSampleImage1(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="sample_image1">Sample Image 2</label>
              <input
                id="sample_image2"
                type="text"
                placeholder="Enter sampel image 2"
                value={sample_image2}
                onChange={(e) => setSampleImage2(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="sample_image3">Sample Image 1</label>
              <input
                id="sample_image3"
                type="text"
                placeholder="Enter sampel image 1"
                value={sample_image3}
                onChange={(e) => setSampleImage3(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="quantity">Count In Stock</label>
              <input
                id="quantity"
                type="text"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="details">Description</label>
              <textarea
                id="details"
                rows="3"
                type="text"
                placeholder="Enter details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="btn" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}