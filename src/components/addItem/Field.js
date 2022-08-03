import React, { useState } from "react";

function Field(props) {
  const { fields, item, handleChange, setter } = props;

  const fieldsNoId = fields.filter((field) => field !== "id");
  

  const listFields = fieldsNoId.map((field, index) => (
    <div key={index} className="items-center justify-center h-14 w-full my-4">
      <label className="block text-gray-600 font-normal text-sm">{field}</label>
      <input
        name={field}
        value={item[field]}
        onChange={(e) => handleChange(e, item, setter)}
        type="text"
        className="h-10 w-full mt-2 border px-2 py-2"
      ></input>
    </div>
  ));

  return <div>{listFields}</div>;
}

export default Field;
