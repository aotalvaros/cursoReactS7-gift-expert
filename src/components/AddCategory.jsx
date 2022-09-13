import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
    
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({target}) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return
    
    setInputValue("");   
    onNewCategory(inputValue.trim()); //inserte primero el resultado de la busqueda y luego las que ya estan 

  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Buscar Gif"
        value={inputValue} 
        onChange={handleInputChange}
        />
    </form>
  );
};

AddCategory.prototypes = {
  setcategories: PropTypes.func.isRequired,
};
