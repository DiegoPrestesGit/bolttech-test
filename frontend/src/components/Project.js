import React, { useState } from "react";
import { modifyProject } from "../api/service";
import { Container, CheckBox, ContainerButton } from "./project-styles";

const Project = ({ project }) => {
  const userEmail = JSON.parse(localStorage.getItem("user")).email;
  const saveProjectFinished = async () => {
    console.log("EXEC");
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
      <ContainerButton>{project.name}</ContainerButton>
      {!project.isFinished && (
        <CheckBox type="button" onClick={saveProjectFinished}>
          finish it!
        </CheckBox>
      )}
    </Container>
  );
};

export default Project;
