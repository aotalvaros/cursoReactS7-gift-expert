import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setcategories }) => {
    
  //para saber lo que la persona esta escribiendo se ncesita tener un estado en el input
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //manejamos un enter en el input
  const handleSubmit = (e) => {
    e.preventDefault();

    //una validacion para que no sea vacio
    if (inputValue.trim().length > 2) {
      setcategories((cats) => [...cats, inputValue]);
      setInputValue("");
    }

    //validamos que cuando halla un nuevo componente en la lista haga la peticion HTTP
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.prototypes = {
  setcategories: PropTypes.func.isRequired,
};
