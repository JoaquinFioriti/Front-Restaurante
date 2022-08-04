import React from "react";

function Button(props) {
  const { name, bgColor, bgColorHover, item, onClick } = props;
  return (
    <button
      onClick={(e) => onClick(e, { item })}
      className={`py-2 px-6 rounded text-white font-semibold ${bgColor} ${bgColorHover}`}
    >
      {name}
    </button>
  );
}

export default Button;
