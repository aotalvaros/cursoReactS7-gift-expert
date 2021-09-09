

export const getGifs = async( category )=>{
    //encodeURI(): remplaza los espacios por porcentaje o alguna otra cosa para que pueda ser valida la busqueda

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category) }&limit=5&api_key=4YUwstEQP72nAiRk1akZMJhHJp5H2Pme`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } )

    return gifs;
}