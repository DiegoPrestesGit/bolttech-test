import React from "react";

import {
  CheckBox,
  Container,
  ContainerButton,
  DeleteButton,
} from "./task-styles";

const Task = ({ task }) => {
  return (
    <Container>
      {!task.isFinished && (
        <DeleteButton onClick={() => console.log("DELETE")}>
          delete it!
        </DeleteButton>
      )}
      <ContainerButton
        onClick={() => {
          // forEdition({ inputType: "project", exists: true });
          console.log("BUTTTT");
        }}
      >
        {task.name}
      </ContainerButton>
      {!task.isFinished && (
        <CheckBox type="button" onClick={() => console.log("AHEAEUHDDDDD")}>
          finish it!
        </CheckBox>
      )}
    </Container>
  );
};

export default Task;
