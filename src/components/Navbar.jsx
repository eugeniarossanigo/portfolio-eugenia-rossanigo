export default function Navbar() {
  const tagName = "<ER />"
  return (
    <header id='home' className='w-full h-[5vh] flex justify-between items-center border-light-grey border-b'>
      <h2 className='text-xl'>{tagName}</h2>
      <nav className='flex gap-5 text-sm'>
        <a href="#home">Inicio</a>
        <a href="#projects">Proyectos</a>
        <a href="#work">Trabajo</a>
        <a href="#about">Sobre mí</a>
      </nav>
    </header>
  )
}
