import React, { useRef, useContext, useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";

import { IdeContext } from "../contexts/IdeContext";
import auth from "../apis/auth";

import "./IdeLoginModal.css";
import { AuthContext } from "../contexts/AuthContext";
// const logo = require("./googleLogo.svg");

export default function IdeLoginModal() {
  const [modalType, setModalType] = useState("login");
  const [wrongLoginCredentials, setWrongLoginCredentials] = useState(false);
  const [wrongRegisterCredentials, setWrongRegisterCredentials] = useState(false);
  const [registered, setRegistered] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const { loginModalShow, setLoginModalShow } = useContext(IdeContext);
  const { setIsAuthenticated } = useContext(AuthContext);

  const loginEmailBox = useRef(null);
  const loginPasswordBox = useRef(null);
  const nameBox = useRef(null);
  const emailBox = useRef(null);
  const passwordBox = useRef(null);
  const password2Box = useRef(null);

  const loginErrorMsg = (
    <Alert variant="danger" display="none">
      Email or Password is wrong!
    </Alert>
  );

  let registerErrorMsg = (
    <Alert variant="danger" display="none">
      Given details is not valid
    </Alert>
  );

  let registerSuccessMsg = (
    <Alert variant="success" display="none">
      User Successfully Registered
    </Alert>
  );

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
      const res = await auth.login(loginEmail, loginPassword);
      if (res.data === "Unauthorized") {
        setWrongLoginCredentials(true);
      } else {
        setWrongLoginCredentials(false);
        setIsAuthenticated(true);
        setLoginModalShow(false);
      }
    } else {
      setWrongLoginCredentials(true);
    }
  };

  const submitRegister = async () => {
    if (name && email && password && password2) {
      const res = await auth.register(name, email, password, password2);
      if (res.data.message.msgError) {
        setWrongRegisterCredentials(true);
      } else {
        setWrongRegisterCredentials(false);
        setRegistered(true);
      }
    } else {
      setWrongRegisterCredentials(true);
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

  if (modalType === "login") {
    return (
      <div className="IdeModal">
        <Modal show={loginModalShow} className="modal" size="sm" aria-labelledby="contained-modal-title-vcenter" onHide={hideModal} centered>
          <Modal.Header closeButton onClick={hideModal}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {wrongLoginCredentials ? loginErrorMsg : ""}
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
            {wrongRegisterCredentials ? registerErrorMsg : ""}
            {registered ? registerSuccessMsg : ""}
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
