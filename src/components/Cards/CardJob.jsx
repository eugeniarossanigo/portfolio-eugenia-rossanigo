export default function CardJob({ item }) {
  return (
    <>
      <header>
        <h3 className='text-base text-green font-extrabold'>{item.title}</h3>
        <p className='text-xs'>on <span className='font-extrabold italic'>{item.company}</span> — {item.datestart} to {item.datefinish}</p>
      </header>
      <p className='text-sm'>{item.description}</p>
    </>
  )
}
