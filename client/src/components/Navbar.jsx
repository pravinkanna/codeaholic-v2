import React, { useContext, useEffect } from "react";
import { Event } from "./tracking";
import { Button, Navbar, Nav, DropdownButton, Dropdown, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import { IdeContext } from "../contexts/IdeContext";
import "./Navbar.css";
import logo from "./pkLogo.svg";

import auth from "../apis/auth";
import { share } from "../apis/share";

function IdeNavbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { languageId, code, fontSize, setLanguageId, setFontSize, setShareId, setShareModalShow, setLoginModalShow } = useContext(IdeContext);

  const languageName = {
    50: "C (GCC 9.2.0)",
    54: "C++ (GCC 9.2.0)",
    71: "Python (3.8.1)",
    62: "Java (OpenJDK 13.0.1)",
    63: "JavaScript (Node.js 12.14.0)",
    68: "PHP (7.4.1)",
    82: "SQL (SQLite 3.27.2)",
  };

  const sizeName = {
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
  };

  useEffect(() => {
    setIsAuthenticated(isAuthenticated);
  }, [isAuthenticated, setIsAuthenticated]);

  // useEffect(() => {
  //   setLanguageId(languageId);
  //   setCode(code);
  //   setShareId(shareId);
  //   setFontSize(fontSize);
  //   setShareModalShow(shareModalShow);
  //   setLoginModalShow(loginModalShow);
  // }, [languageId, code, shareId, fontSize, shareModalShow, loginModalShow]);

  const handleLanguage = (languageId) => {
    setLanguageId(languageId);
  };

  const handleFontSize = (value) => {
    setFontSize(Number(value));
  };

  const handleShareCode = async () => {
    if (code) {
      const id = await share(languageId, code);
      console.log(id);
      setShareId(id.data.data._id);
      setShareModalShow(true);
      Event("Share", "Code Shared Button", "IDE_PAGE");
    } else {
      alert("Editor is empty!");
    }
  };

  const handleLogin = () => {
    setLoginModalShow(true);
    Event("Login", "Login Button", "IDE_PAGE");
  };

  const handleLogout = () => {
    auth.logout();
    setIsAuthenticated(false);
  };

  const unAuthButton = (
    <Button className="button login-button" onClick={handleLogin}>
      <i className="fas fa-sign-in-alt"></i>
      &nbsp;Login
    </Button>
  );

  const authButton = (
    <NavDropdown className="button myaccount-button" title={"My Account"}>
      <NavDropdown.Item>My Files</NavDropdown.Item>
      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
    </NavDropdown>
  );

  return (
    <Navbar sticky="top" variant="dark" expand="lg" className="Navbar">
      <Navbar.Brand href="/" className="NavbarBrand">
        <img src={logo} className="Logo" alt="PK logo" />
        &nbsp;<h1 className="BrandName">Pravin IDE</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown className="button language-button" title={languageName[languageId]} onSelect={handleLanguage}>
            <NavDropdown.Item className={languageId === "50" ? "active" : ""} eventKey="50">
              C (GCC 9.2.0)
            </NavDropdown.Item>
            <NavDropdown.Item className={languageId === "54" ? "active" : ""} eventKey="54">
              C++ (GCC 9.2.0)
            </NavDropdown.Item>
            <NavDropdown.Item className={languageId === "71" ? "active" : ""} eventKey="71">
              Python (3.8.1)
            </NavDropdown.Item>
            <NavDropdown.Item className={languageId === "62" ? "active" : ""} eventKey="62">
              Java (OpenJDK 13.0.1)
            </NavDropdown.Item>
            <NavDropdown.Item className={languageId === "63" ? "active" : ""} eventKey="63">
              JavaScript (Node.js 12.14.0)
            </NavDropdown.Item>
            <NavDropdown.Item className={languageId === "68" ? "active" : ""} eventKey="68">
              PHP (7.4.1)
            </NavDropdown.Item>
            <NavDropdown.Item className={languageId === "82" ? "active" : ""} eventKey="82">
              SQL (SQLite 3.27.2)
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown className="button fontsize-button" title={sizeName[fontSize]} onSelect={handleFontSize}>
            <NavDropdown.Item className={fontSize === 14 ? "active" : ""} eventKey="14">
              14px
            </NavDropdown.Item>
            <NavDropdown.Item className={fontSize === 16 ? "active" : ""} eventKey="16">
              16px
            </NavDropdown.Item>
            <NavDropdown.Item className={fontSize === 18 ? "active" : ""} eventKey="18">
              18px
            </NavDropdown.Item>
            <NavDropdown.Item className={fontSize === 20 ? "active" : ""} eventKey="20">
              20px
            </NavDropdown.Item>
          </NavDropdown>

          <Button className="button share-button" onClick={handleShareCode}>
            <i className="fas fa-share-alt"></i>&nbsp;Share
          </Button>
          {isAuthenticated ? authButton : unAuthButton}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default IdeNavbar;
