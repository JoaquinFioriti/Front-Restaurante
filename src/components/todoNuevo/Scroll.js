import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Title from "./Title";

function Scroll(props) {
  const { id, name } = props;
  const slideLeft = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft += 500;
  };

  return (
    <>
      <Title title={name} />
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
