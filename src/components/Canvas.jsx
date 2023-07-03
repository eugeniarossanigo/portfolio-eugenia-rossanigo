export default function Canvas({ size, title }) {
  
  return (
    <section className='absolute top-3 left-3 flex flex-col'>
      {
        title && <h2 className='text-2xl font-bold pb-8'>{title}</h2>
      }
      <div className='flex flex-col gap-2'>
        {/* <div className='bg-[#205072] w-5 h-5 rounded-full'></div> */}
        <div className={`bg-[#2A4858] w-${size} h-${size} rounded-full`}></div>
        <div className={`bg-[#205072] w-${size} h-${size} rounded-full`}></div>
        <div className={`bg-green w-${size} h-${size} rounded-full`}></div>
        <div className={`bg-[#56C596] w-${size} h-${size} rounded-full`}></div>
        <div className={`bg-[#7BE495] w-${size} h-${size} rounded-full`}></div>
        <div className={`bg-[#CFF4D2] w-${size} h-${size} rounded-full`}></div>
      </div>
    </section>
  )
}
