import React, { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser, createUser } from "../api/service";
import { useStateContext } from "../context/StateContext";

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
  const { setUser } = useStateContext();

  const registerNameRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const signInEmailRef = useRef();
  const signInPasswordRef = useRef();

  // const [errorRegistration, setErrorRegistration] = useState(false);

  const navigation = useNavigate();

  const handleNavigation = useCallback(() => navigation("/projects"), []);

  const userAuthentification = useCallback(async () => {
    const params = {
      email: signInEmailRef.current,
      password: signInPasswordRef.current,
    };

    const user = await authenticateUser(params);

    if (user.name) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));

      handleNavigation();
    } else {
      // setErrorRegistration(true);
    }
  }, []);

  const userRegistration = useCallback(async () => {
    const body = {
      name: registerNameRef.current,
      email: registerEmailRef.current,
      password: registerPasswordRef.current,
    };

    const newUser = await createUser(body);

    if (newUser.name) {
      setUser(newUser);
      localStorage.setItem("user", newUser);

      handleNavigation();
    } else {
      // setErrorRegistration(true);
    }
  }, [createUser]);

  return (
    <BiggerContainer>
      <Container>
        <FormHeader>Already have an account? Sign in!</FormHeader>
        <InputName>e-mail:</InputName>
        <DefaultInput
          type="text"
          onChange={(event) => (signInEmailRef.current = event.target.value)}
        />
        <InputName>password:</InputName>
        <DefaultInput
          type="password"
          onChange={(event) => (signInPasswordRef.current = event.target.value)}
        />
        <SignIn onClick={userAuthentification}>SIGN IN</SignIn>
      </Container>
      <Divisor />
      <Container>
        {/* {errorRegistration && <FormHeader>ERROR MESSAGE</FormHeader>} */}
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
