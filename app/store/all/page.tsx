import { getData } from '@/api/getData'
import Image from 'next/image'
import React from 'react'

type Product = {
  id:number
  image:string
  title:string
  price:number
}

const All = async () => {
  const products = await getData('https://fakestoreapi.com/products')

  return (
    <div
      className='min-h-[calc(100vh-64px)] w-full  flex flex-wrap justify-center items-center py-4  gap-4'
    >
      {products.map((product: Product) => (
        <>
          <div key={product.id} className=' w-[300px] h-[360px] bg-base-100 shadow-2xl p-4 flex flex-col justify-between rounded-lg border border-gray-300'>
            
              <Image
                src={product.image}
                alt={product.title}
                width={170}
                height={220}
                style={{width:'170px',height:'220px',objectFit:'cover'}}
              />
            
            <div className='flex flex-col '>
              <p className=' text-sm'>{(product.title).slice(0, 20)}</p>
              <p className='text-xl'>${product.price}</p>
              <div className=' self-end'>
                <button className='btn btn-primary'>Buy Now</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default All
