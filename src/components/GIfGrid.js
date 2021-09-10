import React from 'react' 
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GIfGridItem} from './GIfGridItem'


export const GIfGrid = ({ category }) => {
    // se recibe la categoria(category) y se va hacer peticion HTTP

    const {data:images,loading} = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p>Cargando...</p> }
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
