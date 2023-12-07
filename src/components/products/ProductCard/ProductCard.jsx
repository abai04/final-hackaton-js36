import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN } from '../../../helpers/consts';
import { deleteProduct } from '../../../store/actions/productActions';
import { useNavigate } from 'react-router-dom';
import icon from '../image/icun.svg'
import './ProductCard.css'

function ProductCard(props) {
    const {item} = props;
    const buttonStyles = {
      width: '100%',
      backgroundColor: 'green',
    };


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.auth)
  return (
    <Card className="custom-card" style={{border: '2px solid #28a745'}}>
       <Card.Body>
       <Card.Title>{item.title}</Card.Title>
        <Card.Img variant="top" src={item.image} className="custom-card-img"/>   
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>
          {item.category}
        </Card.Text>
        {currentUser === ADMIN ? (
          <>
          <Button className='w-100'  onClick={() => dispatch(deleteProduct(item.id))}  variant="danger">delete</Button>
          <Button onClick={() => navigate("/edit/" + item.id )} className='w-100'  variant="warning">edit</Button>
          </>
        ) : (
           <Button style={buttonStyles} className="button-custom">
          <span className="mr-2">
            <img src={icon} alt="" className="button-images"/>
          </span>
          ДОБАВИТЬ В ЗАКАЗ
          <span className="ml-2">
            <img src={icon} alt="" className="button-images"/>
          </span>
        </Button>
        )}
        
       
      </Card.Body>
    </Card>
  );
}

export default ProductCard;