import React from "react";
import Typewriter from "typewriter-effect";
// import { useTranslation } from 'react-i18next'

function Type() {
  // const { t } = useTranslation()
  return (
    <Typewriter
      options={{
        strings: [
          "Front-end Developer",
          "Freelancer",
          "Student",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
