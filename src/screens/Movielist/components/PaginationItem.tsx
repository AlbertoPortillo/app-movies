import React from 'react'

interface paginationclass{
    name: string,
    click: any
}
export default function PaginationItem({name, click}: paginationclass) {
  return (
    <p onClick={click} >
        {name}
    </p>
  )
}
