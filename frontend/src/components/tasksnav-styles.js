import styled from "styled-components";

export const Container = styled.div`
  grid-area: TL;
  padding-top: 30px;
  background-color: inherit;
  width: 80vw;
  height: 100%;
`;

export const TasksContainer = styled.div`
  color: var(--white);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: flex-start;
  background-color: red;
  /* background-color: inherit; */
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
