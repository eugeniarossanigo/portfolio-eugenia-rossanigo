import Canvas from './Canvas';

export default function Container({ link, title, children }) {
  return (
    <section id={link} className='w-full relative flex justify-center flex-wrap mb-20 pt-20 gap-7'>
      { children }
      <Canvas title={title}/>
    </section>
  )
}
