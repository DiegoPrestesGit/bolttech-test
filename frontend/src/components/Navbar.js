import React, { useEffect, useState } from "react";

import { getProjects } from "../api/service";
import { Project } from "../components/index";
import { useStateContext } from "../context/StateContext";
import {
  Container,
  ProjectsContainer,
  TopMenu,
  AddProjectButton,
} from "./navbar-styles";

function Navbar({ setItemSelected }) {
  const { user } = useStateContext();
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const params = {
      userEmail: JSON.parse(localStorage.getItem("user")).email,
    };
    const projects = await getProjects(params);
    return projects;
  };

  useEffect(() => {
    fetchProjects().then((projs) => setProjects(projs));
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
      <ProjectsContainer>
        {projects?.map((proj) => (
          <Project project={proj} />
        ))}
      </ProjectsContainer>
    </Container>
  );
}

export default Navbar;
