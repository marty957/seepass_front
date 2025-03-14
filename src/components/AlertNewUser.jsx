import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AlertNewUser(props) {
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Registrazione effettuata</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Grazie per la tua registrazione. A breve riceverei un email per la conferma. Il team di SEAPASS ti aspetta!</p>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="button py-1 " style={{ color: "#ffffff", borderRadius: "8px", cursor: "pointer" }} onClick={props.onHide}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AlertNewUser;
