import styled from "styled-components";

export const Container = styled.div`
  grid-area: TB;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--quinary);
  width: 100%;
  height: 50px;
  color: var(--white);
`;

export const Icon = styled.img`
  background-color: inherit;
  width: 50px;
  height: 50px;
`;

export const UserContainer = styled.div`
  background-color: inherit;
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserLogout = styled.button`
  width: 80px;
  height: 30px;
  font-size: 18px;
  background-color: var(--nice-purple);
  border-radius: 50px;
  color: var(--white);

  :hover {
    cursor: pointer;
    transition-duration: 0.2s;
    background-color: var(--dark-purple);
    font-weight: bold;
  }
`;

export const ProjectOrganizerText = styled.div`
  background-color: inherit;
  font-size: 30px;

  :hover {
    display: block;
    color: #f2f2f2;
    text-shadow: rgb(204 51 204 / 50%) 5px 0px 6px,
      rgb(51 204 166 / 50%) -4px 0px 2px, rgb(92 135 214) 10px 0px 8px;
    transition-duration: 0.4s;
    transition-timing-function: linear;
  }
`;
