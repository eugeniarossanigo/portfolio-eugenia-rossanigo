import Canvas from './Canvas';
import { useState, useEffect } from 'react'

export default function Welcome() {

  return (
    <section className='w-full relative h-[95vh] flex justify-center items-center gap-4'>
      <img className='w-52 border rounded-full p-2' src="/cv-pic.jpg" alt="portfolio-pic" />
      <div className='flex flex-col gap-2'>
        <h1 className='text-5xl font-extrabold text-strong-grey'><span className='text-green'>E</span>ugenia <span className='text-green'>R</span>ossanigo</h1>
        <h2 className='text-3xl font-semibold'>Full Stack developer</h2>
        <nav className='flex gap-2'>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img className='w-[32px]' src='/linkedin-green.png' alt='linkedin' />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img className='w-[32px]' src='/github-green.png' alt='github' />
          </a>
        </nav>
      </div>
      <Canvas size='5'/>
    </section>
  )
}
