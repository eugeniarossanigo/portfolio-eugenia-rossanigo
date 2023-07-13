import ContactLink from './ContactLink';
import Container from './Container';
import ArticleContainer from './ArticleContainer';
import { contact as data } from '../data/contact'
import { techs } from '../data/techs'

export default function AboutContainer() {
  const handleMouseOver = (item, e) => {
    const currentTarget = e.currentTarget.children[0]
    if (currentTarget.src) {
      currentTarget.src = item.src
    } else {
      currentTarget.style.color = `#${item.color}`
    }
  }

  const handleMouseOut = (item, e) => {
    const currentTarget = e.currentTarget.children[0]
    if (currentTarget.src) {
      currentTarget.src = item.hover
    } else {
      currentTarget.style.color = '#329d9b'
    }
  }

  return (
    <Container link='about' title='Sobre mí'>
      <ArticleContainer>
        <section className='flex flex-col gap-2'>
          <p>Desarrolladora junior, desenvolviéndome en el ambiente IT desde 2014, actualmente capacitándome en nuevas tecnologías y trabajando en forma freelance especialmente con Javascrit y React.js.</p>
          <p>Responsable, organizada, metódica y enfocada en en la resolución de problemas.</p>
          <p>Es mi objetivo seguir creciendo en este rubro para poder desarrollar todo mi potencial, habilidades y aportar mi conocimiento y entusiasmo a nuevos proyectos.</p>
        </section>
        <nav className='flex justify-start gap-5 pt-5 pb-2'>
          <a className='w-[110px] bg-green hover:bg-[#2A4858] hover:scale-105 text-sm text-white font-bold text-center rounded-md pt-2' href='https://drive.google.com/file/d/1YJ24aPPk92pKglxmuh4uN_Min-nQz2cD/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>CV Español</a>
          <a className='w-[110px] bg-[#56C596] hover:bg-[#2A4858] hover:scale-105 text-sm text-white font-bold text-center rounded-md py-2' href='https://drive.google.com/file/d/1yTWc6o4nuYwBuLr3JZkVIqM29sPo0yQB/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>CV Inglés</a>
        </nav>
      </ArticleContainer>
      <ArticleContainer>
        <h3 className='text-base text-green font-extrabold py-2'>Datos de contacto</h3>
        <ul className='flex flex-col gap-2'>
          { data.map((_, index) => <ContactLink key={index} item={_} />) }
        </ul>
      </ArticleContainer>
      <ArticleContainer>
        <h3 className='text-base text-green font-extrabold py-3'>Tecnologías</h3>
        <ul className='flex flex-wrap gap-3'>
          { techs.map((_, index) => (
            <li key={index} onMouseOver={e => handleMouseOver(_, e)} onMouseOut={e => handleMouseOut(_, e)} className='hover:scale-105 flex items-center text-xs gap-2 border-strongGray border rounded-md p-[6px] cursor-pointer'>
              { _.src ?
                <img src={_.hover} className='w-[1rem] opacity-80' alt="icon" />
                :
                <_.icon className={`w-[1rem] h-[1rem] opacity-80 text-green`} />
              }
              {_.name}
            </li>
          ))
          }
        </ul>
      </ArticleContainer>
    </Container>
  )
}
