export default function ContactLink ({ item }) {
  return (
    <li className='flex gap-2 items-center hover:text-green hover:underline'>
      <img className='w-[1rem] h-[1rem]' src={item.src} alt='link-icon' />
      <a href={item.href} target='_blank' rel='noopener noreferrer'>{item.text}</a>
    </li>
  )
}