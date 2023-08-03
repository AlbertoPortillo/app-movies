import { movieList } from '../../../types/movietypes'
import MovieItem from './MovieItem'
import PaginationItem from './PaginationItem'
export default function MovieList({movies, pageNow, changePage, maxpages, generos}: movieList) {
  return (
    <div className='movie-list-list'>
        {movies.map((item) =>
          <MovieItem 
            original_title={item?.original_title}
            poster_path={item?.poster_path}
            release_date={item?.release_date}
            vote_average={item?.vote_average}
            overview={item?.overview}
            genre_ids={item?.genre_ids}
            key={item?.id}
            generos={generos}
          />  
        )}
        <PaginationItem page={pageNow} onclick={changePage} pagestotal={maxpages} />
    </div>
  )
}
