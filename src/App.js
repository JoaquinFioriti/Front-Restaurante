import "./App.css";
import "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Display from "./components/todoNuevo/Display";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Display />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
