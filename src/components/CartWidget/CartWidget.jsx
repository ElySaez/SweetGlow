import React from 'react';
import './CartWidget.css';

const Cart = ({ itemCount }) => {
  return (
    <div className="cart ml-auto">
      <img src="../cart.webp" alt="Carrito de compras" />
      <span className="cart-count">{itemCount}</span>
    </div>
  );
};

export default Cart;