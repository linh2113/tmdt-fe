import { Lock, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
   return (
      <div className='flex items-center justify-center'>
         <form className='flex flex-col gap-3 bg-white p-5 w-[450px] rounded-2xl font-sans shadow-md'>
            <div className='w-[80px] h-[80px] mx-auto'>
               <Image src={'/logo.png'} alt='Chợ Việt' width={60} height={60} />
            </div>
            <h1 className='font-bold text-2xl'>Đăng nhập</h1>

            <div className='border border-gray-300 rounded-lg h-12 flex items-center pl-2 transition-all focus-within:border-blue-500'>
               <Phone />
               <input
                  type='text'
                  placeholder='Số điện thoại'
                  className='ml-2 w-full h-full border-none outline-none bg-transparent'
               />
            </div>
            <div className='border border-gray-300 rounded-lg mt-3 h-12 flex items-center pl-2 transition-all focus-within:border-blue-500'>
               <Lock />
               <input
                  type='password'
                  placeholder='Mật khẩu'
                  className='ml-2 w-full h-full border-none outline-none bg-transparent'
               />
            </div>

            <div className='flex justify-end items-center'>
               <span className='text-sm text-blue-600 font-medium cursor-pointer'>Quên mật khẩu?</span>
            </div>

            <button className=' bg-primaryColor text-white text-base font-medium rounded-lg h-12 w-full cursor-pointer transition-all hover:bg-gray-800'>
               Đăng nhập
            </button>

            <p className='text-center text-sm text-gray-800 mt-3'>
               Chưa có tài khoản?{' '}
               <Link href={'/register'} className='text-blue-600 font-medium cursor-pointer'>
                  Đăng ký tài khoản mới
               </Link>
            </p>
            <div className='flex items-center gap-1 my-1'>
               <div className='h-[1px] w-full bg-gray-500'></div>
               <p className='text-center text-sm text-gray-800 whitespace-nowrap'>Hoặc đăng nhập bằng</p>
               <div className='h-[1px] w-full bg-gray-500'></div>
            </div>
            <div className='flex gap-3 items-center'>
               <button className='flex items-center font-bold justify-center gap-2 w-full h-12 rounded-lg border border-gray-300 bg-white cursor-pointer transition-all hover:border-blue-500'>
                  <div className='w-7 h-7'>
                     <Image src={'/fb.png'} alt='' width={100} height={100} />
                  </div>
                  Facebook
               </button>
               <button className='flex items-center font-bold justify-center gap-2 w-full h-12 rounded-lg border border-gray-300 bg-white cursor-pointer transition-all hover:border-blue-500'>
                  <div className='w-7 h-7'>
                     <Image src={'/gg.png'} alt='' width={100} height={100} />
                  </div>
                  Google
               </button>
               <button className='flex items-center justify-center gap-2 w-full h-12 rounded-lg border border-gray-300 bg-white cursor-pointer transition-all hover:border-blue-500'>
                  <div className='w-7 h-7'>
                     <Image src={'/ap.png'} alt='' width={100} height={100} />
                  </div>
                  Apple
               </button>
            </div>
         </form>
      </div>
   )
}
