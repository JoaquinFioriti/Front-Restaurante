import React, { useEffect, useState } from "react";
import Select from "react-select";
import Button from "../addItem/button/Button";
import ButtonContainer from "../addItem/button/ButtonContainer";
import Container from "../addItem/Container";
import Tittle from "../addItem/Tittle";
import { IngredienteService, RecetaService } from "../../services/services";
import { useNavigate } from "react-router-dom";

function AddReceta() {
  const navigate = useNavigate();
  const [ingredientes, setIngredientes] = useState([]);
  const [ingredientesSelected, setIngredientesSelected] = useState([]);
  const [receta, setReceta] = useState({
    id: 0,
    nombre: "",
    puntaje: 0,
    ingredientes: [],
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setReceta({ ...receta, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await new IngredienteService().getItems();
      console.log(response.data);
      setIngredientes(response.data);
    };
    fetchData();
  }, []);

  ingredientes.map((ingrediente) => {
    ingrediente["value"] = ingrediente["nombre"];
    ingrediente["label"] = ingrediente["nombre"];
  });

  const selectedIngredientes = (e) => {
    let ingredientesFinal = [];
    setIngredientesSelected(e);
    ingredientesSelected.map((ingrediente) => {
      const { id, nombre, grupo, unidad, cantidad, calorias } = ingrediente;
      ingredientesFinal.push({ id, nombre, grupo, unidad, cantidad, calorias });
    });
    setReceta({ ...receta, ["ingredientes"]: ingredientesFinal });
  };

  const saveReceta = () => {
    console.log(receta);
    const service = new RecetaService();
    try {
      service.saveItem(receta);
    } catch (error) {
      console.log(error);
    }
    navigate("/Front-Restaurante");
  };

  return (
    <>
      <Container>
        <Tittle tittle={"Agregar nueva receta"} />
        <div className="my-3 text-center">
          <label className="block text-gray-600 font-normal text-sm">
            Nombre
            <input
              name="nombre"
              value={receta["nombre"]}
              onChange={(e) => handleChange(e)}
              type="text"
              className="h-10 w-full mt-2 border px-2 py-2"
            ></input>
          </label>
        </div>
        <div className="my-3 text-center">
          <label className="text-gray-600 font-normal text-x">
            Seleccione los ingredientes
          </label>
        </div>

        <Select
          closeMenuOnSelect={false}
          isMulti
          options={ingredientes}
          onChange={(e) => {
            selectedIngredientes(e);
          }}
        />
        <ButtonContainer>
          <Button
            name="Guardar"
            bgColor="bg-green-400"
            bgColorHover="hover:bg-green-700"
            onClick={saveReceta}
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

export default AddReceta;
