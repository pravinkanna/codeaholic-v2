import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./IdeModal.css";

export class IdeModal extends Component {
  showModal = () => {
    this.props.triggerModalShowUpdate(true);
  };
  hideModal = () => {
    this.props.triggerModalShowUpdate(false);
  };

  copyTextToClipboard = () => {
    const link = `${window.location.origin}${process.env.PUBLIC_URL}?shareId=${this.props.shareId}`;
    var textField = document.createElement("textarea");
    textField.innerHTML = link;
    document.body.appendChild(textField);
    textField.select();
    textField.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textField.remove();
  };

  render() {
    const link = `${window.location.origin}${process.env.PUBLIC_URL}?shareId=${this.props.shareId}`;
    return (
      <div className="IdeModal">
        <Modal show={this.props.modalShow} onClick={this.hideModal} className="modal">
          <Modal.Header closeButton className="modal-header">
            <Modal.Title>Code Shared</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <b>Link</b>
            <br />
            {link}
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="primary" onClick={this.copyTextToClipboard}>
              Copy
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default IdeModal;
