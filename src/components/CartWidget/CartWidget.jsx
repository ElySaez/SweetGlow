import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CarritoContext } from '../../context/CarritoContext';
import './CartWidget.css';


const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (

    <div className="cart ml-auto">
      <Link to="/cart">
        <img className='imgCarrito' src="../cart.webp" alt="Carrito de compras" />
        <span className="cart-count">
          {
            cantidadTotal > 0 ? cantidadTotal : 0
          }
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;