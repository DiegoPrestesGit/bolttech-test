import React from "react";

import { Task } from "./index";

import {
  Container,
  TasksContainer,
  TaskOptions,
  ProjectName,
} from "./tasksnav-styles";
import { AddProjectButton } from "./navbar-styles";

function TasksNav() {
  return (
    <>
      <Container>
        <TaskOptions>
          <ProjectName>ProjectName</ProjectName>
          <AddProjectButton onClick={() => console.log("ADD TASK")}>
            Add Task
          </AddProjectButton>
        </TaskOptions>
        <TasksContainer>
          <ProjectName>DOING</ProjectName>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </TasksContainer>
        <TasksContainer>
          <ProjectName>TODO</ProjectName>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </TasksContainer>
      </Container>
    </>
  );
}

export default TasksNav;
