import Canvas from './Canvas';

export default function Welcome() {
  return (
    <section className='w-full relative h-[95vh] flex justify-center items-center py-10 gap-4'>
      <img className='w-52 border border-light-grey rounded-full p-2' src="/cv-pic.jpg" alt="portfolio-pic" />
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-extrabold'><span className='text-green'>E</span>ugenia <span className='text-green'>R</span>ossanigo</h1>
        <h2 className='text-2xl font-semibold'>Full Stack developer</h2>
        <nav className='flex gap-2'>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img className='w-[32px]' src='/linkedin.png' alt='linkedin' />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img className='w-[32px]' src='/github.png' alt='github' />
          </a>
        </nav>
      </div>
      <Canvas size='7'/>
    </section>
  )
}
