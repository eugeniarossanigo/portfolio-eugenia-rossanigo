import ContactLink from './ContactLink';
import Container from './Container';

const linkItems = [
  { href: 'mailto:eugeniarossanigo@gmail.com', src: '/email-gray.png', text: 'eugeniarossanigo@gmail.com' },
  { href: 'tel:+5493415819753', src: '/phone-gray.png', text: '+54 341 5819753' },
  { href: 'https://www.linkedin.com/in/eugenia-rossanigo/', src: '/linkedin-gray.png', text: 'eugenia-rossanigo' },
  { href: 'https://github.com/eugeniarossanigo', src: '/github-gray.png', text: 'eugeniarossanigo' },
  { href: 'https://goo.gl/maps/3uvXX7bPDjY36F3a8', src: '/pin-gray.png', text: 'Rosario, Argentina' },
]

export default function AboutContainer() {
  return (
    <Container link='about' title='Sobre mí' size='5'>
      <article className='w-[85%] px-10 text-sm'>
        <p>Me desenvuelvo en el ambiente IT desde hace un tiempo y estos últimos años decidí capacitarme en nuevas tecnologías porque me gustan los desafíos. Es mi objetivo seguir creciendo en este rubro para poder desarrollar todo mi potencial, habilidades y aportar mi conocimiento y entusiasmo a nuevos proyectos.</p>
        <nav className='flex justify-start gap-5 py-5'>
          <a className='w-[110px] bg-green hover:bg-[#2A4858] hover:scale-105 text-sm text-white font-bold text-center rounded-md py-2' href='#'>CV Español</a>
          <a className='w-[110px] bg-[#56C596] hover:bg-[#2A4858] hover:scale-105 text-sm text-white font-bold text-center rounded-md py-2' href='#'>CV Inglés</a>
        </nav>
      </article>
      <article className='w-[85%] px-10 text-sm'>
        <ul className='flex flex-col gap-3'>
          { linkItems.map((_, index) => <ContactLink key={index} item={_} />) }
        </ul>
      </article>
    </Container>
  )
}
