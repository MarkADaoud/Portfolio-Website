import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/git.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/X.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <a href="https://github.com/MarkADaoud/"><img src={logo} alt="Icon" /></a>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mark-daoud-75a0242ab/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/Kokomarkolo"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/kokomarkolo/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
