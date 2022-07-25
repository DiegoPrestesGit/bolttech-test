import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { Navbar, Topbar, TasksNav, Details } from "./index";
import { Grid } from "./layout-styles";

function Layout() {
  const { user, setUser } = useStateContext();
  const navigation = useNavigate();

  const [projectSelected, setProjectSelected] = useState({});
  const [itemSelected, setItemSelected] = useState({});

  const verifyUserInContext = () => {
    if (!user || Object.keys(user).length === 0) {
      const userInStorage = localStorage.getItem("user");
      if (!userInStorage) {
        navigation("/");
      } else {
        setUser(JSON.parse(userInStorage));
      }
    }
  };

  useEffect(() => verifyUserInContext(), [user]);

  return (
    <Grid>
      <Topbar setUser={setUser} />
      <Navbar
        setProjectSelected={setProjectSelected}
        setItemSelected={setItemSelected}
      />
      <TasksNav
        projectSelected={projectSelected}
        setItemSelected={setItemSelected}
      />
      <Details itemSelected={itemSelected} setItemSelected={setItemSelected} />
    </Grid>
  );
}

export default Layout;
