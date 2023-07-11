const colors = ['[#2A4858]', '[#205072]', 'green', '[#56C596]', '[#7BE495]', '[#CFF4D2]']

export default function Canvas({ title }) {
  
  return (
    <section className='absolute top-3 left-4 flex flex-col'>
      {
        title && <h2 className='text-2xl font-bold pb-8'>{title}</h2>
      }
      <div className='flex flex-col gap-2'>
        {colors.map((color, index) => (
          <div key={index} className={`bg-${color} w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7 rounded-full`}></div>
        ))}
      </div>
    </section>
  )
}
