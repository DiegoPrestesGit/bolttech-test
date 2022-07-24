import styled from "styled-components";

export const BiggerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const FormHeader = styled.div`
  width: 450px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: var(--white);
  margin-bottom: 80px;
`;

export const InputName = styled.div`
  background-color: inherit;
  padding-left: 10px;
  font-size: 20px;
  margin-top: 5px;
  color: var(--white);
  margin-left: 10px;
`;

export const DefaultInput = styled.input`
  border: 1.5px solid white;
  border-radius: 50px;
  padding-left: 10px;
  font-size: 20px;
  color: var(--white);
  margin-bottom: 10px;
`;

export const SignIn = styled.button`
  margin-top: 15px;
  border-radius: 50px;
  border: 4px solid var(--white);
  padding: 5px;
  background-color: var(--nice-purple);
  color: var(--white);
  font-size: 26px;

  :hover {
    cursor: pointer;
  }
`;

export const Divisor = styled.div`
  width: 3px;
  height: 88%;
  background-color: var(--white);
`;
