import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";

// const grupoValues = new Map();
// grupoValues.set("Carne", 0);
// grupoValues.set("Cereal", 1);
// grupoValues.set("Lacteo", 2);
// grupoValues.set("Legumbre", 3);
// grupoValues.set("Vegetal", 4);
// grupoValues.set("Fruta", 5);

const grupoValues = {
  Carne: 0,
  Cereal: 1,
  Lacteo: 2,
  Legumbre: 3,
  Vegetal: 4,
  Fruta: 5,
};

const unidadesValue = {
  Gramo: 0,
  Unidad: 1,
  "C/N": 2,
  Litro: 3,
  Kilo: 4,
};

function IngredienteFields({ ingrediente, setIngrediente }) {
  const handleChange = (e) => {
    const value = e.target.value;
    setIngrediente({ ...ingrediente, [e.target.name]: value });
  };

  const selectGrupoCheckBox = (e, value) => {
    let checkBox = document.getElementsByName("GrupoCheckBox");
    Array.prototype.forEach.call(checkBox, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    // element.checked = true;
    setIngrediente({ ...ingrediente, ["grupo"]: value });
  };

  const selectUnidadCheckBox = (e, value) => {
    let checkBox = document.getElementsByName("UnidadCheckBox");
    Array.prototype.forEach.call(checkBox, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    // element.checked = true;
    setIngrediente({ ...ingrediente, ["unidad"]: value });
  };

  return (
    <div>
      <div className="items-center justify-center h-14 w-full my-4 ">
        <label className="block text-gray-600 font-normal text-sm">
          Nombre
          <input
            name="nombre"
            value={ingrediente["nombre"]}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-full mt-2 border px-2 py-2"
          ></input>
        </label>
      </div>
      <div className="items-center justify-center h-14 w-full my-4 mt-10">
        <label className="block text-gray-600 font-normal text-sm">
          Calorias
          <input
            name="calorias"
            value={ingrediente["calorias"]}
            onChange={(e) => handleChange(e)}
            type="text"
            className="h-10 w-full mt-2 border px-2 py-2"
          ></input>
        </label>
      </div>
      <div className="flex items-center justify-center h-14 w-full my-4 mt-10">
        Grupo
        {Object.keys(grupoValues).map((grupo, index) => (
          <label
            key={index}
            className="block text-gray-600 font-normal text-sm ml-3"
          >
            {grupo}
            <input
              name="GrupoCheckBox"
              onClick={(e) => selectGrupoCheckBox(e, grupoValues[grupo])}
              type="checkBox"
              className="w-full mt-2 border px-2 py-2"
            ></input>
          </label>
        ))}
      </div>
      <div className="flex items-center  h-14 w-full my-4 mt-10 m-0">
        Unidad
        {Object.keys(unidadesValue).map((unidad, index) => (
          <label
            key={index}
            className="block text-gray-600 font-normal text-sm ml-3"
          >
            {unidad}
            <input
              name="UnidadCheckBox"
              onClick={(e) => selectUnidadCheckBox(e, unidadesValue[unidad])}
              type="checkBox"
              className="w-full mt-2 border px-2 py-2"
            ></input>
          </label>
        ))}
      </div>
    </div>
  );
}

export default IngredienteFields;
