"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
export default function NavbarItem({title, param}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');

  return (
    <div>
        <Link href={`/?genre=${param}`} className={`text-xl font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-600 dark:decoration-[#7ED958] rounded-lg' : ''}  dark:hover:text-[#7ED958] hover:text-amber-600 relative pb-2 dark:after:bg-[#7ED958] after:bg-amber-600  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`}>
            {title}
        </Link>
    </div>
  )
}
