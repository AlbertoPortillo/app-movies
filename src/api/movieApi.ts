import { accessTokenMovieDB } from "../config/enviroment";
import { generoItem } from "../types/movietypes";
import axios from 'axios';
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 3000,
    headers: {
        accept: 'application/json', 
        Authorization: `Bearer ${accessTokenMovieDB}`
    }
})

export async function getMovieGuestSession(){
    try{
        const __guest = await api.get("/authentication/guest_session/new")
        if(__guest.status !== 200) throw Error();
        return __guest.data;
    }catch(error){
        console.log("🚀 ~ file: movieApi.ts:18 ~ getMovieGuestSession ~ error:", error)
    }
} 

export async function getMovieNowPlaying(__page:number){
    const movies = await api.get("/movie/now_playing",
    {
        params: {
            page: __page
        }
    })
    return movies.data;
}

export async function getMoviePopular(__page:number){
    const movies = await api.get("/movie/popular",
    {
        params: {
            page: __page
        }
    })
    return movies.data;
}
export async function getMovieTopRated(__page:number){
    const movies = await api.get("/movie/top_rated",
    {
        params: {
            page: __page
        }
    })
    return movies.data;
}
export async function getMovieUpcoming(__page:number){
    const movies = await api.get("/movie/upcoming",
    {
        params: {
            page: __page
        }
    })
    return movies.data;
}

export async function getGeneros(){
   const generos = await api.get("/genre/movie/list")
   return generos?.data?.genres;
}