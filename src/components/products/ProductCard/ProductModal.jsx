import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import icon from '../image/icun.svg';
import { ADMIN } from '../../../helpers/consts';
import './ProductModal.css'; 

const ProductModal = (props) => {
    const { item, showModal, handleCloseModal, currentUser, handleAddToCart } = props
  return (
    <div>
    <Modal show={showModal} onHide={handleCloseModal} fullscreen>
      <div style={{ border: '1px solid green', padding: '30px', margin: '20px', backgroundColor: '#fafaf4' }}>
        <Modal.Header closeButton style={{ borderBottom: 'none', textAlign: 'center', border: '1px solid green', fontSize: '46px',}}>
          <Modal.Title style={{ fontSize: '46px', fontWeight: '700', margin: '0 auto' }}>{item.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: 'flex', }}>
            <div style={{ flex: '60%', marginRight: '20px' }}>
              <img src={item.image} alt={item.title} style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }} />
            </div>
            <div style={{ flex: '40%', marginLeft: '80px', marginTop: '40px'}}>
              <p>Описание: {item.description}</p>
              <p>Категория: {item.category}</p>
              {currentUser !== ADMIN && (
                <Button
                  className={`button_mod`}
                  onClick={handleAddToCart} 
                >
                  <span className="mr-1">
                    <img src={icon} alt="" className="button-imagess" />
                  </span>
                  ДОБАВИТЬ В ЗАКАЗ
                  <span className="ml-1">
                    <img src={icon} alt="" className="button-imagess" />
                  </span>
                </Button>
              )}
            </div>
          </div>
        </Modal.Body>
      </div>
    </Modal>
    </div>
  );
};

export default ProductModal;
