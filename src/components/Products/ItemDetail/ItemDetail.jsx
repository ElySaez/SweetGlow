import { useState, useContext } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import { CarritoContext } from '../../../context/CarritoContext';


const ItemDetail = ({ id, nombre, precio, desc, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);
    const { agregarProducto } = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }

    return (
        <div>

            {<div className="text-center">
                <h1>{nombre}</h1>
            </div>}

            <Card>
                <Card.Img variant="top" src={img} alt={nombre} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Card.Text>
                        Precio: {precio} <br /> ID: {id}
                    </Card.Text>
                    {
                        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
                    }
                </Card.Body>
            </Card >
        </div>
    )
}

export default ItemDetail