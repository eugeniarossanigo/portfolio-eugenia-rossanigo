import MenuLink from './MenuLink'

const linkItems = [
  { href: 'home', name: 'Home' },
  { href: 'projects', name: 'Projects' },
  { href: 'experience', name: 'Experience' },
  { href: 'about', name: 'About me' }
]

export default function Navbar({ handleMode, mode }) {
  const tagName = "<ER />"

  return (
    <header id='home' className='bg-insideBg sticky top-0 visible z-20 w-full h-[5vh] flex justify-between items-center shadow-[0_20px_40px_-20px_rgba(166,171,177,1)]'>
      <h2 className='text-[14px] sm:text-xl'>{tagName}</h2>
      <section className='flex items-center gap-3 sm:gap-5'>
        <nav className='flex text-[11px] sm:text-sm lg:text-base gap-1 sm:gap-5'>
          { linkItems.map((_, index) => <MenuLink key={index} item={_} />) }
        </nav>
        <button onClick={handleMode} className='flex items-center w-[44px] h-[22px] shadow shadow-darkGray rounded-xl cursor-pointer'>
          <div className={`w-[16px] h-[16px] shadow shadow-darkGray rounded-full mx-1 transform ${mode !== 'dark' && 'translate-x-5'}`}></div>
        </button>
      </section>
    </header>
  )
}
