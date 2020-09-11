import React, { useRef, useContext, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

import { IdeContext } from "../contexts/IdeContext";
import auth from "../apis/auth";

import "./IdeLoginModal.css";
const logo = require("./googleLogo.svg");

export default function IdeLoginModal() {
  const [modalType, setModalType] = useState("login");
  const [wrongCredentials, setWrongCredentials] = useState(false);
  const [show, setShow] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { loginModalShow, setLoginModalShow } = useContext(IdeContext);

  const loginEmailBox = useRef(null);
  const loginPasswordBox = useRef(null);
  const nameBox = useRef(null);
  const emailBox = useRef(null);
  const passwordBox = useRef(null);
  const password2Box = useRef(null);

  // const showModal = () => {
  //   setLoginModalShow(true);
  // };

  const hideModal = () => {
    setLoginModalShow(false);
  };

  const showLogin = () => {
    setModalType("login");
    setPassword("");
    setPassword2("");
  };

  const showRegister = () => {
    setModalType("register");
    setLoginPassword("");
  };

  const submitLogin = async () => {
    if (loginEmail && loginPassword) {
      const user = await auth.login(loginEmail, loginPassword);
      if (user.data === "Unauthorized") {
        setWrongCredentials(true);
      } else {
        setWrongCredentials(false);
      }
    }
  };

  const submitRegister = async () => {
    if (name && email && password && password2) {
      const user = await auth.register(name, email, password, password2);
      console.log(user);
    }
  };

  const handleLogin = () => {
    setLoginEmail(loginEmailBox.current.value);
    setLoginPassword(loginPasswordBox.current.value);
  };

  const handleRegister = () => {
    setName(nameBox.current.value);
    setEmail(emailBox.current.value);
    setPassword(passwordBox.current.value);
    setPassword2(password2Box.current.value);
  };

  const ErrorMsg = (
    <Alert variant="danger" display="none">
      Email or Password is wrong!
    </Alert>
  );

  if (modalType === "login") {
    return (
      <div className="IdeModal">
        <Modal show={loginModalShow} className="modal" size="sm" aria-labelledby="contained-modal-title-vcenter" onHide={hideModal} centered>
          <Modal.Header closeButton onClick={hideModal}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {wrongCredentials ? ErrorMsg : ""}
            <Form onSubmit={submitLogin}>
              <Form.Group controlId="formLoginEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control ref={loginEmailBox} onChange={handleLogin} type="email" placeholder="Enter email" value={loginEmail} />
              </Form.Group>

              <Form.Group controlId="formLoginPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={loginPasswordBox} onChange={handleLogin} type="password" placeholder="Password" value={loginPassword} />
              </Form.Group>

              <Button variant="primary" onClick={submitLogin} block>
                Login
              </Button>
            </Form>
            <hr />
            <Button variant="primary" onClick={showRegister} block>
              Create new account
            </Button>
            {/* <Button className="oauth-login" block>
              <img src={logo} alt="" />
              &nbsp;&nbsp;Continue with Google
            </Button> */}
          </Modal.Body>
        </Modal>
      </div>
    );
  } else {
    return (
      <div className="IdeModal">
        <Modal show={loginModalShow} className="modal" size="sm" aria-labelledby="contained-modal-title-vcenter" onHide={hideModal} centered>
          <Modal.Header closeButton onClick={hideModal}>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitRegister}>
              <Form.Group controlId="formRegisterName">
                <Form.Label>Name </Form.Label>
                <Form.Control ref={nameBox} onChange={handleRegister} type="text" placeholder="Enter Name" value={name} />
              </Form.Group>

              <Form.Group controlId="formRegisterEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control ref={emailBox} onChange={handleRegister} type="email" placeholder="Enter email" value={email} />
              </Form.Group>

              <Form.Group controlId="formRegisterPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordBox} onChange={handleRegister} type="password" placeholder="Password" value={password} />
              </Form.Group>

              <Form.Group controlId="formRegisterPassword2">
                <Form.Label>Verify Password</Form.Label>
                <Form.Control ref={password2Box} onChange={handleRegister} type="password" placeholder="Re-type Password" value={password2} />
              </Form.Group>

              <Button variant="primary" onClick={submitRegister} block>
                Register
              </Button>
            </Form>
            <hr />
            <Button variant="primary" onClick={showLogin} block>
              I already have an account
            </Button>
            {/* <Button className="oauth-login" block>
              <img src={logo} alt="" />
              &nbsp;&nbsp;Continue with Google
            </Button> */}
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
