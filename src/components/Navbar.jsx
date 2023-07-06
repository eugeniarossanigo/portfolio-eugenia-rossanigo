import MenuLink from './MenuLink'

const linkItems = [
  { href: 'home', name: 'Inicio' },
  { href: 'projects', name: 'Proyectos' },
  { href: 'experience', name: 'Experiencia' },
  { href: 'about', name: 'Sobre mí' }
]

export default function Navbar({ handleMode, mode }) {
  const tagName = "<ER />"

  return (
    <header id='home' className='w-full h-[5vh] flex justify-between items-center shadow-[0_20px_40px_-20px_rgba(166,171,177,1)]'>
      <h2 className='text-base sm:text-xl'>{tagName}</h2>
      <section className='flex items-center gap-3 sm:gap-5'>
        <nav className='flex text-xs sm:text-sm gap-3 sm:gap-5'>
          { linkItems.map((_, index) => <MenuLink key={index} item={_} />) }
        </nav>
        <button onClick={handleMode} className='flex items-center w-[44px] h-[22px] shadow shadow-darkGrey rounded-xl cursor-pointer'>
          <div className={`w-[16px] h-[16px] shadow shadow-darkGrey rounded-full mx-1 transform ${mode !== 'dark' && 'translate-x-5'}`}></div>
        </button>
      </section>
    </header>
  )
}
