import { useState } from 'react'

export default function Navbar() {
  const tagName = "<ER />"
  const [isDarkMode, setDarkMode] = useState(true)

  const handleMode = () => { setDarkMode(!isDarkMode) }

  return (
    <header id='home' className='w-full h-[5vh] flex justify-between items-center border-b'>
      <h2 className='text-xl'>{tagName}</h2>
      <section className='flex items-center gap-5'>
        <nav className='flex gap-5 text-sm'>
          <a href="#home">Inicio</a>
          <a href="#projects">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#about">Sobre mí</a>
        </nav>
        <button onClick={handleMode} className='flex items-center w-[48px] h-[24px] shadow shadow-dark-grey rounded-xl cursor-pointer'>
          { isDarkMode ?
            <div className='w-[18px] h-[18px] shadow shadow-dark-grey rounded-full mx-1'></div>
            :
            <div className='w-[18px] h-[18px] shadow shadow-dark-grey rounded-full mx-1'></div>
          }
        </button>
        {/* <button className='w-[32px]'><img src='/light.png' alt='light' /></button> */}
      </section>
    </header>
  )
}
