import styled from "styled-components";

export const Container = styled.div`
  grid-area: TL;
  padding: 30px;
  background-color: inherit;
  width: 100%;
  height: 100%;
`;

export const TasksContainer = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* background-color: red; */
  width: 100%;
`;

export const TaskOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  padding-bottom: 5px;
`;

export const ProjectName = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

export const AddTaskButton = styled.button`
  height: 25px;
  width: 108px;
  border-radius: 20px;
  color: var(--white);
  font-size: 16px;
  background-color: var(--nice-purple);

  :hover {
    transition-duration: 0.2s;
    background-color: var(--dark-purple);
    font-weight: bold;
  }
`;
