import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--quinary);
  /* background-color: yellow; */
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
  width: 70px;
  background-color: var(--nice-purple);
  border-radius: 10px;
`;

export const UserIcon = styled.img`
  width: 50px;
  height: 50px;
`;
