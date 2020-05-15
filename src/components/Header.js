import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import Menu from "./Menu";

const Header = (props) => {
  if (!props.data) {
    return null;
  }

  return (
    <header className="header">
      <div className="green-bg py-2">
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col md={7} lg={7} className="d-md-block d-lg-block"></Col>
            <Col md={4} lg={4}>
              <div className="topbar-text text-white">
                <ul className="list-inline text-md-right text-lg-right text-left">
                  <li className="list-inline-item">
                    <span>{props.data.topHeader.text}</span>
                    {props.data.topHeader.links.map((link, i) => (
                      <SocialIcon
                        key={i}
                        network={link.network}
                        url={link.url}
                        fgColor="#fff"
                        style={{ height: 25, width: 25 }}
                      />
                    ))}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar expand="lg" className="white-bg">
        <Container>
          <Navbar.Brand as={Link} to={props.data.logo.link}>
            <img
              src={require("./../images/" + props.data.logo.imgsrc)}
              className="img-fluid"
              alt={props.data.logo.title}
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="h-auto">
            <Menu items={props.data.menu} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
