'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HeartIcon, MessageSquareText, PhoneIcon, ShareIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Detail({ params }: { params: { id: string } }) {
   const [isSaved, setIsSaved] = useState(false)
   return (
      <div className='max-w-6xl mx-auto p-4'>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Chi tiết tin đăng */}
            <div className='md:col-span-2'>
               <div className='bg-white p-4 shadow rounded-lg'>
                  {/* Ảnh */}
                  <div className='w-full h-64 bg-gray-200 rounded-md mb-4'>
                     <Image src={'/ab.jpg'} alt='' width={500} height={500} />
                  </div>
                  <div className='flex items-center gap-4'>
                     {Array(4)
                        .fill(0)
                        .map((item, index) => (
                           <div key={index} className='flex-1'>
                              <Image src={'/ab.jpg'} alt='' width={500} height={500} />
                           </div>
                        ))}
                  </div>

                  {/* Mô tả */}
                  <div className='mt-6'>
                     <h2 className='text-lg font-semibold'>Mô tả chi tiết</h2>
                     <p className='text-gray-700 mt-2'>
                        Air Blade sở hữu vẻ ngoài ấn tượng lấy cảm hứng từ "tia sét", thiết kế tổng thể phản chiếu sự
                        cứng cáp trong bề mặt hiện đại xen lẫn những đường nét gọn gàng, sắc nét.
                     </p>
                     <p className='text-gray-700 mt-2'>Xe còn rất mới, đi được 10.000 km, chính chủ, có bảo hiểm xe.</p>
                  </div>
               </div>
            </div>
            {/* Thông tin người bán */}
            <div>
               <div className='bg-white p-4 shadow rounded-lg'>
                  {/* Tiêu đề và giá */}
                  <h1 className='text-2xl mt-3 font-bold text-gray-800'>Xe máy Honda Air Blade 2020</h1>
                  <p className='text-xl font-semibold text-red-500 mt-2'>28.000.000 đ</p>

                  {/* Vị trí */}
                  <p className='text-gray-600 mt-2'>Hồ Chí Minh, Quận 1</p>

                  {/* Hành động */}
                  <div className='flex gap-4 mt-4'>
                     <button
                        className={`flex items-center gap-2 px-4 py-2 border rounded-md ${
                           isSaved ? 'bg-yellow-400 text-white' : 'bg-gray-100'
                        }`}
                        onClick={() => setIsSaved(!isSaved)}
                     >
                        <HeartIcon className='w-5 h-5' />
                        {isSaved ? 'Đã lưu' : 'Lưu tin'}
                     </button>

                     <button className='flex items-center gap-2 px-4 py-2 border rounded-md bg-gray-100'>
                        <ShareIcon className='w-5 h-5' />
                        Chia sẻ
                     </button>
                  </div>

                  {/* Avatar và tên */}
                  <div className='flex items-center gap-4 mt-3'>
                     <Avatar className='w-12 h-12'>
                        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                        <AvatarFallback>CN</AvatarFallback>
                     </Avatar>
                     <div>
                        <p className='text-gray-800 font-medium'>Nguyễn Văn A</p>
                        <p className='text-gray-500 text-sm'>Tham gia 2 năm</p>
                     </div>
                  </div>

                  {/* Hành động */}
                  <div className='mt-4 space-y-2'>
                     <button className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md'>
                        <MessageSquareText className='w-5 h-5' />
                        Chat với người bán
                     </button>

                     <button className='w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md'>
                        <PhoneIcon className='w-5 h-5' />
                        Gọi ngay
                     </button>
                  </div>
               </div>
            </div>
         </div>
         {/* Danh sách tin đăng liên quan */}
         <div className='mt-8'>
            <h2 className='text-lg font-semibold'>Tin đăng tương tự</h2>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
               {/* Giả lập danh sách tin */}
               {[1, 2, 3, 4].map((id) => (
                  <div key={id} className='bg-white p-3 shadow rounded-lg'>
                     <div className='w-full h-32 bg-gray-200 rounded-md'>
                        <Image src={'/ab.jpg'} alt='' width={500} height={500} />
                     </div>
                     <p className='mt-2 font-medium text-gray-800'>Xe Wave Alpha 2021</p>
                     <p className='text-red-500 font-semibold'>20.000.000 đ</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
