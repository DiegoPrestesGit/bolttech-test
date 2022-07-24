import React from "react";

import { Project } from "../components/index";
import {
  Container,
  ProjectsContainer,
  TopMenu,
  AddProjectButton,
} from "./navbar-styles";

function Navbar() {
  return (
    <Container>
      <TopMenu>
        <AddProjectButton onClick={() => console.log("Add Project")}>
          Add Project
        </AddProjectButton>
      </TopMenu>
      <ProjectsContainer>
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </ProjectsContainer>
    </Container>
  );
}

export default Navbar;
