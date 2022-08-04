import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

function Scroll(props) {
  const { id, name, addNewPath } = props;
  const navigate = useNavigate();
  const slideLeft = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft += 500;
  };

  const addItem = (e) => {
    e.preventDefault();
    navigate(addNewPath);
  };

  return (
    <>
      <Title title={name} />
      <div className="text-center m-4">
        <button
          className={` py-2 px-6 rounded text-white font-semibold bg-green-500 hover:bg-green-700`}
          onClick={(e) => addItem(e)}
        >{`Agregar nuevo ${name.split(" ")[0].slice(0, -1)}`}</button>
      </div>
      <div className="flex items-center text-center">
        <MdChevronLeft
          size={40}
          onClick={slideLeft}
          className="hover:scale-150 duration-150"
        />
        <div
          id={id}
          className=" w-full h-full scrollbar-hide  overflow-x-scroll overflow-y-hidden scroll whitespace-nowrap scroll-smooth "
        >
          {props.children}
        </div>
        <MdChevronRight
          size={40}
          onClick={slideRight}
          className="hover:scale-150 duration-150"
        />
      </div>
    </>
  );
}

export default Scroll;
