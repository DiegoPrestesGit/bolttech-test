import React from "react";

import { Task } from "./index";

import {
  Container,
  TasksContainer,
  TaskOptions,
  ProjectName,
  AddTaskButton,
} from "./tasksnav-styles";

function TasksNav() {
  return (
    <>
      <Container>
        <TaskOptions>
          <ProjectName>ProjectName</ProjectName>
          <AddTaskButton onClick={() => console.log("ADD TASK")}>
            Add Task
          </AddTaskButton>
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
