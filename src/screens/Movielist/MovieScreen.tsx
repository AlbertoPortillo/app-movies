import React, { useEffect } from 'react';

import '../../style/movie.css';

import { getMovieNowPlaying, getMoviePopular, getMovieTopRated, getMovieUpcoming, getGeneros } from '../../api/movieApi'

import MovieList from './components/MovieList'
import CategoryButtons from './components/CategoryButtons'

export const MovieScreen = () => {
  
  const [pages, setPages] = React.useState(1)
  const [actualPages, setActualPages] = React.useState(1)
  const [catSelected, setCatSelected] = React.useState(1)
  const [movies, setMovies]= React.useState([])
  const [generos, setGeneros] = React.useState([])
  const category = [
    {name: "Now Playing", value: 1},
    {name: "Popular", value: 2},
    {name: "Top Rated", value: 3},
    {name: "Upcoming", value: 4}
  ]

  useEffect(() => {
    settingGeneros()
  }, [])
  
  useEffect(() => {
    getMovies()
  }, [actualPages, catSelected])


  
  

  async function getMovies(){
    if(catSelected == 1){
      const moviesDB = await getMovieNowPlaying(actualPages);
      console.log("🚀 ~ file: MovieScreen.tsx:31 ~ getMovies ~ moviesDB:", moviesDB)
      setPages(moviesDB?.total_pages)
      setMovies(moviesDB?.results)
      return;
    }
    if(catSelected == 2){
      const moviesDB = await getMoviePopular(actualPages)
      console.log("🚀 ~ file: MovieScreen.tsx:38 ~ getMovies ~ moviesDB:", moviesDB)
      setPages(moviesDB?.total_pages)
      setMovies(moviesDB?.results)
      return;
    }
    if(catSelected == 3){
      const moviesDB = await getMovieTopRated(actualPages)
      console.log("🚀 ~ file: MovieScreen.tsx:45 ~ getMovies ~ moviesDB:", moviesDB)
      setPages(moviesDB?.total_pages)
      setMovies(moviesDB?.results)
      return;
    }
    if(catSelected == 4){
      const moviesDB = await getMovieUpcoming(actualPages)
      console.log("🚀 ~ file: MovieScreen.tsx:52 ~ getMovies ~ moviesDB:", moviesDB)
      setPages(moviesDB?.total_pages)
      setMovies(moviesDB?.results)
      return;
    }
  }

  async function settingGeneros(){
    const __generos= await getGeneros()
    return setGeneros(__generos)
  }

  async function selectedCategory(value: number){
    setActualPages(1)
    return setCatSelected(value)
  }

  async function setPagination(value:number){
    if(value == 1){
      if(actualPages == 500)return;
      setActualPages(actualPages + 1)
    }else{
      if(actualPages == 1)return;
      setActualPages(actualPages - 1)
    }
    window.scrollTo(0, 0)
  }

  return (
    <div className='movie-body'>
      <CategoryButtons selected={catSelected} onClick={selectedCategory} categories={category} />
      <div className='movie-header'>
        <p>{category[catSelected-1].name}</p>
      </div>
      <MovieList generos={generos} movies={movies} pageNow={actualPages} maxpages={pages} changePage={setPagination} />
    </div>
  )
}
