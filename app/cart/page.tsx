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
    <div className='p-12 max-sm:p-0'>
      <h1 className='text-center text-3xl'>Cart</h1>
      {products.length === 0 ? (
        <div className='text-center'>
          <h2>Your cart is empty</h2>
          <Link className='btn btn-primary mt-2' href={'/store/all'}>Back</Link>
        </div>
      ) : (
        <>
          <div className='overflow-x-auto'>
            <table className='table'>
              {/* head */}
              <thead>
                <tr>
                  <th className='max-sm:hidden'>Image</th>
                  <th>Name</th>
                  <th className='text-center'>Qtn</th>
                  <th className='text-right'>Price </th>
                  <th className='text-right'>All </th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className='max-sm:hidden '>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div>
                            <Image
                              src={product.image}
                              alt={product.title}
                              width={60}
                              height={60}
                              style={{
                                width: '60px',
                                height: '60px',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className='max-w-36 text-wrap'>{product.title}</td>
                    <td className='text-center max-w-12 '>{product.count}</td>
                    <td className='text-right max-w-32 '>
                      {product.price.toFixed(2)}
                    </td>
                    <td className='text-right max-w-32 '>
                      {(product.price * product.count).toFixed(2)}
                    </td>
                    <td className='text-center'>
                      <button
                        className='btn btn-ghost btn-circle'
                        onClick={() => removeFromCart(product)}
                      >
                        ❌
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            w-full
            className='text-right font-semibold pr-[168px]'
          >
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
          <div className='text-right pr-[168px] mt-4 '>
            <Link  href={'/payment'} className='btn btn-primary px-16' >Pay</Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart
