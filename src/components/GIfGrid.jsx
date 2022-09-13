import React from 'react' 
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GIfGridItem } from './GIfGridItem';

export const GIfGrid = ({ category }) => {

    const { images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 >{ category }</h3>

            { loading && <p className="animate__animated animate__headShake">Cargando...</p> }

            <div className='card-grid'>           
                {
                    images.map(img=>(
                        <GIfGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
                
            </div>
        </>
    )
}
