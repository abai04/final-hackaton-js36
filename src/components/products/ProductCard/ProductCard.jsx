import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { ADMIN } from '../../../helpers/consts';
import { deleteProduct } from '../../../store/actions/productActions';
import { useNavigate } from 'react-router-dom';
import icon from '../image/icun.svg';
import './ProductCard.css';
import ProductModal from './ProductModal';
import { useCart } from '../../../contexts/CartContextProvider';

function ProductCard(props) {
  const { item } = props;
  const buttonStyles = {
    width: '100%',
  };

  const { addProductToCart } = useCart();
  const handleAddToCart = () => {
    addProductToCart(item); 
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.auth);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card className="custom-card" style={{ border: '2px solid #28a745' }}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Img
            variant="top"
            src={item.image}
            className="custom-card-img"
            onClick={handleShowModal}
            style={{ cursor: 'pointer' }}
          />
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.category}</Card.Text>
          {currentUser === ADMIN ? (
            <>
              <Button
                className="w-100"
                onClick={() => dispatch(deleteProduct(item.id))}
                variant="danger"
              >
                delete
              </Button>
              <Button
                onClick={() => navigate('/edit/' + item.id)}
                className="w-100"
                variant="warning"
              >
                edit
              </Button>
            </>
          ) : (
            <Button style={buttonStyles} className="button-custom" onClick={handleAddToCart}>
              <span className="mr-2">
                <img src={icon} alt="" className="button-images" />
              </span>
              ДОБАВИТЬ В ЗАКАЗ
              <span className="ml-2">
                <img src={icon} alt="" className="button-images" />
              </span>
            </Button>
          )}
        </Card.Body>
      </Card>
      <ProductModal
        item={item}
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        currentUser={currentUser}
      />
    </>
  );
}

export default ProductCard;
