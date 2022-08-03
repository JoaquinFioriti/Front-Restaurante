import React from "react";

function Button(props) {
  const { name, bgColor, bgColorHover, item, onClick, service } = props;
  return (
    <button
      onClick={(e) => onClick(e, { item, service })}
      className={`py-2 px-6 rounded text-white font-semibold ${bgColor} ${bgColorHover}`}
    >
      {name}
    </button>
  );
}

export default Button;
