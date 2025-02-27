import { ModeToggle } from '@/components/toggle-theme'
import Image from 'next/image'
import React from 'react'

export default function Header() {
   return (
      <header className='flex items-center'>
         <div className='w-[150px] h-[150px]'>
            <Image src={'/logo.png'} alt='Chợ Việt' width={150} height={150} />
         </div>
         <ModeToggle />
      </header>
   )
}
