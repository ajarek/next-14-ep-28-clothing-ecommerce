import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='  min-h-[calc(100vh-80px)]  flex flex-col items-center justify-center '>
      <h2 className='text-3xl'>There was a problem.</h2>
      <p>We could not find the page you were looking for.</p>
      <p>
        Go back to the{' '}
        <Link
          className='underline text-green-700 text-xl'
          href='/'
        >
          Home
        </Link>
        .
      </p>
    </main>
  )
}