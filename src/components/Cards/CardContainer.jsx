export default function CardContainer({ children }) {
  return (
    <article className='box-card-container w-[18rem] sm:w-[22rem] lg:w-[24rem] xl:w-[26rem] border border-[#329d9b73] rounded-2xl flex flex-col z-10 p-4 gap-2'>
      { children }
    </article>
  )
}
