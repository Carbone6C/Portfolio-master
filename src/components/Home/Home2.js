import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Trans } from 'react-i18next';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Trans i18nKey={"home-about-section.new"}>
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                After a career in <i><b className="purple">IT Support</b></i>, 
                I decided to follow my passion for web development and make a career change to become a web integrator.
                <br />
                <br />
                I am now a junior web integrator with strong skills in
                <i>
                  <b className="purple"> HTML, CSS, and JavaScript</b>.
                </i>
                <br />
                <br />
                My main interests are in creating new &nbsp;
                <i>
                  <b className="purple">web technologies and products</b> and 
                  also in areas related to <b className="purple">accessibility and SEO</b>.
                </i>
                <br />
                <br />
                Whenever possible, I apply my passion for developing products 
                with <b className="purple">Bootstrap</b> and modern frameworks like
                <i>
                  <b className="purple"> React.js</b>.
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/carbone6c"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Trans>
    </Container>
  );
}

export default Home2;
