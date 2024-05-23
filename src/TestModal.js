import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cart from './Components/Cart/Cart';
import styled from 'styled-components';

const ButtonBusket=styled.button`

background-color:#8576FF;
border:none;
padding:10px;
width:200px;
height:40px;
margin-top:15px;
margin-bottom: 10px;
border-radius: 11px;
font-size: 14px;
font-family: "Comfortaa", sans-serif;
`
;

const BusketName=styled.h1`
font-size: 19px;
font-family: "Comfortaa", sans-serif;
`
;




function TestModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);






  return (
    <>
      <ButtonBusket variant="primary" onClick={handleShow}>
        Перейти в корзину
      </ButtonBusket>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <BusketName>Корзина</BusketName>
        </Modal.Header>
        <Modal.Body>
            <Cart />
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          </Modal.Footer>
      </Modal>
    </>
  );
}

export default TestModal;