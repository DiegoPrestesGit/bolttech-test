import styled from "styled-components";

export const Container = styled.div`
  grid-area: TD;

  background-color: var(--tertiary);
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  input[type="text"],
  textarea {
    background-color: var(--another-dark);
  }
`;

export const TaskHeader = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: inherit;
  color: var(--white);
  font-weight: bold;
  font-size: 25px;
`;

export const InputName = styled.div`
  background-color: inherit;
  padding-left: 10px;
  font-size: 20px;
  margin-top: 5px;
  color: var(--white);
  align-self: flex-start;
  margin-left: 10px;
`;

export const DefaultInput = styled.input`
  border: 1.5px solid white;
  border-radius: 50px;
  padding-left: 10px;
  font-size: 20px;
  color: var(--white);
  /* margin-top: 0px; */
  margin-bottom: 10px;
`;

export const Description = styled.input``;

export const Notes = styled.input``;

export const StartDate = styled.input``;

export const FinishDate = styled.input``;
