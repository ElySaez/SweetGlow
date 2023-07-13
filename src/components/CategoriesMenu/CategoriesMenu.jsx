import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const CategoriesMenu = () => {
  return (
    <div className="col-12 col-lg-3 col-xl-3 mb-3">
      <p>Categorías</p>
      <ListGroup>
        <ListGroup.Item as={Link} action to="/productos" >Ver todos</ListGroup.Item>
        <ListGroup.Item as={Link} action to="/categoria/1" >Makeup</ListGroup.Item>
        <ListGroup.Item as={Link} action to="/categoria/2" >Skincare</ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default CategoriesMenu