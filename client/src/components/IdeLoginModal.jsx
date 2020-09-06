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
      loginEmail: "",
      loginPassword: "",
      name: "",
      email: "",
      password: "",
      password2: "",
    };

    this.loginEmail = React.createRef();
    this.loginPassword = React.createRef();
    this.name = React.createRef();
    this.email = React.createRef();
    this.password = React.createRef();
    this.password2 = React.createRef();
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

  submitLogin = () => {
    console.log(this.state.loginEmail, this.state.loginPassword);
  };

  submitRegister = () => {
    console.log(this.state.name, this.state.email, this.state.password, this.state.password2);
  };

  handleLogin = () => {
    this.setState({
      loginEmail: this.loginEmail.current.value,
      loginPassword: this.loginPassword.current.value,
    });
  };

  handleRegister = () => {
    this.setState({
      name: this.name.current.value,
      email: this.email.current.value,
      password: this.password.current.value,
      password2: this.password2.current.value,
    });
  };

  render() {
    if (this.state.type === "login") {
      return (
        <div className="IdeModal">
          <Modal show={this.props.loginModalShow} className="modal" size="sm" aria-labelledby="contained-modal-title-vcenter" onHide={this.hideModal} centered>
            <Modal.Header closeButton onClick={this.hideModal}>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.submitLogin}>
                <Form.Group controlId="formLoginEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control ref={this.loginEmail} onChange={this.handleLogin} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formLoginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={this.loginPassword} onChange={this.handleLogin} type="password" placeholder="Password" />
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
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.submitRegister}>
                <Form.Group controlId="formRegisterName">
                  <Form.Label>Name </Form.Label>
                  <Form.Control ref={this.name} onChange={this.handleRegister} type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="formRegisterEmail">
                  <Form.Label>Email </Form.Label>
                  <Form.Control ref={this.email} onChange={this.handleRegister} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formRegisterPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control ref={this.password} onChange={this.handleRegister} type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formRegisterPassword2">
                  <Form.Label>Verify Password</Form.Label>
                  <Form.Control ref={this.password2} onChange={this.handleRegister} type="password" placeholder="Re-type Password" />
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
