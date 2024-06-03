import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import events from "../../Assets/Projects/events.png";
import ArgentBank from "../../Assets/Projects/ArgentBank.png";
import Sophie from "../../Assets/Projects/Sophie bluel.png";
import Nina from "../../Assets/Projects/Nina Carducci.png";
import Kasa from "../../Assets/Projects/Kasa.png";
import { useTranslation, Trans } from 'react-i18next'

function Projects() {
  const { t } = useTranslation()
  return (
    <Container fluid className="project-section">
      <Trans i18nKey={"project-section"}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kasa}
              isBlog={false}
              title="Kasa"
              description={t("projectDescription.kasa")}
              ghLink="https://github.com/Carbone6C/Kasa"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nina}
              isBlog={false}
              title="Nina Carducci"
              description={t("projectDescription.nina")}
              ghLink="https://github.com/Carbone6C/NinaCarducci"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sophie}
              isBlog={false}
              title="Sophie Bluel"
              description={t("projectDescription.sophie")}
              ghLink="https://github.com/Carbone6C/Portfolio-architecte-sophie-bluel"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={events}
              isBlog={false}
              title="724Events"
              description={t("projectDescription.724events")}
              ghLink="https://github.com/Carbone6C/Debuggez-une-application-React.JS-main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ArgentBank}
              isBlog={false}
              title="ArgentBank"
              description="Modification of a bank website written from Javascript to React.js and implementation of redux"
              ghLink="https://github.com/Carbone6C/ArgentBank"
            />
          </Col>
        </Row>
      </Container>
      </Trans>
      {t('new.key', '')}
    </Container>
  );
}

export default Projects;
