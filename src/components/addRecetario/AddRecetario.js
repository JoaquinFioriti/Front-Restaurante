import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { RecetaService, RecetarioService } from "../../services/services";
import Button from "../addItem/button/Button";
import ButtonContainer from "../addItem/button/ButtonContainer";
import Container from "../addItem/Container";
import Tittle from "../addItem/Tittle";

function AddRecetario() {
  const navigate = useNavigate();
  const [recetas, setRecetas] = useState([]);
  const [recetasSelected, setRecetasSelected] = useState([]);
  const [recetario, setRecetario] = useState({
    id: 0,
    nombre: "",
    recetas: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const service = new RecetaService();
        const response = await service.getItems();
        console.log(response.data);
        setRecetas(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  recetas.forEach((receta) => {
    receta["value"] = receta["nombre"];
    receta["label"] = receta["nombre"];
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setRecetario({ ...recetario, [e.target.name]: value });
  };

  const selectedRecetas = (e) => {
    let recetasFinal = [];
    setRecetasSelected(e);
    recetasSelected.forEach((receta) => {
      const { id, nombre, puntaje, ingredientes } = receta;
      recetasFinal.push({ id, nombre, puntaje, ingredientes });
    });
    setRecetario({ ...recetario, ["recetas"]: recetasFinal });
  };

  const saveRecetario = () => {
    console.log(recetario);
    const service = new RecetarioService();
    try {
      service.saveItem(recetario);
    } catch (error) {
      console.log(error);
    }
    navigate("../Front-Restaurante");
  };

  return (
    <>
      <Container>
        <Tittle tittle={"Agregar un nuevo recetario"} />
        <div className="my-3 text-center">
          <label className="block text-gray-600 font-normal text-sm">
            Nombre
            <input
              name="nombre"
              value={recetario["nombre"]}
              onChange={(e) => handleChange(e)}
              type="text"
              className="h-10 w-full mt-2 border px-2 py-2"
            ></input>
          </label>
        </div>
        <div className="my-3 text-center">
          <label className="text-gray-600 font-normal text-x">
            Seleccione las recetas
          </label>
        </div>

        <Select
          closeMenuOnSelect={false}
          isMulti
          options={recetas}
          onChange={(e) => {
            selectedRecetas(e);
          }}
        />
        <ButtonContainer>
          <Button
            name="Guardar"
            bgColor="bg-green-400"
            bgColorHover="hover:bg-green-700"
            onClick={saveRecetario}
          />
          <Button
            name="Limpiar"
            bgColor="bg-red-400"
            bgColorHover="hover:bg-red-700"
          />
        </ButtonContainer>
      </Container>
    </>
  );
}

export default AddRecetario;
