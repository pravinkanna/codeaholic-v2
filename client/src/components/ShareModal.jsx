import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { IdeContext } from "../contexts/IdeContext";
import "./ShareModal.css";

export default function IdeModal() {
  const { shareModalShow, setShareModalShow, shareId } = useContext(IdeContext);

  // const showModal = () => {
  //   setShareModalShow(true);
  // };
  const hideModal = () => {
    setShareModalShow(false);
  };

  const copyTextToClipboard = () => {
    const link = `${window.location.protocol}//${window.location.host}?shareId=${shareId}`;
    var textField = document.createElement("textarea");
    textField.innerHTML = link;
    document.body.appendChild(textField);
    textField.select();
    textField.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textField.remove();
  };

  const link = `${window.location.protocol}//${window.location.host}?shareId=${shareId}`;
  return (
    <div className="IdeModal">
      <Modal show={shareModalShow} animation={true} className="modal" onHide={hideModal}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>Code Shared</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <b>Link</b>
          <br />
          {link}
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="primary" onClick={copyTextToClipboard}>
            Copy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
