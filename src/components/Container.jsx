import Canvas from './Canvas';

export default function Container({ link, title, size, children }) {
  return (
    <section id={link} className='w-full relative flex flex-col justify-center items-center mb-20 pt-20 gap-4'>
      { children }
      <Canvas title={title}/>
    </section>
  )
}
