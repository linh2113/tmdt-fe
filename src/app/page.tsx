'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'
import Autoplay from 'embla-carousel-autoplay'

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
      </>
   )
}
