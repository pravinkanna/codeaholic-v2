import React, { useContext, useEffect } from "react";
import { Event } from "../tracking";
import { Button, Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
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
    <Button className="login" onClick={handleLogin}>
      <i className="fas fa-sign-in-alt"></i>
      &nbsp;Login
    </Button>
  );

  const authButton = (
    <DropdownButton className="fontSizeBtn" title={"My Account"}>
      <Dropdown.Item>My Files</Dropdown.Item>
      <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
    </DropdownButton>
  );

  return (
    <Navbar variant="dark" expand="lg" className="Navbar">
      <Navbar.Brand href="#home" className="NavbarBrand">
        <img src={logo} alt="logo" className="Logo" />
        &nbsp; <h1 className="BrandName">Pravin IDE</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <DropdownButton className="languageBtn" title={languageName[languageId]} onSelect={handleLanguage}>
            <Dropdown.Item className={languageId === "50" ? "selected" : ""} eventKey="50">
              C (GCC 9.2.0)
            </Dropdown.Item>
            <Dropdown.Item className={languageId === "54" ? "selected" : ""} eventKey="54">
              C++ (GCC 9.2.0)
            </Dropdown.Item>
            <Dropdown.Item className={languageId === "71" ? "selected" : ""} eventKey="71">
              Python (3.8.1)
            </Dropdown.Item>
            <Dropdown.Item className={languageId === "62" ? "selected" : ""} eventKey="62">
              Java (OpenJDK 13.0.1)
            </Dropdown.Item>
            <Dropdown.Item className={languageId === "63" ? "selected" : ""} eventKey="63">
              JavaScript (Node.js 12.14.0)
            </Dropdown.Item>
            <Dropdown.Item className={languageId === "68" ? "selected" : ""} eventKey="68">
              PHP (7.4.1)
            </Dropdown.Item>
            <Dropdown.Item className={languageId === "82" ? "selected" : ""} eventKey="82">
              SQL (SQLite 3.27.2)
            </Dropdown.Item>
          </DropdownButton>

          <DropdownButton className="fontSizeBtn" title={sizeName[fontSize]} onSelect={handleFontSize}>
            <Dropdown.Item className={fontSize === 14 ? "selected" : ""} eventKey="14">
              14px
            </Dropdown.Item>
            <Dropdown.Item className={fontSize === 16 ? "selected" : ""} eventKey="16">
              16px
            </Dropdown.Item>
            <Dropdown.Item className={fontSize === 18 ? "selected" : ""} eventKey="18">
              18px
            </Dropdown.Item>
            <Dropdown.Item className={fontSize === 20 ? "selected" : ""} eventKey="20">
              20px
            </Dropdown.Item>
          </DropdownButton>

          <Button className="share" onClick={handleShareCode}>
            <i className="fas fa-share-alt"></i>&nbsp;Share
          </Button>

          {isAuthenticated ? authButton : unAuthButton}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default IdeNavbar;
