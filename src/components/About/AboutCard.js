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
            I am currently studying software development on OpenClassroom.
            <br />
            Apart from coding, some other activities that I love to do!
          </Trans>
        </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('playingGames')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('practicingSports')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('travelling')}
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            {t('quote-footer')}
          </p>
          <footer className="blockquote-footer">{t('quote-author')}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;