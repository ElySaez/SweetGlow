import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Item from "./Item/Item"
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";

import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";

const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect( ()=> {
    
    const misProductos = idCategoria ? query(collection(db, "products"),where("idcat", "==", parseInt(idCategoria))) : collection(db, "products");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id:doc.id, ...data}
        })
        setProductos(nuevosProductos);
        console.log(nuevosProductos)
      })
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

export default ProductList;