import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  BiggerContainer,
  Container,
  DefaultInput,
  InputName,
  SignIn,
  FormHeader,
  Divisor,
} from "./login-styles";

function Login() {
  const navigation = useNavigate();

  const handleClick = useCallback(() => navigation("/projects"), []);

  return (
    <BiggerContainer>
      <Container>
        <FormHeader>Already have an account? Sign in!</FormHeader>
        <InputName>e-mail:</InputName>
        <DefaultInput />
        <InputName>password:</InputName>
        <DefaultInput />
        <SignIn onClick={handleClick}>SIGN IN</SignIn>
      </Container>
      <Divisor />
      <Container>
        <FormHeader>Register now and organize!</FormHeader>
        <InputName>e-mail:</InputName>
        <DefaultInput />
        <InputName>password:</InputName>
        <DefaultInput />
        <SignIn onClick={handleClick}>REGISTER</SignIn>
      </Container>
    </BiggerContainer>
  );
}

export default Login;
