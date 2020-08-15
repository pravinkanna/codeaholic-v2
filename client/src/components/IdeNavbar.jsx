import React, { Component } from "react";
import { Button, Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import "./IdeNavbar.css";
import logo from "./pkLogo.svg";

class IdeNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      language: "c",
      fontSize: "16",
    };
    // this.props.triggerLanguageUpdate(this.state.language);
    // this.props.triggerFontSizeUpdate(this.state.fontSize);
  }

  languageName = {
    c: "C (GCC 9.2.0)",
    cpp: "C++ (GCC 9.2.0)",
    java: "Java (OpenJDK 13.0.1)",
    python: "Python (3.8.1)",
  };

  sizeName = {
    14: "14px",
    16: "16px",
    18: "18px",
    20: "20px",
  };

  handleLanguage = (language) => {
    this.setState({
      language: language,
    });
    this.props.triggerLanguageUpdate(language);
  };

  handleFontSize = (fontSize) => {
    this.setState({
      fontSize: fontSize,
    });
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
    const { language, fontSize } = this.state;
    return (
      <Navbar variant="dark" expand="lg" className="Navbar">
        <Navbar.Brand href="#home" className="NavbarBrand">
          <img src={logo} alt="logo" className="Logo" />
          &nbsp;Pravin IDE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <DropdownButton className="languageBtn" title={this.languageName[language]} onSelect={this.handleLanguage}>
              <Dropdown.Item className={language === "c" ? "selected" : ""} eventKey="c">
                C (GCC 9.2.0)
              </Dropdown.Item>
              <Dropdown.Item className={language === "cpp" ? "selected" : ""} eventKey="cpp">
                C++ (GCC 9.2.0)
              </Dropdown.Item>
              <Dropdown.Item className={language === "python" ? "selected" : ""} eventKey="python">
                Python (3.8.1)
              </Dropdown.Item>
              <Dropdown.Item className={language === "java" ? "selected" : ""} eventKey="java">
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
