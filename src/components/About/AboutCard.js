import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation, Trans } from 'react-i18next';

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
        
        <p style={{ textAlign: "justify" }}>
            <Trans i18nKey="quote-card-view">
            Hi Everyone, I am <span className="purple">Fu Danny</span> from <span className="purple">Paris, France</span>.
            <br />
            I am currently studying web engineering at ESGI.
            <br />
            Apart from coding, some other activities that I love to do!
          </Trans>
        </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
          The greatest glory in living lies not in never falling, but in rising every time we fall.
          </p>
          <footer className="blockquote-footer">Nelson Mandela</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;