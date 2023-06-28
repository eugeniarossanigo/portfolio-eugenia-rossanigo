import { projects as data } from '../data/projects'
import Card from './Card'
import Canvas from './Canvas';

export default function ProjectContainer() {
  return (
    <section id='projects' className='w-full relative flex flex-col justify-center items-center my-10 py-4 gap-4'>
      {data.map((item) => <Card key={item.id} task={item}>
        <header>
          <p className='text-[10px]'>{item.date}</p>
          <h3 className='text-green font-extrabold'>{item.title}</h3>
        </header>
        <p className='text-sm'>{item.description}</p>
        <nav className='flex items-center gap-2'>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img className='w-[20px]' src='/github.png' alt='github' />
          </a>
          <a href='http://' target='_blank' rel='noopener noreferrer'>
            <img className='w-[24px]' src='/link.png' alt='link' />
          </a>
        </nav>
      </Card>)}
      <Canvas size='7'/>
    </section>
  )
}
