import React from "react";

import iconSvg from "../assets/logo.svg";
import userLogo from "../assets/user-logo.svg";

import {
  Container,
  Icon,
  UserContainer,
  UserLogout,
  ProjectOrganizerText,
} from "./topbar-styles";

function Topbar() {
  return (
    <Container>
      <Icon src={iconSvg} />
      <ProjectOrganizerText>Project Organizer</ProjectOrganizerText>
      <UserContainer>
        <UserLogout onClick={() => console.log("LOGGED OUT")}>
          Logout
        </UserLogout>
        <Icon src={userLogo} />
      </UserContainer>
    </Container>
  );
}

export default Topbar;
