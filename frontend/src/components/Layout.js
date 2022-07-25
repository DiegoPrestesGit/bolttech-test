import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import { Navbar, Topbar, TasksNav, Details } from "./index";
import { Grid } from "./layout-styles";

function Layout() {
  const { user, setUser } = useStateContext();
  const navigation = useNavigate();

  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      const userInStorage = localStorage.getItem("user");

      if (!userInStorage) {
        navigation("/");
      } else {
        setUser(JSON.parse(userInStorage));
      }
    }
  }, [user]);

  const [itemSelected, setItemSelected] = useState({});

  return (
    <Grid>
      <Topbar setUser={setUser} />
      <Navbar setItemSelected={setItemSelected} />
      <TasksNav setItemSelected={setItemSelected} />
      <Details itemSelected={itemSelected} setItemSelected={setItemSelected} />
    </Grid>
  );
}

export default Layout;
