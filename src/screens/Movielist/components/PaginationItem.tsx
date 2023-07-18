import React from 'react'

interface paginationclass{
    name: string,
    click: (e: React.MouseEvent<HTMLElement>) => void
}
export default function PaginationItem({name, click}: paginationclass) {
  return (
    <p onClick={click} >
        {name}
    </p>
  )
}
