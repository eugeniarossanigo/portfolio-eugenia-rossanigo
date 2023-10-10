import { HiLink } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

export default function CardProject({ item}) {
  return (
    <>
      <section className='flex flex-col gap-3 pb-3'>
        <header>
          <p className='text-[10px]'>{item.date}</p>
          <h3 className='text-base text-green font-extrabold'>{item.title}</h3>
        </header>
        <p className='min-h-[3rem] text-sm'>{item.description}</p>
        <ul className='text-[10px] xs flex flex-wrap gap-2'>Techs: 
          { item.techs.map((_, index) => (
            <li key={index} className='hover:scale-105 gap-2'>
                <_ className='w-[1rem] h-[1rem] opacity-70 hover:opacity-100 text-[#297a79]' />
            </li>
          ))
          }
        </ul>
        <nav className='flex items-center gap-2'>
          <a href={item.gitFront} target='_blank' rel='noopener noreferrer'>
            <SiGithub className='text-green w-[22px] h-[22px] hover:scale-110 hover:text-colorChanged' />
          </a>
          { item.gitBack &&
            <a href={item.gitBack} target='_blank' rel='noopener noreferrer'>
              <SiGithub className='text-lightGray w-[22px] h-[22px] hover:scale-110 hover:text-colorChanged' />
            </a>
          }
          <a href={item.link} target='_blank' rel='noopener noreferrer'>
            <HiLink className='bg-darkGray text-insideBg w-[24px] h-[24px] rounded-full p-1 hover:scale-110 hover:bg-colorChanged' />
          </a>
        </nav>
      </section>
      <img className='h-[14rem] object-cover rounded-md' src={item.image} alt='project-img' />
    </>
  )
}
