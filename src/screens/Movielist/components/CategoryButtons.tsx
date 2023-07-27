import React from 'react'
import { categoryItem } from '../../../types/movietypes'
export default function CategoryButtons({onClick, categories, selected}:categoryItem) {
  return (
    <div className='category-body'>
        {
            categories.map(item => 
              <p key={`category${item.value}`} className={`category-item ${selected == item.value ?'selected' :"unselected"}`} onClick={() => onClick(item.value)} >{item.name}</p>
            )
        }
    </div>
  )
}
