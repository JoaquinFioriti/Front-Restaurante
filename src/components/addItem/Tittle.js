import React from "react";

function Tittle(props) {
  const { tittle } = props;
  return (
    <div className="m-auto text-2xl text-center">
      <h1>{tittle}</h1>
    </div>
  );
}

export default Tittle;
