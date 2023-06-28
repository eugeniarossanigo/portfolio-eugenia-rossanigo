export default function Canvas({ size }) {
  
  return (
    <section className='absolute top-4 left-3 flex flex-col gap-2'>
      <div className={`bg-[#2A4858] w-${size} h-${size} rounded-full`}></div>
      <div className={`bg-[#205072] w-${size} h-${size} rounded-full`}></div>
      <div className={`bg-green w-${size} h-${size} rounded-full`}></div>
      <div className={`bg-[#56C596] w-${size} h-${size} rounded-full`}></div>
      <div className={`bg-[#7BE495] w-${size} h-${size} rounded-full`}></div>
      <div className={`bg-[#CFF4D2] w-${size} h-${size} rounded-full`}></div>
    </section>
  )
}
