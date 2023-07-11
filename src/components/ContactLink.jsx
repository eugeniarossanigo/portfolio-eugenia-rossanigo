export default function ContactLink ({ item }) {
  return (
    <li className='flex gap-2 items-center hover:text-green hover:underline'>
      <item.icon className='w-[1rem] h-[1rem] text-lightGray' />
      <a href={item.href} target='_blank' rel='noopener noreferrer'>{item.text}</a>
    </li>
  )
}