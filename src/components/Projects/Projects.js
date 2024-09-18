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
              description="Redesign of a real estate rental website using React"
              ghLink="https://github.com/Carbone6C/Kasa"
              demoLink="https://carbone-kasa.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nina}
              isBlog={false}
              title="Nina Carducci"
              description="Optimization of the website of a photographer"
              ghLink="https://github.com/Carbone6C/NinaCarducci"
              demoLink="carbone-nina.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Sophie}
              isBlog={false}
              title="Sophie Bluel"
              description="Development of an interior designer's portfolio website using Javascript"
              ghLink="https://github.com/Carbone6C/Portfolio-architecte-sophie-bluel"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={events}
              isBlog={false}
              title="724Events"
              description="Migration of the 724events one-page website from an incomplete implementation to a fully functional version, including debugging, task completion, and integration of a recipe book for comprehensive testing."
              ghLink="https://github.com/Carbone6C/Debuggez-une-application-React.JS-main"
              demoLink="https://carbone-724events.netlify.app"
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
