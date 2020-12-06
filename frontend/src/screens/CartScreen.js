import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function CartScreen(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }
 
  return <div className="cart">
    <div className="cart-list">
      <ul className="cart-list-container">
        <li className="table-header">
          <h3>
            Shopping Cart
          </h3>
          <h3>
            Price
          </h3>
        </li>
        {
          cartItems.length === 0 ?
            <div >
              Cart is empty.<Link to="/" className="link">Go Shopping</Link>
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                <img src={item.image} alt="product" />
                  
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/products/" + item.product}>
                      {item.name}
                    </Link>

                  </div>
                  <div className="cart-quantity">
                  <b>Qty:{item.qty}</b>   
                
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="btn-cart" onClick={() => removeFromCartHandler(item.product)} >
                      Delete
                    </div>
                  </div>
                </div>
                <div className="cart-price">
                  <h6>Rs.{item.price}</h6>
                </div>
              </li>
            )
        }
      </ul>

    </div>
    <div className="cart-action">
      <h3>
        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
        :
         Rs. {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
      <div onClick={checkoutHandler} className="btn full-width" disabled={cartItems.length === 0}>
        Proceed to Checkout
      </div>

    </div>

  </div>
}

export default CartScreen;