import React from "react";
import { Container } from "./project-styles";

const Project = ({ project }) => {
  return <Container>{project.name}</Container>;
};

export default Project;
