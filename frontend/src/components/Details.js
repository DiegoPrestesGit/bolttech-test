import React from "react";

import {
  Container,
  DefaultInput,
  TaskHeader,
  InputName,
  SaveChangesButton,
} from "./details-style";

function Details({ itemSelected, setItemSelected }) {
  const detailTypes = {
    project: (
      <Container>
        <TaskHeader>Project Details: Project</TaskHeader>
        <InputName>task's name:</InputName>
        <DefaultInput placeholder="new task name" type="text" />

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
    task: (
      <Container>
        {itemSelected.new ? (
          <TaskHeader>Create you new Task!</TaskHeader>
        ) : (
          <TaskHeader>Task Details: TaskName</TaskHeader>
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

  return detailTypes["task"];
  // return detailTypes[inputType];
}

export default Details;
