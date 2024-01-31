import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <ul className="menu bg-primary text-white w-56 ">
  <li className="menu-title text-white">Category:</li>
  <li><Link href="/store/men">Men</Link></li>
  <li><Link href="/store/women">Women</Link></li>
  <li><Link href="/store/all">All</Link></li>
  
</ul>
  )
}

export default Menu