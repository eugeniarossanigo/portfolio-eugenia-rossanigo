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
    <Container link='about' title='About me'>
      <ArticleContainer>
        <section className='flex flex-col gap-2'>
          <p>Junior developer, working in the IT environment since 2014, currently training in new technologies and working freelance especially in front-end with Javascript and React.js, with knowledge in back-end and B2 level (upper intermediate) in English.</p>
          <p>Methodical, organized and focused on problem solving.</p>
          <p>It's my goal to continue growing in this field to develop my full potential, skills and bring my knowledge and enthusiasm to new projects.</p>
        </section>
        <nav className='flex justify-start gap-5 pt-5 pb-2'>
          <a className='w-[110px] bg-green hover:bg-[#2A4858] hover:scale-105 text-sm text-white font-bold text-center rounded-md pt-2' href='https://drive.google.com/file/d/1w2j4l4d61udxHgsQboVDn32ZDQ_kcSH7/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>CV Spanish</a>
          <a className='w-[110px] bg-[#56C596] hover:bg-[#2A4858] hover:scale-105 text-sm text-white font-bold text-center rounded-md py-2' href='https://drive.google.com/file/d/19svx4-iiRL-bXnlNEF8XRl-9f6z9-1DO/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>CV English</a>
        </nav>
      </ArticleContainer>
      <ArticleContainer>
        <h3 className='text-base text-green font-extrabold py-2'>Contact data</h3>
        <ul className='flex flex-col gap-2'>
          { data.map((_, index) => <ContactLink key={index} item={_} />) }
        </ul>
      </ArticleContainer>
      <ArticleContainer>
        <h3 className='text-base text-green font-extrabold py-3'>Technologies</h3>
        <ul className='flex flex-wrap gap-3'>
          { techs.map((_, index) => (
            <a key={index} href={`https://www.google.com/search?q=${_.name}`} target='_blank' rel='noopener noreferrer'>
              <li onMouseOver={e => handleMouseOver(_, e)} onMouseOut={e => handleMouseOut(_, e)} className='hover:scale-105 flex items-center text-sm gap-2 border-strongGray border rounded-md p-[6px] cursor-pointer'>
                { _.src ?
                  <img src={_.hover} className='w-[1rem] opacity-80' alt="icon" />
                  :
                  <_.icon className={`w-[1rem] h-[1rem] opacity-80 text-green`} />
                }
                {_.name}
              </li>
            </a>  
          ))
          }
        </ul>
      </ArticleContainer>
    </Container>
  )
}
