'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Bell, MessageSquareMore, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Header() {
   return (
      <header className='bg-primaryColor py-2'>
         <div className='container flex gap-5 items-center '>
            <div className='w-[60px] h-[60px]'>
               <Image src={'/logo.png'} alt='Chợ Việt' width={60} height={60} />
            </div>
            <form className='w-3/5 flex-1 flex items-center'>
               <Input
                  placeholder='Tìm kiếm sản phẩm trên Chợ Tốt'
                  required
                  className='bg-white text-black rounded-tr-none rounded-br-none border-none outline-none ring-offset-0'
               />
               <button className='flex h-9 items-center gap-1 bg-[#097345] font-medium px-3 text-white whitespace-nowrap rounded-tr-md rounded-br-md'>
                  <Search size={20} strokeWidth={1.5} />
                  Tìm kiếm
               </button>
            </form>
            <Bell />
            <MessageSquareMore />
            <ShoppingCart />
            <Avatar>
               <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
               <AvatarFallback>CN</AvatarFallback>
            </Avatar>
         </div>
      </header>
   )
}
