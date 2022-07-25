import React, { useState } from "react";
import { modifyProject } from "../api/service";
import {
  Container,
  CheckBox,
  ContainerButton,
  DeleteButton,
} from "./project-styles";

const Project = ({ forEdition, project }) => {
  const userEmail = JSON.parse(localStorage.getItem("user")).email;
  const saveProjectFinished = async () => {
    const projectFinished = {
      projectData: {
        ...project,
        isFinished: true,
      },
      userEmail,
      id: project._id,
    };
    console.log("XAMA", projectFinished);
    const resp = await modifyProject(projectFinished);
    return resp;
  };

  return (
    <Container>
      {!project.isFinished && <DeleteButton>delete it!</DeleteButton>}
      <ContainerButton
        onClick={() =>
          forEdition({ ...project, inputType: "project", exists: true })
        }
      >
        {project.name}
      </ContainerButton>
      {!project.isFinished && (
        <CheckBox type="button" onClick={saveProjectFinished}>
          finish it!
        </CheckBox>
      )}
    </Container>
  );
};

export default Project;
