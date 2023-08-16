import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img, desc, stock }) => {
  return (
    <CardGroup>
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
          <div className="text-center">
            <Link className="btn btn-info" variant="primary" to={`/item/${id}`}> Ver Detalles </Link>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default Item