import { ratingItem } from '../../../types/movietypes'
import __star_img_fill from '../../../style/imgs/star-rellenado.png'
import __star_img_empty from '../../../style/imgs/star-vacio.png'
export default function RatingItem({rating}:ratingItem) {
  return (
    <div>
        {
            rating.map(({id, value}) => {
                return <img key={id} className='movie-item-rating-stars' src={value ?__star_img_fill :__star_img_empty} />
            })
        }
    </div>
  )
}
