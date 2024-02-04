'use client'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/state/useCartStore'

const Payment = () => {
  const router = useRouter()
  let { products, removeFromCart } = useCartStore()
  const notifySuccess = () => {
    toast.success(`Thank  you for your payment ${allPayValue} $!`, {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()

    notifySuccess()
    ;[...products].map((item: any) => removeFromCart(item))
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }
  const allPayValue = [...products]
    ?.reduce(
      (a: number, b: { price: number; count: number }) => a + b.price * b.count,
      0
    )
    .toFixed(2)
  return (
    <div className=' w-full min-h-[calc(100vh-80px)]  flex flex-col justify-center items-center  '>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className='max-w-[360px] max-sm:w-full bg-blue-200 p-12 max-sm:p-4 rounded-lg shadow-lg'
      >
        <div className='flex'></div>
        <div className='w-100%'>
          <label className='text-black' htmlFor='cardNumber'>To pay</label>
          <input
            type='text'
            value={allPayValue}
            required
            className="input w-full max-w-xs"
          />
        </div>

        <div className='w-100%'>
          <label className='text-black' htmlFor='cardNumber'>Card number</label>
          <input
            type='text'
            placeholder='1234 5678 9012 3456'
            required
            pattern='^(?:\d{4} ){3}\d{4}$'
            className="input w-full max-w-xs"
          />
        </div>
        <div className='w-100% '>
          <label className='text-black' htmlFor='expiryDate'>Expiration date</label>
          <input
            type='text'
            placeholder='MM/YYYY'
            required
            pattern='^(0[1-9]|1[0-2])\/20[2-9][4-9]$'
            className="input w-full max-w-xs"
          />
        </div>

        <div className='w-100%'>
          <label className='text-black' htmlFor='cvv'>CVV</label>
          <input
            type='text'
            placeholder='123'
            required
            pattern='^[0-9]{3}$'
            className="input w-full max-w-xs"
          />
        </div>

        <div className='w-100%  mt-4'>
          <button className="btn btn-primary w-full" type='submit'>I pay by card</button>
        </div>
      </form>
    </div>
  )
}

export default Payment