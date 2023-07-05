import React from 'react'

export default function CardProject({ item }) {
  return (
    <>
      <header>
        <p className='text-[10px]'>{item.date}</p>
        <h3 className='text-green font-extrabold'>{item.title}</h3>
      </header>
      <p className='text-sm'>{item.description}</p>
      <nav className='flex items-center gap-2'>
        <a href='http://' target='_blank' rel='noopener noreferrer'>
          <img className='w-[20px]' src='/github-green.png' alt='github' />
        </a>
        <a href='http://' target='_blank' rel='noopener noreferrer'>
          <img className='w-[24px]' src='/link.png' alt='link' />
        </a>
      </nav>
    </>
  )
}
