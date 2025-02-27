import Image from 'next/image'
import React from 'react'

export default function Header() {
   return (
      <header className='bg-primaryColor py-2'>
         <div className='container flex items-center '>
            <div className='w-[60px] h-[60px]'>
               <Image src={'/logo.png'} alt='Chợ Việt' width={60} height={60} />
            </div>
         </div>
      </header>
   )
}
