import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder,payOrder,deliverOrder } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Axios from 'axios';
import { ORDER_PAY_RESET,ORDER_DELIVER_RESET } from '../constants/orderConstants';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    error: errorPay,
    success: successPay,
  } = orderPay;
  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;
  const dispatch = useDispatch();
  useEffect(() => {
      if(!order|| successPay || (order && order._id !== orderId)||successDeliver)
      {
        dispatch({ type: ORDER_DELIVER_RESET });
        dispatch({ type: ORDER_PAY_RESET });
        dispatch(detailsOrder(orderId));
      }
  }, [dispatch, orderId,order,successPay,successDeliver]);
  const successPaymentHandler = (paymentResult) => {
    order.isPaid = true;
    dispatch(payOrder(order, paymentResult));
  };
  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="fail">{error}</MessageBox>
  ) : (
    <div>
      <h1>Order {order._id}</h1>
      <div className="rownew top">
        <div className="col-2new">
          <ul>
            <li>
              <div className="card card-body">
                <h2>Shipping</h2>
                <p>
                  <strong>Name:</strong> {order.shippingAddress.fullName} <br />
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                </p>
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="fail">Not Delivered</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid 
                  </MessageBox>
                ) : (
                  <MessageBox variant="fail">Not Paid</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="rownew">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x Rs.{item.price} = Rs.{item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1new">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="rownew">
                  <div>Items</div>
                  <div>Rs.{order.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="rownew">
                  <div>Shipping</div>
                  <div>Rs.{order.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="rownew">
                  <div>Tax</div>
                  <div>Rs.{order.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="rownew">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>Rs.{order.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <>
                      {errorPay && (
                        <MessageBox variant="fail">{errorPay}</MessageBox>
                      )}
                      {loadingPay && <LoadingBox></LoadingBox>}

                      <button
                        amount={order.totalPrice}
                        onClick={successPaymentHandler}
                      ></button>
                    </>
                {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <li>
                  {loadingDeliver && <LoadingBox></LoadingBox>}
                  {errorDeliver && (
                    <MessageBox variant="fail">{errorDeliver}</MessageBox>
                  )}
                  <button
                    type="button"
                    className="btn"
                    onClick={deliverHandler}
                  >
                    Deliver Order
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}