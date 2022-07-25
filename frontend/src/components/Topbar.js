import React, { useCallback } from "react";

import iconSvg from "../assets/logo.svg";
import userLogo from "../assets/user-logo.svg";

import {
  Container,
  Icon,
  UserContainer,
  UserLogout,
  ProjectOrganizerText,
} from "./topbar-styles";

function Topbar({ setUser }) {
  const userLogout = useCallback(() => {
    setUser(undefined);
    localStorage.clear();
  }, [setUser]);

  return (
    <Container>
      <Icon src={iconSvg} />
      <ProjectOrganizerText>Project Organizer</ProjectOrganizerText>
      <UserContainer>
        <UserLogout onClick={userLogout}>Logout</UserLogout>
        <Icon src={userLogo} />
      </UserContainer>
    </Container>
  );
}

export default Topbar;
