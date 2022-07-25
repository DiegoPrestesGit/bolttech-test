import React, { useCallback, useRef } from "react";
import { createProject } from "../api/service";
import { useStateContext } from "../context/StateContext";

import {
  Container,
  DefaultInput,
  TaskHeader,
  InputName,
  SaveChangesButton,
} from "./details-styles";

function Details({ itemSelected, setItemSelected }) {
  const { user } = useStateContext();

  const projectNameRef = useRef();
  const projectStartDateRef = useRef();
  const projectEndDateRef = useRef();

  const taskNameRef = useRef();
  const taskStartDateRef = useRef();
  const taskEndDateRef = useRef();

  const createNewProject = useCallback(async () => {
    const body = {
      projectData: {
        name: projectNameRef.current,
        startDate: projectStartDateRef.current,
        finishDate: projectEndDateRef.current,
      },
      userEmail: user.email,
    };
    const newProject = await createProject(body);

    if (newProject) {
    } else {
      // setErrorRegistration(true);
    }
  }, [createProject]);

  const detailTypes = {
    project: (
      <Container>
        {itemSelected.exists ? (
          <TaskHeader>Project Details: ProjectName</TaskHeader>
        ) : (
          <TaskHeader>Create your new project!</TaskHeader>
        )}

        <InputName>project's name:</InputName>
        <DefaultInput
          placeholder="new task name"
          type="text"
          onChange={(event) => (projectNameRef.current = event.target.value)}
        />

        <InputName>project's start date:</InputName>
        <DefaultInput
          placeholder="new project start date"
          type="text"
          onChange={(event) =>
            (projectStartDateRef.current = event.target.value)
          }
        ></DefaultInput>

        <InputName>project's deadline:</InputName>
        <DefaultInput
          placeholder="new project deadline"
          type="text"
          onChange={(event) => (projectEndDateRef.current = event.target.value)}
        ></DefaultInput>
        <SaveChangesButton onClick={createNewProject}>
          Save it!
        </SaveChangesButton>
      </Container>
    ),
    task: (
      <Container>
        {itemSelected.exists ? (
          <TaskHeader>Task Details: TaskName</TaskHeader>
        ) : (
          <TaskHeader>Create your new Task!</TaskHeader>
        )}
        <InputName>task's name:</InputName>
        <DefaultInput placeholder="new task name" type="text" />

        <InputName>task's description:</InputName>
        <DefaultInput
          placeholder="new task description"
          type="text"
        ></DefaultInput>

        <InputName>task's notes:</InputName>
        <DefaultInput placeholder="new task notes" type="text"></DefaultInput>

        <InputName>task's start date:</InputName>
        <DefaultInput
          placeholder="new task start date"
          type="text"
        ></DefaultInput>

        <InputName>task's deadline:</InputName>
        <DefaultInput
          placeholder="new task deadline"
          type="text"
        ></DefaultInput>
        <SaveChangesButton onClick={() => console.log("SAVED!")}>
          Save it!
        </SaveChangesButton>
      </Container>
    ),
  };

  return detailTypes[itemSelected.inputType || "task"];
  // return detailTypes[inputType];
}

export default Details;
