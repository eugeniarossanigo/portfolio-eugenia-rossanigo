export default function ArticleContainer({ children }) {
  return (
    <article className='w-[95%] sm:w-[85%] px-10 text-sm pb-2'>
      {children}
    </article>
  )
}
