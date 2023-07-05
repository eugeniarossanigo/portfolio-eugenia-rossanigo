export default function MenuLink({ item }) {
  return (
    <a href={`#${item.href}`} className='hover:text-strongGrey'>{item.name}</a>
  )
}
