import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = ()=>{

    //creamos una lista de categorias 
    //const categories =['Mad Max','Jhon Wick','Dark'];

    const [categories, setcategories] = useState(
        ['Mad Max','Jhon Wick','Dark']);

        //Se utilizo en un boton
    // const handleAdd=()=>{
    //     setcategories(cats=>[...cats,'Mortal Kombat'])
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr />
   
            <ol>
                {/* Se utilizara una expresion que recorra cada uno de los elementos del arreglo*/}
                {
                    categories.map(category=>{
                        return <li key={ category }> { category }</li>
                    })
                }
            </ol>
        </>
    )
}