'use client'


import { useRouter } from 'next/navigation'
import { useCartStore, ProductType } from '@/state/useCartStore'
import React, { useEffect, useState } from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Price = ({ product }: { product: ProductType }) => {
  const [total, setTotal] = useState(product.price)
  const [count, setCount] = useState(1)
  const router = useRouter()
  const { addToCart } = useCartStore()

  useEffect(() => {
    useCartStore.persist.rehydrate()
  }, [])

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      count: count,
    })
    toast.success('🦄 The product added to the cart!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Bounce,
    })
    setTimeout(() => {
      router.push('/store/all')
    }, 2000)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>${(+total).toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}

      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className='flex justify-between items-center'>
        {/* QUANTITY */}
        <div className='flex justify-between items-center w-full h-11 px-3 ring-2 ring-primary max-sm:w-3/4'>
          <span className='mr-2'>Quantity</span>
          <div className='flex gap-4 items-center max-sm:gap-2'>
            <button
              onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {'◀'}
            </button>
            <span>{count}</span>
            <button
              onClick={() => setCount((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {'▶'}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button
          className='uppercase w-56 btn btn-primary     text-white rounded-s-none max-sm:w-full max-sm:px-2 '
          onClick={handleCart}
        >
          Add to Cart
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Price