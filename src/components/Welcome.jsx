import Canvas from './Canvas';

export default function Welcome() {

  return (
    <section className='w-full relative h-[95vh] flex justify-center items-center gap-4'>
      <img className='w-40 sm:w-52 border border-lightGrey rounded-full p-2' src="/cv-pic.jpg" alt="portfolio-pic" />
      <div className='flex flex-col gap-2'>
        <h1 className='text-[2.5rem] leading-none sm:text-5xl font-extrabold text-strongGrey'><span className='text-green'>Eugenia </span>Rossanigo</h1>
        <h2 className='text-2xl sm:text-3xl font-semibold'>Full Stack Developer</h2>
        <nav className='flex gap-2'>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img className='w-[32px]' src='/linkedin-green.png' alt='linkedin' />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img className='w-[32px]' src='/github-green.png' alt='github' />
          </a>
        </nav>
      </div>
      <Canvas/>
    </section>
  )
}
