'use client'

import { useEffect } from 'react'
import { useCartStore } from '@/state/useCartStore'

import Image from 'next/image'
import Link from 'next/link'
const Cart = () => {
  const { products, removeFromCart } = useCartStore()
  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])
  return (
    <div  className='p-12'>
      {products.map((product) => (
        <div className='flex flex-col gap-4' key={product.id}>
          <div className='flex justify-between items-center'>
            <div className=''>
              <Image
                src={product.image}
                alt={product.title}
                width={60}
                height={60}
                style={{
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover'
                }}
              />
             
            </div>
            <div className=' flex gap-10 items-center '>
                <p className=' text-sm'>{product.title.slice(0, 20)}</p>
                <p className=' text-sm'>{product.count}</p>
                <p className='text-xl'>${product.price}</p>
                <p className='text-xl'>${product.price*product.count}</p>
              </div>
            <div className='flex gap-2'>
              <button
                className='btn btn-ghost'
                onClick={() => removeFromCart(product)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        Total Price{' '}
              {[...products]
                .reduce(
                  (a: number, b: { price: number; count: number }) =>
                    a + b.price * b.count,
                  0
                )
                .toFixed(2)}{' '}
              $
      </div>
    </div>
  )
}

export default Cart