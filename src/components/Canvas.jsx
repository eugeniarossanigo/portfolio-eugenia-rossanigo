export default function Canvas({ size }) {
  
  return (
    <section className='absolute top-4 left-1 flex flex-col gap-2'>
      <canvas className={`bg-[#2A4858] w-${size} h-${size} rounded-full`}></canvas>
      <canvas className={`bg-[#205072] rounded-full w-${size} h-${size}`}></canvas>
      <canvas className={`bg-green rounded-full w-${size} h-${size}`}></canvas>
      <canvas className={`bg-[#56C596] rounded-full w-${size} h-${size}`}></canvas>
      <canvas className={`bg-[#7BE495] rounded-full w-${size} h-${size}`}></canvas>
      <canvas className={`bg-[#CFF4D2] rounded-full w-${size} h-${size}`}></canvas>
    </section>
  )
}
