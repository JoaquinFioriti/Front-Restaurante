import React, { useEffect, useState } from "react";
import { RecetaService } from "../../services/services";
import ShowItems from "./ShowItems";

function IngredientesDisplay({ ingredienteId }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const service = new RecetaService();
        const response = await service.getSubItemFromSelectedItem(
          ingredienteId
        );
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [ingredienteId]);

  return <>{!loading && <ShowItems items={items} ShowItems={() => {}} />}</>;
}

export default IngredientesDisplay;
