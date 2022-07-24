import { Layout, Login } from "./components/index";
import { StateContext, useStateContext } from "./context/StateContext";
import GlobalStyles from "./styles/globals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <StateContext>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/projects" element={<Layout />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </StateContext>
    </>
  );
}

export default App;
