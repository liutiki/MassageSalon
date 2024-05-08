import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cart from './Components/Cart/Cart';




function TestModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);






  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Перейти в корзину
      </Button>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Корзина</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Cart />
           
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Сохранить изменения
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TestModal;