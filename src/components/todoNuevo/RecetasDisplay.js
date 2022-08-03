import React, { useEffect, useState } from "react";
import { RecetarioService } from "../../services/services";
import ShowItems from "./ShowItems";

function RecetariosDisplay({ recetaId, showIngredientes }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const service = new RecetarioService();
        const response = await service.getSubItemFromSelectedItem(recetaId);
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [recetaId]);

  let fields = [];
  try {
    fields = Object.keys(items[0]).filter((field) => field !== "id");
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      {!loading && <ShowItems items={items} showSubItems={showIngredientes} />}
    </>
  );
}

export default RecetariosDisplay;
