import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { getProductos, getProductosPorCategoria } from "../../components/Async/asyncmock"
import Item from "../Products/Item/Item"
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductosPorCategoria : getProductos;
    funcion(idCategoria)
      .then(res => setProductos(res))
      .catch(error => console.log(error))
  }, [idCategoria])

  return (
    
    <div className="container mb-5">
      <div className="row">      

        

        <CategoriesMenu />        

        <div className="col">
        <div className="text-center mb-5">
        <h1>Productos</h1>
        </div>
          <Row xs={1} md={2} lg={3} className="g-4">
            {productos.map(prod =>
              <Col key={prod.id}>
                <Item key={prod.id}  {...prod} />
              </Col>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Products;