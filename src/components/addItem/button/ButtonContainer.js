import React from "react";

function ButtonContainer(props) {
  return (
    <div className="text-center items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
      {props.children}
    </div>
  );
}

export default ButtonContainer;
