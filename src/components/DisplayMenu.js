import React, { useState, useEffect } from "react";
import Scroll from "./Scroll/Scroll";

function DisplayMenu(props) {
  const { services } = props;
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await services[0].getItems();
        console.log(response.data);
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [services]);

  return (
    !loading && (
      <>
        {!loading && (
          <Scroll
            services={services}
            items={items}
            id={1}
            tittle={["Recetarios", "Recetas", "Ingredientes"]}
          />
        )}
      </>
    )
  );
}

export default DisplayMenu;
