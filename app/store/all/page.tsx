import { getData } from '@/api/getData'
import Products from '@/components/Products'
import React from 'react'



const All= async () => {
  const products = await getData('https://fakestoreapi.com/products')

  return (
    <main className='min-h-[calc(100vh-64px)] flex flex-col'>
    <h1 className='text-center text-2xl mt-2'>All Products</h1>
    <div
      className=' w-full  flex flex-wrap justify-center items-center py-4  gap-4'
    >
      <Products products={products} />
  
    </div>
    </main>
  )
}

export default All
