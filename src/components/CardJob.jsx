import React from 'react'

export default function CardJob({ item }) {
  return (
    <>
      <header>
        <h3 className='text-green font-extrabold'>{item.title}</h3>
        <p className='text-xs'>en <span className='font-extrabold italic'>{item.company}</span> — {item.datestart} a {item.datefinish}</p>
      </header>
      <p className='text-sm'>{item.description}</p>
    </>
  )
}
