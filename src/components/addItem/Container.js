import React from "react";

function Container(props) {
  return (
    <div className="flex max-w-lg shadow border-b m-auto my-5">
      <div className="px-4 py-4 m-auto">{props.children}</div>
    </div>
  );
}

export default Container;
