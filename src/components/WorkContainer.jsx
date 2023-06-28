import { jobs as data } from '../data/jobs'
import Card from './Card'
import Canvas from './Canvas';

export default function WorkContainer() {
  return (
    <section id='work' className='w-full relative flex flex-col justify-center items-center my-10 py-4 gap-4'>
      {data.map((item) => <Card key={item.id} task={item}>
        <header>
          <h3 className='text-green font-extrabold'>{item.title}</h3>
          <p className='text-xs'>en <span className='font-extrabold italic'>{item.company}</span> — {item.datestart} a {item.datefinish}</p>
        </header>
        <p className='text-sm'>{item.description}</p>
      </Card>)}
      <Canvas size='7'/>
    </section>
  )
}
