import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { productListReducer } from '../reducers/productReducers';
import { listProducts } from '../actions/productActions';
import {Rating} from '../components/Rating'
import data from '../data.js';

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
    
    <div className="header">
      <div className="container">
        <div className="row">
            <div className="col-2">
                <h1>Eloquently Express <br /> Yourself.</h1>
                <p>Fashion has to reflect who you are</p>
                <Link to="/allproducts"><div className="btn">&nbsp;&nbsp;&nbsp;Explore Now &#8594;</div></Link>
            </div>
            <div className="col-2">
                <img src="/images/images/image1.jpg"></img>
            </div>
        </div>
        </div>
        </div>
               
        {/*--------TOP BRANDS----------*/}
        
        <h2 className="title"><br /><br />&nbsp;&nbsp; Explore Top Brands </h2>
        <div className="categories">
          <div className="small-container">
            <div className="row">
                <div className = "col-3">
                    <img src="/images/images/nike.jfif"></img>
                </div>
                <div className = "col-3">
                    <img src="/images/images/levis.jfif"></img>
                </div>
                <div className = "col-3">
                    <img src="/images/images/biba.jpg"></img>                   
                </div>
                <div className = "col-3">
                    <img src="/images/images/h&m.jpeg"></img>                  
                </div>
                
            </div>
          </div>
        </div>
        <div className="small-container">
        <h2 className="title">Featured Products</h2>
        
        <div className="featuredProd">
        {
            products.filter(Product=>Product.category =="featured").map(product => 
           
                
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
         
        <h2 className="title">Trending Products</h2>
        <div className="trendingProd">
        {
            
            products.filter(Product=> Product.category =="trending" ).map(product=>  
                
            <div className="col-4" key={product._id}>
                <Link to={'/products/'+ product._id}><img src={product.image}></img>
                <h4>{product.name}</h4></Link>
                <h3>{product.brand}</h3>
                
                <div className="rating"><Rating
                    rating={product.rating} stars/></div>
                <p><b>Rs.{product.price}&nbsp;</b><s>Rs.{product.originalPrice}</s></p>
            </div>
            )
        }
        </div>   
        </div>
        <div className="offer">
            <div className="small-container">
                <div className="row">
                    <div className="col-2">
                        <img src="/images/images/d9.png" className="offer-img"></img>
                    </div>
                    <div className="col-2">
                        <p>Exclusively available on Soiree</p>
                        <h1>Fitbit</h1>
                        <h2>Versa 2 Health and Fitness Smartwatch</h2>
                        <small>Utility meets perfection in this Fitbit Versa 2 Health and Fitness Smartwatch. Other than tracking calorie burn, you can also keep an eye on your heart rate, sleeping and breathing patterns. With the built-in Amazon Alexa, you can get quick updates on news, weather. You can also control your home devices, set up reminders.</small>
                        {
            
                            products.filter(Product=> Product.category =="exclusive" ).map(product=>
                                <Link to={'/products/'+ product._id}><div className="btn">Buy Now &#8594;</div></Link>
                            )}
                    </div>
                </div>
                
            </div>
        </div>
        

        {/*-----testemonial------*/}
        <div className="testimonial">
            <div className="small-container">
                <div className="row">
                    <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                        <p>I could live in your shop, your sixes are suited for normal size women and I can always find something I love.</p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src="/images/images/c1.jfif"></img>
                        <h3>Natalie Cox</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                        <p>I can always bank on finding a great new addition to my wardrobe.Amazing prices and Service. </p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <img src="/images/images/c2.jfif"></img>
                        <h3>Mandie J</h3>
                    </div>
                    <div className="col-3">
                        <i className="fa fa-quote-left"></i>
                        <p>It doesn't matter how often you have or go to one as there is always something new to tempt you!</p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <img src="/images/images/c3.jpg"></img>
                        <h3>Kendall D</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className="brands">
            <div className="small-container">
                <div className="row">
                {
                data.brands.map(brand =>
                
                    <div className="col-6">
                        <img src={brand.image}></img>
                    </div>)
                }
            </div>
        </div>
        </div>
    </div>
    
}
export default HomeScreen;