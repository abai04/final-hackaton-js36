import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN } from '../../../helpers/consts';
import { deleteProduct } from '../../../store/actions/productActions';
import { useNavigate } from 'react-router-dom';
import icon from '../image/icun.svg'
import './ProductCard.css'
import { addToCart, checkProductInCart, getCart } from '../../../store/slices/cartSlice';
import { useEffect, useState } from 'react';
import ProductModal from './ProductModal';

function ProductCard(props) {
    const {item} = props;
    const buttonStyles = {
      width: '100%',
      backgroundColor: 'green',
    };
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.auth)
    const {cart} = useSelector((state) => state.cart)
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

  return (
    <Card className="custom-card" style={{border: '2px solid #28a745'}}>
       <Card.Body>
       <Card.Title>{item.title}</Card.Title>
       <div onClick={handleShowModal} style={{ cursor: 'pointer' }}>
       <Card.Img variant="top" src={item.image} className="custom-card-img"/>   
       </div>
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
        ) : (checkProductInCart(item.id) ? (
          <Button disabled className='w-100' variant='dark'>
            Добавлено
          </Button>
        ) : (
          <Button onClick={() => dispatch(addToCart(item))} variant='success' style={buttonStyles} className="button-custom">
          <span className="mr-2">
            <img src={icon} alt="" className="button-images"/>
          </span>
          Добавить
          <span className="ml-2">
            <img src={icon} alt="" className="button-images"/>
          </span>
        </Button>
        )  
        )}
      </Card.Body>
      <ProductModal
     item={item}
     showModal={showModal}
     handleCloseModal={handleCloseModal}
     currentUser={currentUser}
    />
    </Card>
    
  );
}

export default ProductCard;