import { paginationclass } from '../../../types/movietypes'
import __flecha_atras from '../../../style/imgs/flecha-atras.png'
import __flecha_siguiente from '../../../style/imgs/flecha-despues.png'
export default function PaginationItem({page, onclick, pagestotal}: paginationclass) {
  return (
    <div className='pagination-body'>
      <img src={__flecha_atras} onClick={() => onclick(2)} className={`pagination-flecha-atras ${page == 1 ?"flecha-disabled" :""}`} alt="" />
      <p>
          {page} / {pagestotal}
      </p>
      <img src={__flecha_siguiente} onClick={() => onclick(1)} className={`pagination-flecha-siguiente ${page == pagestotal || page == 500 ?"flecha-disabled" :""}`} alt="" />
    </div>
  )
}
