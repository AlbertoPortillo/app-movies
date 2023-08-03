export interface movieItem {
    original_title: string
    poster_path: string
    release_date: string
    vote_average: number
    overview: string
    genre_ids: Array<number>
    id: number
}
export interface movieBox {
    original_title: string
    poster_path: string
    release_date: string
    vote_average: number
    overview: string
    genre_ids: Array<number>
    key: number
    generos: generoItem[]

}
export interface movieList {
    movies: Array<movieItem>
    pageNow: number
    changePage: (value: number) => void
    maxpages: number
    generos: generoItem[]
}
export interface ratingItem{
    rating: Array<{id:string, value:boolean}>
}
export interface categoryListItem{
    name:string
    value: number
}
export interface categoryItem{
    categories: Array<categoryListItem>
    onClick :(value: number) => void
    selected: number
}
export interface paginationclass{
    page: number,
    onclick: (value: number) => void
    pagestotal: number
}
export interface generoItem{
    id: number
    name:string
}
