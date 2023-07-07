import { HiLink } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

export default function CardProject({ item}) {
  return (
    <>
      <header>
        <p className='text-[10px]'>{item.date}</p>
        <h3 className='text-base text-green font-extrabold'>{item.title}</h3>
      </header>
      <p className='text-sm'>{item.description}</p>
      <nav className='flex items-center gap-2'>
        <a href='http://' target='_blank' rel='noopener noreferrer'>
          <SiGithub className='text-green w-[22px] h-[22px] hover:scale-105 hover:text-colorChanged' />
        </a>
        <a href='http://' target='_blank' rel='noopener noreferrer'>
          <HiLink className='bg-darkGray text-insideBg w-[24px] h-[24px] rounded-full p-1 hover:scale-105 hover:bg-colorChanged' />
        </a>
      </nav>
    </>
  )
}
