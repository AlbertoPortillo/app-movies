import React from 'react'
import { movieBox } from '../../../types/movietypes'
import RatingItem from './RatingItem'
export default function MovieItem({ original_title, poster_path, overview, vote_average, genre_ids, release_date }:movieBox) {
    
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
    
    return (
    <div className='movie-item-body' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})` }}>
        <div className='movie-item-texts'>
            <p className='movie-item-tittle'>{original_title}</p>
            <div className='movie-item-header'>
                <p>{release_date}</p>
                <p></p>
            </div>
            <p className='movie-item-description'>{overview}</p>
            <RatingItem rating={getRating(vote_average)} />
        </div>
    </div>
  )
}
