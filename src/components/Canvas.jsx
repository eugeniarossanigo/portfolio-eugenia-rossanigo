export default function Canvas({ title }) {
  const size = 'w-4 sm:w-5 md:w-6 lg:w-7 h-4 sm:h-5 md:h-6 lg:h-7 rounded-full'
  
  return (
    <section className='absolute top-3 left-1 md:left-2 lg:left-4 flex flex-col'>
      {
        title && <h2 className='text-2xl font-bold pb-8'>{title}</h2>
      }
      <div className='flex flex-col gap-2'>
        <div className={`bg-[#2A4858] ${size}`}></div>
        <div className={`bg-[#205072] ${size}`}></div>
        <div className={`bg-green ${size}`}></div>
        <div className={`bg-[#56C596] ${size}`}></div>
        <div className={`bg-[#7BE495] ${size}`}></div>
        <div className={`bg-[#CFF4D2] ${size}`}></div>
      </div>
    </section>
  )
}
