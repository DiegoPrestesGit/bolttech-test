import React from "react";
import { Navbar, Topbar, TasksNav } from "./index";
import { Grid } from "./layout-styles";

function Layout() {
  return (
    <Grid>
      <Topbar />
      <Navbar />
      <TasksNav />
    </Grid>
  );
}

export default Layout;
