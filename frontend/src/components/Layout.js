import React from "react";
import { Navbar, Topbar, TasksNav, Details } from "./index";
import { Grid } from "./layout-styles";

function Layout() {
  return (
    <Grid>
      <Topbar />
      <Navbar />
      <TasksNav />
      <Details />
    </Grid>
  );
}

export default Layout;
