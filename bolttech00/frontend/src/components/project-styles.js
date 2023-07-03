import styled from "styled-components";

export const Container = styled.div`
  background-color: inherit;
  color: var(--white);
  font-size: 18px;
  padding: 2px 4px 2px 4px;
  color: var(--white);
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CheckBox = styled.button`
  width: 60px;
  height: 28px;
  background-color: var(--nice-purple);

  :hover {
    transition-duration: 0.2s;
    background-color: var(--dark-purple);
    cursor: pointer;
    font-weight: bold;
  }
`;

export const DeleteButton = styled.button`
  width: 70px;
  height: 28px;
  background-color: var(--nice-purple);

  :hover {
    transition-duration: 0.2s;
    background-color: var(--notification);
    cursor: pointer;
    font-weight: bold;
  }
`;

export const ContainerButton = styled.button`
  background-color: inherit;
  color: var(--white);
  font-size: 18px;
  padding: 2px 4px 2px 4px;
  color: var(--white);
  font-size: 16px;
  margin-bottom: 5px;

  :hover {
    cursor: pointer;
    font-weight: bold;
  }
`;
