import Link from 'next/link'
import React from 'react'

const MobileMenu = () => {
  return (
    <div className=' w-1/2 absolute right-0 top-0 flex flex-col justify-evenly sm:hidden bg-primary z-10  '>
      <Link
        href='/'
        className='btn btn-square btn-ghost text-xl'
      >
       Home
      </Link>
      <Link
        href='/men'
        className='btn btn-square btn-ghost text-xl'
      >
        Men
      </Link>
      <Link
        href='/women'
        className='btn btn-square btn-ghost text-xl'
      >
        Women
      </Link>
      <Link
        href='/all'
        className='btn btn-square btn-ghost text-xl'
      >
        All
      </Link>
    </div>
  )
}

export default MobileMenu