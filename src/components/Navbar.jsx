export default function Navbar() {
  const tagName = "<ER />"
  return (
    <header id='home' className='w-full h-[5vh] flex justify-between items-center border-light-grey border-b'>
      <h2 className='text-xl'>{tagName}</h2>
      <section className='flex items-center gap-5'>
        <nav className='flex gap-5 text-sm'>
          <a href="#home">Inicio</a>
          <a href="#projects">Proyectos</a>
          <a href="#experience">Experiencia</a>
          <a href="#about">Sobre mí</a>
        </nav>
        <div className='flex items-center w-[48px] h-[24px] shadow shadow-dark-grey rounded-xl'>
          <div className='w-[18px] h-[18px] shadow shadow-dark-grey rounded-full mx-1'></div>
        </div>
        {/* <button className='w-[32px]'><img src='/light.png' alt='light' /></button> */}
      </section>
    </header>
  )
}
