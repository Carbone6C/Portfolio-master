import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation, Trans } from 'react-i18next'

function Github() {
  const { t } = useTranslation()
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <Trans i18nKey={"github"}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      
      <GitHubCalendar
        username="Carbone6C"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
      </Trans>
      {t('new.key', '')}
    </Row>
  );
}

export default Github;
