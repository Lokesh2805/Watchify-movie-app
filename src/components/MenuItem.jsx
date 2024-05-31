
import Link from 'next/link'

 function MenuItem(props) {

   const Icon = props.Icon;
   
  return (
   <Link href={`${props.address}`} className='hover:text-amber-500 dark:hover:text-[#7ED958]'>
   <Icon className="text-2xl sm:hidden "/>
   <p className='uppercase hidden sm:inline text-sm gap-4 font-bold'> {props.title}</p>
  
   </Link>
  )
}
export default MenuItem;