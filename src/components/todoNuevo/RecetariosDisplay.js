import React, { useEffect, useState } from "react";
import { RecetarioService } from "../../services/services";
import ShowItems from "./ShowItems";

function RecetariosDisplay({ showRecetas }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const service = new RecetarioService();
        const response = await service.getItems();

        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>{!loading && <ShowItems items={items} showSubItems={showRecetas} />}</>
  );
}

export default RecetariosDisplay;
