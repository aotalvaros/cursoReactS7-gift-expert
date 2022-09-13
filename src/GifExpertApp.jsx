import React, { useState } from "react";
import { AddCategory, GIfGrid } from "./components";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(["Matrix"]);

  const onAddCategory = ( newCategory ) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]);
}

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ (value) => onAddCategory(value) }
      />
      <hr />
      <ol>
        {
          categories.map((category) =>( 
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
