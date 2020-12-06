import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { productListReducer } from '../reducers/productReducers';
import { listProducts } from '../actions/productActions';
import {Rating} from '../components/Rating'

function HomeScreen(props){
    //const [products,setProduct] = useState([]);
    const productList = useSelector(state => state.productList);
    const{products,loading,error} = productList;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(listProducts());
        return() => {

        }
    },[])
    
    return loading ? <div>Loading...</div>:
    error ? <div>{error}</div>: <div> 
    
   
        <div className="small-container">
        <h2 className="title">All Products</h2>
        
        <div className="featuredProd">
        {
            products.map(product => 
           
                
           <div className="col-4" key={product._id}>
                <Link to={'/products/'+ product._id}><img src={product.image}></img>
                <h4>{product.name}</h4></Link>
                <h3>{product.brand}</h3>
                
                <div className="rating">
                    <Rating
                    rating={product.rating} stars/></div>
                <p><b>Rs.{product.price}&nbsp;</b><s>Rs.{product.originalPrice}</s></p>
            </div>
            
            
        )
            
        }
        </div>
        </div>
        </div>
            
    
}
export default HomeScreen;