import React from "react";

function Title(props) {
  const { title } = props;
  return (
    <div className="text-center">
      <h1 className="text-center h-10 font-medium leading-tight text-5xl mt-10 mb-11 ">
        {title}
      </h1>
    </div>
  );
}

export default Title;
