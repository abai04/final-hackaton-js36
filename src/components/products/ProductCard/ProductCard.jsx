import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN } from '../../../helpers/consts';
import { deleteProduct } from '../../../store/actions/productActions';
import { useNavigate } from 'react-router-dom';

function ProductCard(props) {
    const {item} = props
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.auth)
  return (
    <Card style={{ width: '250px' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          {item.category}
        </Card.Text>
        {currentUser === ADMIN ? (
          <>
          <Button onClick={() => dispatch(deleteProduct(item.id))}  variant="primary">delete</Button>
          <Button onClick={() => navigate("/edit/" + item.id )}  variant="primary">edit</Button>
          </>
        ) : (null)}
        
      </Card.Body>
    </Card>
  );
}

export default ProductCard;