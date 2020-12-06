import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import AllProductScreen from './screens/AllProductScreen';
<head>
        <meta charset="UTF-8" />
        <title>SOIREE</title>
        <link rel="stylesheet" href="style.css"/>
        <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital@1&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
</head>



function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
  <BrowserRouter>
  <div>
    <div className="header-1">
      <div className="container">
        <div className = "navbar">
            <div className = "logo">

               <Link to="/"><img src="/images/images/logo.png" alt="LOGO" width="175px"></img></Link>
            </div>
            <nav>
                <ul id="MenuItems">
                    <Link to="/"><li>Home </li></Link>
                    <Link to="/allproducts"><li>Products</li></Link>
                    
                    {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                  <li>
                  <Link to="/cart/">
                    Cart
                  </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            &nbsp;
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  
                </ul>
              </div>
            )}
                </ul>
            </nav>
            
           
        </div>
    </div>
  </div>
    <Route path="/" exact={true} component={HomeScreen}/>
    <Route path="/products/:id" component={ProductScreen} exact />
    <Route path="/cart/:id?" component={CartScreen}/>
    <Route path="/signin" component={SigninScreen}></Route>
    <Route path="/register" component={RegisterScreen}></Route>
    <Route path="/shipping" component={ShippingAddressScreen}></Route>
    <Route path="/payment" component={PaymentMethodScreen}></Route>
    <Route path="/placeorder" component={PlaceOrderScreen}></Route>
    <Route path="/order/:id" component={OrderScreen}></Route>
    <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
    <Route path="/allproducts" component={AllProductScreen}></Route>
    <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
    ></Route>

    <PrivateRoute
            path="/profile"
            component={ProfileScreen}
    ></PrivateRoute>
    <AdminRoute
            path="/productlist"
            component={ProductListScreen}
    ></AdminRoute>
    <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
    ></AdminRoute>

        {/*--------FEATURED PRODUCTS----------*/}
        <div className="small-container">

        </div>
        {/*--------OFFERS----------*/}
        
        
        {/*--------BRANDS-----------*/}
        

        {/*-----FOOTER--------*/}
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Dowanload App</h3>
                        <p>Dowanload App for android and ios mobile phone.</p>
                        <div className="app-logo">
                            <img src="/images/images/app-store.png"></img>
                            <img src="/images/images/play-store.png"></img>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src="/images/images/a.png"></img>
                        <p>Our purpose is to sustainably make the Pleasure and Benefits of Fashion accessible to many .</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>

                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="">Facebook</a></li>
                            <li><a href="">Twitter</a></li>
                            <li><a href="">Instagram</a></li>
                            <li><a href="">YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright"/>Copyright 2020 - Easy Tutorials
            </div>
        </div>
  </div>
  </BrowserRouter>
  );
}

export default App;
