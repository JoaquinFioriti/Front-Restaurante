import React, { useEffect, useState } from "react";
import Button from "../addItem/button/Button";
import ButtonContainer from "../addItem/button/ButtonContainer";
import Container from "../addItem/Container";
import Tittle from "../addItem/Tittle";
import IngredienteFields from "./IngredienteFields";
import { IngredienteService } from "../../services/services";

function AddIngrediente() {
  const [ingrediente, setIngrediente] = useState({
    id: 0,
    nombre: "",
    grupo: "",
    unidad: "",
    calorias: "",
  });

  const saveIngrediente = (e) => {
    e.preventDefault();
    const service = new IngredienteService();
    console.log(ingrediente);
    try {
      service.saveItem(ingrediente);
      console.log("exito");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Tittle tittle={"Agregar nuevo ingrediente"} />
      <IngredienteFields
        ingrediente={ingrediente}
        setIngrediente={setIngrediente}
      />
      <ButtonContainer>
        <Button
          name="Guardar"
          bgColor="bg-green-400"
          bgColorHover="hover:bg-green-700"
          onClick={saveIngrediente}
        />
        <Button
          name="Limpiar"
          bgColor="bg-red-400"
          bgColorHover="hover:bg-red-700"
        />
      </ButtonContainer>
    </Container>
  );
}

export default AddIngrediente;
