import React from "react";
import { modifyTask } from "../api/service";

import {
  CheckBox,
  Container,
  ContainerButton,
  DeleteButton,
} from "./task-styles";

const Task = ({ forEdition, task }) => {
  const saveTaskFinished = async () => {
    const taskFinished = {
      taskData: {
        ...task,
        isFinished: true,
      },
      userEmail: JSON.parse(localStorage.getItem("user")).email,
      id: task._id,
    };
    console.log("taskFinished", taskFinished);
    const resp = await modifyTask(taskFinished);
    return resp;
  };

  return (
    <Container>
      {task && !task.isFinished && (
        <DeleteButton onClick={() => console.log("DELETE")}>
          delete it!
        </DeleteButton>
      )}
      <ContainerButton
        onClick={() => {
          forEdition({ ...task, inputType: "task", exists: true });
        }}
      >
        {task && task.name}
      </ContainerButton>
      {!task.isFinished && (
        <CheckBox type="button" onClick={() => saveTaskFinished()}>
          finish it!
        </CheckBox>
      )}
    </Container>
  );
};

export default Task;
