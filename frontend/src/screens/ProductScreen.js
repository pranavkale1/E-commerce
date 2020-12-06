import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import NumericInput from 'react-numeric-input';
import Rating from '../components/Rating'

 
function ProductScreen(props){
    
    
    const[qty,setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const{product,loading,error} = productDetails;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(detailsProduct(props.match.params.id));
        return() => {

        }
    },[]);

    const hanndleAddToCart = ()=>{
        props.history.push("/cart/"+ props.match.params.id + "?qty="+qty)
    }
    function changeImage(e)
    {
        var displayImage = document.getElementById("ProductImg");
        displayImage.setAttribute('src',e.target.src)
    }
    return<div> 
        <div>
            <Link to="/">&nbsp;&nbsp;&#8592;Back to result</Link>
        </div>
        {loading ? <div>Loading...</div>:
            error ? <div>{error}</div>:
        (
        <div className="small-container single-product">
            <div className="row">
                <div className="col-2">
                    <img src={product.image} width="80%" alt="product" id="ProductImg"></img>
                     <div className="small-img-row">
                        <div className="small-img-col1">
                            <img src={product.image} onClick={changeImage}></img>
                        </div>
                        <div className="small-img-col2">
                            <img src={product.sample_image1} onClick={changeImage}></img>
                        </div>
                        <div className="small-img-col3">
                            <img src={product.sample_image2} onClick={changeImage}></img>
                        </div>
                        <div className="small-img-col4">
                            <img src={product.sample_image3} onClick={changeImage}></img>
                        </div>
                        </div>
                         
                </div>
                <div className="col-2">
                    <p>{product.brand}</p>
                    <h2>{product.name}</h2>
                    <h4><b>Rs.{product.price}&nbsp;</b> <s>Rs.{product.originalPrice}</s> </h4>
                    
                    <Rating
                    rating={product.rating} stars/>
                    
                    <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                        {[...Array(product.quantity).keys()].map(x=>
                            <option key ={x+1} value={x+1}>{x+1}</option>)}

                    </select>
                    
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {product.quantity>0?
                    <div onClick={hanndleAddToCart} className="btn"> Add to Cart</div>:
                    <div className="status">Status:Out of Stock</div>}
                    <h3>Product Details<i className="fa fa-indent"></i></h3>
                    <p>{product.details}</p>
                    <br />
                    

                    
                </div>
            </div>
            
    
            
        </div>)
}   
    
</div>


}

export default ProductScreen;