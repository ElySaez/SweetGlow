import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

import { getUnProducto } from "../../Async/asyncmock";
import CategoriesMenu from "../../CategoriesMenu/CategoriesMenu";

const ItemDetail = () => {
  const [producto, setProducto] = useState(false);
  const { idItem } = useParams();

  useEffect(() => {
    getUnProducto(idItem)
    .then(res => setProducto(res))
    .catch(error => console.log(error))
  }, [idItem])

  return (
    <div className="container">
      <div className="row">

        <div className="text-center">
          <h1>{producto.nombre}</h1>
        </div>

        <CategoriesMenu />

        <div className="col">
          <Card>
            <Card.Img variant="top" src={producto.img} alt={producto.nombre} />
            <Card.Body>
              <Card.Title>{producto.nombre}</Card.Title>
              <Card.Text>
                {producto.desc}
              </Card.Text>
              <Card.Text>
                Precio: {producto.precio} <br /> ID: {producto.id}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

  )
}

export default ItemDetail