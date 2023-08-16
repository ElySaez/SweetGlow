import { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "./Item/CartItem";
import Row from 'react-bootstrap/Row';

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 text-center">
                        <h3>No hay productos en el carrito</h3>
                        <Link className="btn btn-info" variant="primary" to="/productos"> Ver Productos </Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            {carrito.map(producto =>
                <Row key={producto.id}>
                    <CartItem {...producto} />
                </Row>
            )}

            <h3> Total: ${total} </h3>
            <h3> Cantidad total: {cantidadTotal} </h3>
            <button className="btn btn-danger" variant="danger" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link className="btn btn-success" variant="success" to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart