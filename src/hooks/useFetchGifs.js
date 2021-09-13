import { useState, useEffect } from "react"; //useEffect: me permite ejecutar sierto codigo de una manera condicional
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {// se ejecuta esta instruccion cuando el componente es renderizado por primera vez
    getGifs(category).then((imgs) => {
        setstate({
          data: imgs,
          loading: false,
        });
      
    }).catch(error => console.log(error));
  }, [category]);

  return state;
};
