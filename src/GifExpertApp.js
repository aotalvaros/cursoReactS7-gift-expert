import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  
    const [categories, setcategories] = useState([
    "Mad Max",
  ]);

  //Se crea otro componente que recibira categories como argumento "GifGrid.js"

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={setcategories} />
      <hr />

      <ol>
        {/* Se utilizara una expresion que recorra cada uno de los elementos del arreglo*/}
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ol>
    </>
  );
};
