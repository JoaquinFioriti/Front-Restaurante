import React, { useState } from "react";

function ShowItems({ items, showSubItems }) {
  const [itemSelectedId, setItemSelectedId] = useState(-1);

  const showSubItems_ = (e, id, index) => {
    e.preventDefault();
    setItemSelectedId(index);
    showSubItems(id, items[index]["nombre"]);
  };

  let fields = [];
  try {
    fields = Object.keys(items[0]).filter(
      (field) => field !== "id" && field !== "nombre"
    );
  } catch (error) {
    console.log(error);
  }
  return items.map((item, index) => (
    <div
      key={index}
      className="inline-block px-2 w-1/4   hover:scale-105 duration-150 content-center"
    >
      <div
        className={`rounded-full text-center max-w-full flex-wrap items-center bg-amber-200
             ${itemSelectedId === index && "bg-amber-600"} `}
      >
        <div className="w-full text-center font-semibold">{item["nombre"]}</div>
        {fields.map((field, subIndex) => {
          const fieldName = field.charAt(0).toUpperCase() + field.slice(1);

          if (Array.isArray(item[field])) {
            return (
              <button
                key={subIndex}
                className=" max-w-full w-1/2 inset-1/2 rounded-xl  m-auto text-white font-semibold cursor-pointer bg-amber-500 hover:bg-amber-600 active:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-600"
                onClick={(e) => showSubItems_(e, item.id, index)}
              >
                {`Ver ${fieldName}`}
              </button>
            );
          } else
            return (
              <div key={subIndex} className="w-full text-center">
                {`${fieldName}: ${item[field]}`}
              </div>
            );
        })}
      </div>
    </div>
  ));
}

export default ShowItems;
