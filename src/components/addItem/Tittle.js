import React from "react";

function Tittle(props) {
  const { tittle } = props;
  return (
    <div className="m-auto text-2xl">
      <h1>{tittle}</h1>
    </div>
  );
}

export default Tittle;
