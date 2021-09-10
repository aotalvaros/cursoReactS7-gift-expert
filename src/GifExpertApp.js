import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GIfGrid } from "./components/GIfGrid";

export const GifExpertApp = () => {
  
    const [categories, setcategories] = useState([
    "Mad Max",
  ]);

  //Se crea otro componente que recibira categories como argumento "GifGrid.js"

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories={ setcategories } />
      <hr />

      <ol>
        {/* Se utilizara una expresion que recorra cada uno de los elementos del arreglo*/}
        {
        categories.map(category => (
           <GIfGrid //lista de gifs
              key={ category }
              category={ category }
            />
        ))
      }
      </ol>
    </>
  );
};
