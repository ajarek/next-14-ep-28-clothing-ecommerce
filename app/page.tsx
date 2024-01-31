import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className=" min-h-screen  grid grid-cols-2 max-sm:grid-cols-1 items-center justify-between p-24">
      <div>
     <h1 className="text-3xl font-bold">Experience the height of fashion with our exquisite designer pieces</h1>
     <p>Where style, sophistication, exclusivity is the forefront of our collection. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quaerat nostrum quia nam earum, libero, expedita impedit delectus provident quo eveniet.</p>
     <Link href='/store/all'>Discover Our Products</Link>

      </div>
      <div className= 'grid grid-cols-2 max-sm:grid-cols-1  place-items-center'>
        <Link href='/store/women' className=''>

        <Image
        src='/images/home-photo-3.webp'
        alt='foto'
        width={200}
        height={400}
        className="rounded-t-full bg-clip-content p-2  hover:border-4 hover:border-blue-300 transition border-dashed"
        />
        </Link>
        <div className='flex flex-col gap-2'>

        <Image
        src='/images/home-photo-2.webp'
        alt='foto'
        width={150}
        height={200}
        className="rounded-full bg-clip-content p-2 hover:border-4 hover:border-blue-300 transition border-dashed"
        />
       

        <Image
        src='/images/home-photo-1.webp'
        alt='foto'
        width={150}
        height={200}
        className="rounded-b-full bg-clip-content p-2 hover:border-4 hover:border-blue-300 transition border-dashed"
        />
        </div>
      </div>
    </main>
  );
}
