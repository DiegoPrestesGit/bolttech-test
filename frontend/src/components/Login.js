import React, { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../api/service";

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
  const registerNameRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const signInEmailRef = useRef();
  const signInPasswordRef = useRef();

  const navigation = useNavigate();

  const handleClick = useCallback(() => navigation("/projects"), []);

  const userRegistration = useCallback(async () => {
    const body = {
      name: registerNameRef.current,
      email: registerEmailRef.current,
      password: registerPasswordRef.current,
    };

    const response = await createUser(body);
  }, []);

  return (
    <BiggerContainer>
      <Container>
        <FormHeader>Already have an account? Sign in!</FormHeader>
        <InputName>e-mail:</InputName>
        <DefaultInput />
        <InputName>password:</InputName>
        <DefaultInput type="password" />
        <SignIn onClick={handleClick}>SIGN IN</SignIn>
      </Container>
      <Divisor />
      <Container>
        <FormHeader>Register now and organize!</FormHeader>
        <InputName>name:</InputName>
        <DefaultInput
          onChange={(event) => (registerNameRef.current = event.target.value)}
        />
        <InputName>e-mail:</InputName>
        <DefaultInput
          onChange={(event) => (registerEmailRef.current = event.target.value)}
        />
        <InputName>password:</InputName>
        <DefaultInput
          type="password"
          onChange={(event) =>
            (registerPasswordRef.current = event.target.value)
          }
        />
        <SignIn onClick={userRegistration}>REGISTER</SignIn>
      </Container>
    </BiggerContainer>
  );
}

export default Login;
