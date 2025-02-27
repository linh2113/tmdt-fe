'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import { formatCurrency } from '@/lib/utils'

export default function page() {
   return (
      <>
         <Carousel
            plugins={[
               Autoplay({
                  delay: 4000
               })
            ]}
         >
            <CarouselContent>
               <CarouselItem className='aspect-[3/1] pl-4'>
                  <Image src={'/banner1.png'} alt='' priority width={300} height={100} className='rounded-lg' />
               </CarouselItem>
               <CarouselItem className='aspect-[3/1] pl-4'>
                  <Image src={'/banner2.jpg'} alt='' priority width={300} height={100} className='rounded-lg' />
               </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
         </Carousel>
         <div className='mt-5'>
            <h2 className='font-bold text-xl'>Khám phá danh mục</h2>
            <div className='mt-3 grid grid-cols-8 gap-5'>
               {Array(16)
                  .fill(0)
                  .map((_, index) => (
                     <div key={index} className='flex flex-col gap-1 items-center justify-center font-semibold'>
                        <div className='aspect-square'>
                           <Image
                              src={'/banner2.jpg'}
                              alt=''
                              priority
                              width={100}
                              height={100}
                              className='rounded-lg'
                           />
                        </div>
                        <span>Bất động sản</span>
                     </div>
                  ))}
            </div>
         </div>
         <div className='mt-5'>
            <h2 className='font-bold text-xl'>Tin đăng mới</h2>
            <div className='grid mt-3 grid-cols-5'>
               {Array(10)
                  .fill(0)
                  .map((_, index) => (
                     <Link
                        key={index}
                        href={'/q'}
                        className='flex flex-col gap-1 p-3 hover:-translate-y-0.5 transition-all duration-300'
                     >
                        <Image src={'/banner2.jpg'} alt='' width={100} height={100} className='aspect-square' />
                        <p>Điện thoại, smartphone chính hãng giá rẻ</p>
                        <span className='text-red-500 font-bold'>{formatCurrency(1000000)}</span>
                        <div className='flex items-center gap-1'>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='size-5'
                           >
                              <path
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                              />
                           </svg>
                           <div className='w-1 h-1 rounded-full bg-gray-500'></div>
                           <span>1 phút trước</span>
                        </div>
                     </Link>
                  ))}
            </div>
         </div>
      </>
   )
}
