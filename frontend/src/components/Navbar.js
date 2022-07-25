import React, { useEffect, useState } from "react";

import { getProjects } from "../api/service";
import { Project } from "../components/index";
import { useStateContext } from "../context/StateContext";
import {
  Container,
  ProjectsContainer,
  TopMenu,
  AddProjectButton,
  Header,
} from "./navbar-styles";

function Navbar({ setItemSelected }) {
  const [projects, setProjects] = useState([]);
  const [projectsFinished, setProjectsFinished] = useState([]);

  const fetchProjects = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const params = {
      userEmail: user.email,
    };
    const projects = await getProjects(params);
    return projects;
  };

  useEffect(() => {
    fetchProjects().then((projs) => {
      if (projs.length) {
        setProjectsFinished(projs.filter((proj) => proj.isFinished));
        setProjects(projs.filter((proj) => proj.isFinished === false));
      }
    });
  }, []);

  return (
    <Container>
      <TopMenu>
        <AddProjectButton
          onClick={() =>
            setItemSelected({ exists: false, inputType: "project" })
          }
        >
          Add Project
        </AddProjectButton>
      </TopMenu>

      <Header>IN PROGRESS</Header>
      <ProjectsContainer>
        {projects?.map((proj) => (
          <Project forEdition={setItemSelected} key={proj._id} project={proj} />
        ))}
      </ProjectsContainer>

      <Header>DONE</Header>
      <ProjectsContainer>
        {projectsFinished?.map((proj) => (
          <Project forEdition={setItemSelected} key={proj._id} project={proj} />
        ))}
      </ProjectsContainer>
    </Container>
  );
}

export default Navbar;
