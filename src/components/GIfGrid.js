import React,{ useState, useEffect } from 'react' //useEffect: me permite ejecutar sierto codigo de una manera condicional
import { getGifs } from '../helpers/getGifs';
import { GIfGridItem } from './GIfGridItem';

export const GIfGrid = ({ category }) => {
    // se recibe la categoria(category) y se va hacer peticion HTTP

    const [images, setimages] = useState([]);

    useEffect(()=>{ // se ejecuta esta instruccion cuando el componente es renderizado por primera vez
        getGifs(category)
            .then( setimages );
    },[ category  ])


    return (
        <>
            <h3>{ category }</h3>
            <div className='card-grid'>
            
                {
                images.map(img=>(
                        <GIfGridItem 
                            key={img.id}
                            {...img}/>
                    ))
                }
                
            </div>
        </>
    )
}
