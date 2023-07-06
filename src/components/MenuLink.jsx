export default function MenuLink({ item }) {
  return (
    <a href={`#${item.href}`} className='hover:text-green'>{item.name}</a>
  )
}
