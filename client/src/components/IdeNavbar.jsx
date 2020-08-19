import React, { Component } from "react";
import { Button, Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import "./IdeNavbar.css";
import logo from "./pkLogo.svg";

class IdeNavbar extends Component {
  // languageId
  // c: "50"
  // cpp: "54"
  // python: "71"
  // java: "62"
  //

  languageName = {
    50: "C (GCC 9.2.0)",
    54: "C++ (GCC 9.2.0)",
    71: "Python (3.8.1)",
    62: "Java (OpenJDK 13.0.1)",
  };

  sizeName = {
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
  };

  handleLanguage = (languageId) => {
    this.props.triggerLanguageUpdate(languageId);
  };

  handleFontSize = (fontSize) => {
    this.props.triggerFontSizeUpdate(fontSize);
  };

  handleShareCode = () => {
    if (this.props.code) {
      this.props.shareCode();
    } else {
      alert("Editor is empty!");
    }
  };

  render() {
    const { languageId, fontSize } = this.props;
    return (
      <Navbar variant="dark" expand="lg" className="Navbar">
        <Navbar.Brand href="#home" className="NavbarBrand">
          <img src={logo} alt="logo" className="Logo" />
          <span className="BrandName">&nbsp;Pravin IDE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <DropdownButton className="languageBtn" title={this.languageName[languageId]} onSelect={this.handleLanguage}>
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
            </DropdownButton>

            <DropdownButton className="fontSizeBtn" title={this.sizeName[fontSize]} onSelect={this.handleFontSize}>
              <Dropdown.Item className={fontSize === "14" ? "selected" : ""} eventKey="14">
                14px
              </Dropdown.Item>
              <Dropdown.Item className={fontSize === "16" ? "selected" : ""} eventKey="16">
                16px
              </Dropdown.Item>
              <Dropdown.Item className={fontSize === "18" ? "selected" : ""} eventKey="18">
                18px
              </Dropdown.Item>
              <Dropdown.Item className={fontSize === "20" ? "selected" : ""} eventKey="20">
                20px
              </Dropdown.Item>
            </DropdownButton>

            <Button className="share" onClick={this.handleShareCode}>
              <i className="fas fa-share-alt"></i>
            </Button>

            <Button className="login" onClick={this.handleShareCode}>
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default IdeNavbar;
