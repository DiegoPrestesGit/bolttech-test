import React from "react";
import { modifyTask, removeTask } from "../api/service";

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

  const deleteProject = async () => {
    const userEmail = JSON.parse(localStorage.getItem("user")).email;
    const params = { userEmail, id: task._id };
    const res = await removeTask(params);
    console.log(res);
  };

  return (
    <Container>
      {task && !task.isFinished && (
        <DeleteButton onClick={() => deleteProject()}>delete it!</DeleteButton>
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
