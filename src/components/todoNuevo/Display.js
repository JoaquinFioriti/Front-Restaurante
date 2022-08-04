import React, { useState } from "react";
import Scroll from "./Scroll";
import IngredientesDisplay from "./IngredientesDisplay";
import RecetariosDisplay from "./RecetariosDisplay";
import RecetasDisplay from "./RecetasDisplay";

function Display() {
  const [showRecetasState, setShowRecetasState] = useState(-1);
  const [showIngredientesState, setShowIngredientesState] = useState(-1);
  const [recetarioName, setRecetarioName] = useState("");
  const [recetaName, setRecetaName] = useState("");

  const showRecetas = (recetaId, recetarioName) => {
    setShowIngredientesState(-1);
    setShowRecetasState(recetaId);
    setRecetarioName(recetarioName);
  };

  const showIngredientes = (ingredienteId, recetaName) => {
    setShowIngredientesState(ingredienteId);
    setRecetaName(recetaName);
  };

  return (
    <div>
      <Scroll id={1} name="Recetarios">
        <RecetariosDisplay showRecetas={showRecetas} />
      </Scroll>
      {showRecetasState !== -1 && (
        <Scroll
          id={2}
          name={`Recetas de ${recetarioName}`}
          addNewPath={"addReceta"}
        >
          <RecetasDisplay
            recetaId={showRecetasState}
            showIngredientes={showIngredientes}
          />
        </Scroll>
      )}
      {showIngredientesState !== -1 && (
        <Scroll
          id={2}
          name={`Ingredientes de ${recetaName}`}
          addNewPath={"addIngrediente"}
        >
          <IngredientesDisplay ingredienteId={showIngredientesState} />
        </Scroll>
      )}
    </div>
  );
}

export default Display;
