import Container from './Container';

export default function AboutContainer() {
  return (
    <Container link='about' title='Sobre mí' size='5'>
      <article className='w-[80%] px-10'>
        <p className='text-sm'>Me desenvuelvo en el ambiente IT desde hace un tiempo y estos últimos años decidí capacitarme en nuevas tecnologías porque me gustan los desafíos. Es mi objetivo seguir creciendo en este rubro para poder desarrollar todo mi potencial, habilidades y aportar mi conocimiento y entusiasmo a nuevos proyectos.</p>
        <nav className='flex justify-start gap-5 py-5'>
          <a className='w-[110px] bg-green text-sm text-white font-bold text-center rounded-md py-2' href="#">CV Español</a>
          <a className='w-[110px] bg-[#7BE495] text-sm text-white font-bold text-center rounded-md py-2' href="#">CV Inglés</a>
        </nav>
      </article>
    </Container> 
  )
}