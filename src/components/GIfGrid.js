import React,{ useState, useEffect } from 'react' //useEffect: me permite ejecutar sierto codigo de una manera condicional
import { GIfGridItem } from './GIfGridItem';

export const GIfGrid = ({category}) => {
    // se recibe la categoria(category) y se va hacer peticion HTTP

    const [images, setimages] = useState([]);

    useEffect(()=>{ // se ejecuta esta instruccion cuando el componente es renderizado por primera vez
        getGifs();
    },[])

    const getGifs = async()=>{

        const url = 'https://api.giphy.com/v1/gifs/search?q=Mortal+Kombat+pelicula&limit=5&api_key=4YUwstEQP72nAiRk1akZMJhHJp5H2Pme';
        const resp = await fetch( url );
        const {data} = await resp.json();

        const gifs = data.map( img => {
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        } )

        console.log(gifs);
        setimages(gifs);
    }

    return (
        <div>
            <h3>{ category }</h3>
        
            {
              images.map(img=>(
                    <GIfGridItem 
                        key={img.id}
                        {...img}/>
                ))
             }
            
        </div>
    )
}
