'use client'
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';


export default function () {
    const {theme, setTheme, systemTheme} = useTheme();
    const[mounted, setMounted] = useState(false);
    const currTheme = theme === 'system' ? systemTheme : theme;
    useEffect(()=> setMounted(true), []);
  return (
    <div>
        {mounted && (currTheme === 'dark' ? 
        <MdLightMode onClick={()=> setTheme('light')} className='text-4xl cursor-pointer hover:text-[#7ED958] ' /> : <MdDarkMode  onClick={()=> setTheme('dark')} className='text-4xl cursor-pointer hover:text-amber-500 '/>)}
    
    </div>
  )
}
