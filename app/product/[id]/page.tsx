import { getData } from '@/api/getData'
import Price from '@/components/Price'
import Image from 'next/image'
import React from 'react'

const Page = async ({ params }: { params: { id: string } }) => {
  const page = await getData(`https://fakestoreapi.com/products/${params.id}`)
  return (
    <div className='min-h-[calc(100vh-64px)] grid grid-cols-2 max-sm:grid-cols-1 gap-4 place-items-center py-4'>
      <div>
        <Image
          src={page.image}
          alt={page.title}
          width={300}
          height={400}
        />
      </div>
      <div className='h-full flex flex-col justify-center gap-2 p-4'>
        <h1 className='text-3xl'>{page.title}</h1>
        <p>Category: 
          {page.category}</p>
        <p>Product description:<br/> {page.description}</p>
        <p>Rating: {page.rating.rate}</p>
        <p>Quantity in stock: {page.rating.count}</p>

        <Price product={page} />
      </div>
    </div>
  )
}

export default Page
