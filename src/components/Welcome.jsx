import Canvas from './Canvas';
import { SiGithub } from 'react-icons/si'
import { BiLogoLinkedin } from 'react-icons/bi'

export default function Welcome() {

  return (
    <section className='w-full relative h-[95vh] flex flex-col sm:flex-row justify-center items-center gap-4'>
      <img className='w-40 sm:w-52 border border-lightGray rounded-full p-2' src="/cv-pic.jpg" alt="portfolio-pic" />
      <div className='flex flex-col items-center sm:items-start gap-2'>
        <h1 className='text-[2.5rem] text-center sm:text-left leading-none sm:text-5xl font-extrabold text-strongGray'><span className='text-green'>Eugenia </span>Rossanigo</h1>
        <h2 className='text-2xl sm:text-3xl font-semibold'>Full-Stack Developer</h2>
        <nav className='flex gap-2'>
          <a href='https://www.linkedin.com/in/eugenia-rossanigo/' target='_blank' rel='noopener noreferrer'>
            <BiLogoLinkedin className='bg-green text-insideBg w-[34px] h-[34px] rounded-full p-1 hover:scale-110 hover:bg-[#0a66c2]' />
          </a>
          <a href='https://github.com/eugeniarossanigo' target='_blank' rel='noopener noreferrer'>
            <SiGithub className='text-green w-[34px] h-[34px] hover:scale-110 hover:text-colorChanged' />
          </a>
        </nav>
      </div>
      <Canvas/>
    </section>
  )
}
