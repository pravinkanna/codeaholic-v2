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
      type: "login",
    };
  }
  showModal = () => {
    this.props.triggerLoginModalShowUpdate(true);
  };
  hideModal = () => {
    this.props.triggerLoginModalShowUpdate(false);
  };

  showLogin = () => {
    this.setState({
      type: "login",
    });
  };

  showRegister = () => {
    this.setState({
      type: "register",
    });
  };

  render() {
    if (this.state.type === "login") {
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
              <Button variant="primary" type="submit" onClick={this.showRegister} block>
                Create new account
              </Button>
              <Button className="oauth-login" block>
                <img src={logo} alt="" />
                &nbsp;&nbsp;Continue with Google
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      );
    } else {
      return (
        <div className="IdeModal">
          <Modal show={this.props.loginModalShow} className="modal" size="sm" aria-labelledby="contained-modal-title-vcenter" onHide={this.hideModal} centered>
            <Modal.Header closeButton onClick={this.hideModal}>
              <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name </Form.Label>
                  <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword2">
                  <Form.Label>Verify Password</Form.Label>
                  <Form.Control type="password" placeholder="Re-type Password" />
                </Form.Group>

                <Button variant="primary" type="submit" block>
                  Register
                </Button>
              </Form>
              <hr />
              <Button variant="primary" type="submit" onClick={this.showLogin} block>
                I already have an account
              </Button>
              <Button className="oauth-login" block>
                <img src={logo} alt="" />
                &nbsp;&nbsp;Continue with Google
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      );
    }
  }
}

export default IdeLoginModal;
