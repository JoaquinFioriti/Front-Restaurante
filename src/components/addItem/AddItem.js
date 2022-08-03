import React, { useState } from "react";
import Button from "./button/Button";
import ButtonContainer from "./button/ButtonContainer";
import Container from "./Container";
import Field from "./Field";
import Tittle from "./Tittle";
import { useNavigate } from "react-router-dom";

function AddItem(props) {
  const { tittle, fields, service, onSavePath } = props;

  const [item, setItem] = useState(fields);
  const navigate = useNavigate();

  const handleChange = (e, item, setter) => {
    const value = e.target.value;
    setter({ ...item, [e.target.name]: value });
  };

  const reset = (e, obj) => {
    const { item } = obj;
    e.preventDefault();
    Object.keys(item).forEach((key) => {
      setItem((item[key] = ""));
    });
    setItem((item["id"] = 0));
  };

  const saveItem = (e, obj) => {
    const { item, service } = obj;
    e.preventDefault();
    console.log(item);
    service
      .saveItem(item)
      .then((response) => {
        console.log(response);
        navigate(onSavePath);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Tittle tittle={tittle} />
      <Field
        fields={Object.keys(fields)}
        item={item}
        setter={setItem}
        handleChange={handleChange}
      />
      <ButtonContainer>
        <Button
          name="Guardar"
          bgColor="bg-green-400"
          bgColorHover="hover:bg-green-700"
          item={item}
          onClick={saveItem}
          service={service}
        />
        <Button
          name="Limpiar"
          bgColor="bg-red-400"
          bgColorHover="hover:bg-red-700"
          onClick={reset}
        />
      </ButtonContainer>
    </Container>
  );
}

export default AddItem;
