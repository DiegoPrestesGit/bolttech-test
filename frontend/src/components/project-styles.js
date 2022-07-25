import styled from "styled-components";

export const Container = styled.button`
  background-color: inherit;
  color: var(--white);
  font-size: 18px;
  padding: 2px 4px 2px 4px;
  border: 0.5px solid;
  border-radius: 6px;
  color: var(--white);
  font-size: 16px;
  margin-bottom: 5px;

  :hover {
    cursor: pointer;
    transition-duration: 0.2s;
    background-color: var(--dark-purple);
    font-weight: bold;
  }
`;
