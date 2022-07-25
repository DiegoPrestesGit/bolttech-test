import React, { useCallback, useEffect, useState } from "react";
import { getTasks } from "../api/service";

import { Task } from "./index";

import {
  Container,
  TasksContainer,
  TaskOptions,
  ProjectName,
  AddTaskButton,
} from "./tasksnav-styles";

function TasksNav({ setItemSelected, projectSelected }) {
  const [tasks, setTasks] = useState([]);
  const [tasksFinished, setTasksFinished] = useState([]);

  const fetchTasks = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const params = {
      userEmail: user.email,
      projectId: projectSelected._id,
    };
    const tasks = await getTasks(params);
    return tasks;
  };

  useEffect(() => {
    fetchTasks().then((tasksResp) => {
      // console.log("TASKS", tasksResp);
      if (tasksResp.length) {
        setTasks(tasksResp.filter((tk) => tk.isFinished === false));
        setTasksFinished(tasksResp.filter((tk) => tk.isFinished === true));
      }
    });
  }, [projectSelected._id]);

  return (
    <>
      <Container>
        <TaskOptions>
          <ProjectName>{projectSelected.name}</ProjectName>
          <AddTaskButton
            onClick={() =>
              setItemSelected({
                project: projectSelected,
                exists: false,
                inputType: "task",
              })
            }
          >
            Add Task
          </AddTaskButton>
        </TaskOptions>
        <TasksContainer>
          <ProjectName>TODO</ProjectName>
          {tasks?.map((tk) => (
            <Task task={tk} key={tk._id} />
          ))}
        </TasksContainer>
        <TasksContainer>
          <ProjectName>DONE</ProjectName>
          {tasksFinished?.map((tk) => (
            <Task task={tk} key={tk._id} />
          ))}
        </TasksContainer>
      </Container>
    </>
  );
}

export default TasksNav;
