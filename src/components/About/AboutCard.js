import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Fu Danny </span>
            from <span className="purple"> Paris. France</span>
            <br />
            I am currently studying software development on OpenClassroom.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur."{" "}
          </p>
          <footer className="blockquote-footer">Nelson Mandela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
