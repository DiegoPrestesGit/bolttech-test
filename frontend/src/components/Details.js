import React, { useCallback, useRef } from "react";
import { createProject, modifyProject } from "../api/service";
import { useStateContext } from "../context/StateContext";

import {
  Container,
  DefaultInput,
  TaskHeader,
  InputName,
  SaveChangesButton,
} from "./details-styles";

function Details({ itemSelected, setItemSelected }) {
  const projectNameRef = useRef();
  const projectStartDateRef = useRef();
  const projectEndDateRef = useRef();

  const taskNameRef = useRef();
  const taskStartDateRef = useRef();
  const taskEndDateRef = useRef();

  const createOrEditProject = async () =>
    itemSelected.exists ? await editProject() : await createNewProject();

  const createNewProject = useCallback(async () => {
    const body = {
      projectData: {
        name: projectNameRef.current,
        startDate: projectStartDateRef.current,
        finishDate: projectEndDateRef.current,
      },
      userEmail: JSON.parse(localStorage.getItem("user")).email,
    };
    const newProject = await createProject(body);

    if (newProject) {
    } else {
      // setErrorRegistration(true);
    }
  }, [createProject]);

  const editProject = useCallback(async () => {
    const body = {
      projectData: {
        name: projectNameRef.current,
        startDate: projectStartDateRef.current,
        finishDate: projectEndDateRef.current,
      },
      userEmail: JSON.parse(localStorage.getItem("user")).email,
      id: itemSelected._id,
    };

    const modified = await modifyProject(body);
    console.log("sus", modified);
  }, [modifyProject]);

  const detailTypes = {
    project: (
      <>
        <Container>
          {itemSelected.exists ? (
            <TaskHeader>New Project Details: {itemSelected.name}</TaskHeader>
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
            onChange={(event) =>
              (projectEndDateRef.current = event.target.value)
            }
          ></DefaultInput>
          <SaveChangesButton onClick={async () => await createOrEditProject()}>
            Save it!
          </SaveChangesButton>
          {itemSelected.exists && (
            <>
              <TaskHeader>Current Data:</TaskHeader>
              <InputName>name: {itemSelected.name}</InputName>
              <InputName>start date: {itemSelected.startDate}</InputName>
              <InputName>deadline: {itemSelected.finishDate}</InputName>
            </>
          )}
        </Container>
      </>
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
