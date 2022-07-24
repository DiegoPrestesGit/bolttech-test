import React from "react";

import {
  Container,
  Description,
  Notes,
  StartDate,
  FinishDate,
  DefaultInput,
  TaskHeader,
  InputName,
} from "./details-style";

function Details() {
  const detailTypes = {
    project: (
      <Container>
        {/*
      NAME
      STARTDATE
      FINISHDATE
      */}
      </Container>
    ),
    task: (
      <Container>
        {/*
      NAME
      DESCRIPTION
      NOTES
      STARTDATE
      FINISHDATE
      */}
        <TaskHeader>Details: TaskName</TaskHeader>
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
      </Container>
    ),
  };

  return detailTypes["task"];
}

export default Details;
