import React, { useState } from "react";
import { modifyProject, removeProject } from "../api/service";
import {
  Container,
  CheckBox,
  ContainerButton,
  DeleteButton,
} from "./project-styles";

const Project = ({ forEdition, project, setProjectSelected }) => {
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

    const resp = await modifyProject(projectFinished);
    return resp;
  };

  const deleteProject = async () => {
    const userEmail = JSON.parse(localStorage.getItem("user")).email;
    const params = { userEmail, id: project._id };
    const res = await removeProject(params);
    console.log(res);
  };

  return (
    <Container>
      {!project.isFinished && (
        <DeleteButton onClick={deleteProject}>delete it!</DeleteButton>
      )}
      <ContainerButton
        onClick={() => {
          setProjectSelected(project);
          forEdition({ ...project, inputType: "project", exists: true });
        }}
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
