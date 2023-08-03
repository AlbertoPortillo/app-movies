import React, { useEffect } from 'react'
import { movieBox, generoItem } from '../../../types/movietypes'
import RatingItem from './RatingItem'
import GenerosText from './GenerosText'

export default function MovieItem({ original_title, poster_path, overview, vote_average, generos, release_date, genre_ids }:movieBox) {
    const [generosState, setGeneros] = React.useState([''])
    
    useEffect(() => {
      settingGeneros(generos)
    }, [])
    

    function getRating(__rating: number):Array<{id:string, value:boolean}>{
        var starsNumber = new Array(5);
        var listcalificationReturned:Array<{id:string, value:boolean}> = [];       
        for(let [index]  of starsNumber.entries()){
            if(index+1 <= __rating/2){
                listcalificationReturned.push({id:`estrella${index}` ,value: true})
            }else{
                listcalificationReturned.push({id:`estrella${index}` ,value: false})
            }
        }
        return listcalificationReturned;
    } 

    function settingYear(value:string){
        const __fecha = new Date(value);
        return __fecha.getFullYear();
    }

    function settingGeneros(generos: generoItem[] ){
        var listaGeneros : string[] = [];
        genre_ids.forEach((genero) => {
            const __finder = generos.find((item) => item.id == genero )
            listaGeneros.push(__finder?.name || "no hay genero")
        	
        })
        setGeneros(listaGeneros)
        console.log(JSON.stringify(listaGeneros))
    }
    
    return (
    <div className='movie-item-body' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})` }}>
        <div className='movie-item-texts'>
            <p className='movie-item-tittle'>{original_title}</p>
            <div className='movie-item-header'>
                <p className='movie-item-header-years'>{settingYear(release_date)}</p>
                <p>&nbsp;&nbsp;.&nbsp;&nbsp;</p>
                <GenerosText generos={generosState} />
            </div>
            <p className='movie-item-description'>{overview}</p>
            <RatingItem rating={getRating(vote_average)} />
        </div>
    </div>
  )
}
