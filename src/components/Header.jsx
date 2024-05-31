import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Image from 'next/image';
import Logo from "../assets/logo.png";
import darkLogo from "../assets/dark_logo.png";
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto '>
        <div className='flex gap-4'>
            <MenuItem title='home' address='/' Icon ={AiFillHome}/>
            <MenuItem title='about' address='/about' Icon ={BsFillInfoCircleFill}/>
        </div>
        <div className='flex items-center gap-4'>
        <DarkModeSwitch />
        <Link href={'/'}>
        <span><Image src={Logo}  width={150} height={150} alt='logo' className='rounded-lg px-2 py-1 block dark:hidden transition duration-300' /></span>
        <span><Image src={darkLogo}  width={150} height={150} alt='logo' className='rounded-lg px-2 py-1 hidden dark:block transition duration-300 ' /></span>
    </Link>
        </div>
        
   
    </div>
  )
}

export default Header;