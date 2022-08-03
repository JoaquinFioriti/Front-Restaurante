import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Scroll(props) {
  const { items, id, services, tittle } = props;

  const [showItems, setShowItems] = useState(true);
  const [subItems, setSubItems] = useState([]);
  const [showSubItemsState, setShowSubItemsState] = useState(false);
  const [itemSelectedId, setItemSelectedId] = useState(-1);

  const slideLeft = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft += 500;
  };

  useEffect(() => {
    setShowItems(true);
    setShowSubItemsState(false);
    setItemSelectedId(-1);
  }, [items]);

  const showSubItems = async (e, id, index) => {
    e.preventDefault();
    try {
      const response = await services[0].getSubItemFromSelectedItem(id);
      console.log(response.data);
      setSubItems(response.data);
      setShowSubItemsState(true);

      setItemSelectedId(index);
    } catch (error) {
      console.log(error);
    }
  };

  const clear = (e) => {
    e.preventDefault();
    setShowSubItemsState(false);
    setShowItems(false);
    setItemSelectedId(-1);
  };

  let fields = [];
  try {
    fields = Object.keys(items[0]).filter((field) => field !== "id");
  } catch (error) {
    console.log(error);
  }

  if (!showItems) return <></>;
  else
    return (
      <>
        <div className=" text-center">
          <h1 className="text-center h-10 font-medium leading-tight text-5xl mt-10 mb-11 ">
            {tittle[0]}
          </h1>
          {id !== 1 && (
            <button
              className="text-center font-medium leading-tight cursor-pointer mt-10 mb-0 bg-lime-300 hover:bg-lime-600 px-5 py-2 rounded-full"
              onClick={(e) => clear(e)}
            >
              Limpiar
            </button>
          )}
        </div>

        <div className="relative flex items-center mt-10">
          <MdChevronLeft
            size={40}
            onClick={slideLeft}
            className="hover:scale-150 duration-150"
          />
          <div
            id={id}
            className=" w-full h-full scrollbar-hide  overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth "
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="inline-block px-2 w-1/4   hover:scale-105 duration-150 content-center"
              >
                <div
                  className={`rounded-full text-center max-w-full flex-wrap items-center bg-amber-200 ${
                    itemSelectedId === index && "bg-amber-600"
                  } `}
                >
                  {fields.map((field, subIndex) => {
                    const fieldName =
                      field.charAt(0).toUpperCase() + field.slice(1);

                    if (Array.isArray(item[field])) {
                      return (
                        <button
                          key={subIndex}
                          className=" max-w-full w-1/3 inset-1/2 rounded-xl  m-auto text-white font-semibold cursor-pointer bg-amber-500 hover:bg-amber-600 active:bg-amber-600 focus:outline-none focus:ring focus:ring-amber-600"
                          onClick={(e) => showSubItems(e, item.id, index)}
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
            ))}
          </div>
          <MdChevronRight
            size={40}
            onClick={slideRight}
            className="hover:scale-150 duration-150"
          />
        </div>
        {showSubItemsState && (
          <div className="text-center">
            <Scroll
              services={services.slice(1)}
              items={subItems}
              id={id + 1}
              tittle={tittle.slice(1)}
            />
          </div>
        )}
      </>
    );
}

export default Scroll;
