import Canvas from './Canvas';

export default function Welcome() {

  return (
    <section className='w-full relative h-[95vh] flex flex-col sm:flex-row justify-center items-center gap-4'>
      <img className='w-40 sm:w-52 border border-lightGray rounded-full p-2' src="/cv-pic.jpg" alt="portfolio-pic" />
      <div className='flex flex-col items-center sm:items-start gap-2'>
        <h1 className='text-[2.5rem] text-center sm:text-left leading-none sm:text-5xl font-extrabold text-strongGray'><span className='text-green'>Eugenia </span>Rossanigo</h1>
        <h2 className='text-2xl sm:text-3xl font-semibold'>Full Stack Developer</h2>
        <nav className='flex gap-2'>
          <a href='https://www.linkedin.com/in/eugenia-rossanigo/' target='_blank' rel='noopener noreferrer'>
            <img className='w-[32px]' src='/linkedin-green.png' alt='linkedin' />
          </a>
          <a href='https://github.com/eugeniarossanigo' target='_blank' rel='noopener noreferrer'>
            <img className='w-[32px]' src='/github-green.png' alt='github' />
          </a>
        </nav>
      </div>
      <Canvas/>
    </section>
  )
}
