import "./App.css";
import "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Display from "./components/todoNuevo/Display";
import AddIngrediente from "./components/addIngrediente/AddIngrediente";
import AddReceta from "./components/addReceta/AddReceta";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route index element={<Display />}></Route> */}
          <Route path="Front-Restaurante" element={<Display />}></Route>
          <Route path="addIngrediente" element={<AddIngrediente />}></Route>
          <Route path="addReceta" element={<AddReceta />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
