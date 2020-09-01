import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./IdeLoginModal.css";
const logo = require("./googleLogo.svg");

export class IdeLoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: false,
    };
  }
  showModal = () => {
    this.props.triggerLoginModalShowUpdate(true);
  };
  hideModal = () => {
    this.props.triggerLoginModalShowUpdate(false);
  };

  render() {
    return (
      <div className="IdeModal">
        <Modal show={this.props.loginModalShow} className="modal" size="sm" aria-labelledby="contained-modal-title-vcenter" onHide={this.hideModal} centered>
          <Modal.Header closeButton onClick={this.hideModal}>
            <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Login
              </Button>
            </Form>
            <hr />
            <Button className="login-button" block>
              <img src={logo} alt="" />
              &nbsp;&nbsp;Continue with Google
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default IdeLoginModal;
