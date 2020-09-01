import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "./IdeShareModal.css";

export class IdeModal extends Component {
  showModal = () => {
    this.props.triggerShareModalShowUpdate(true);
  };
  hideModal = () => {
    this.props.triggerShareModalShowUpdate(false);
  };

  copyTextToClipboard = () => {
    const link = `${window.location.protocol}//${window.location.host}?shareId=${this.props.shareId}`;
    var textField = document.createElement("textarea");
    textField.innerHTML = link;
    document.body.appendChild(textField);
    textField.select();
    textField.setSelectionRange(0, 99999);
    document.execCommand("copy");
    textField.remove();
  };

  render() {
    const link = `${window.location.protocol}//${window.location.host}?shareId=${this.props.shareId}`;
    return (
      <div className="IdeModal">
        <Modal show={this.props.shareModalShow} animation={true} className="modal" onHide={this.hideModal}>
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
