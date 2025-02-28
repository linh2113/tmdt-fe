import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
   return (
      <footer className='bg-gray-100 text-gray-700 text-sm mt-8'>
         <div className='container py-8'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
               {/* Cột 1: Giới thiệu */}
               <div>
                  <h2 className='font-semibold text-gray-900 mb-2'>Về Chợ Tốt</h2>
                  <ul className='space-y-2'>
                     <li>
                        <Link href='/' className='hover:text-blue-500'>
                           Giới thiệu
                        </Link>
                     </li>
                     <li>
                        <Link href='/' className='hover:text-blue-500'>
                           Quy chế hoạt động
                        </Link>
                     </li>
                     <li>
                        <Link href='/' className='hover:text-blue-500'>
                           Chính sách bảo mật
                        </Link>
                     </li>
                     <li>
                        <Link href='/' className='hover:text-blue-500'>
                           Liên hệ
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Cột 2: Hỗ trợ khách hàng */}
               <div>
                  <h2 className='font-semibold text-gray-900 mb-2'>Hỗ trợ khách hàng</h2>
                  <ul className='space-y-2'>
                     <li>
                        <Link href='/' className='hover:text-blue-500'>
                           Trung tâm trợ giúp
                        </Link>
                     </li>
                     <li>
                        <Link href='/' className='hover:text-blue-500'>
                           An toàn mua bán
                        </Link>
                     </li>
                     <li>
                        <Link href='/' className='hover:text-blue-500'>
                           Hướng dẫn đăng tin
                        </Link>
                     </li>
                     <li>
                        <Link href='/' className='hover:text-blue-500'>
                           Câu hỏi thường gặp
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Cột 3: Kết nối */}
               <div>
                  <h2 className='font-semibold text-gray-900 mb-2'>Kết nối với chúng tôi</h2>
                  <div className='flex gap-4'>
                     <Link href='/' className='hover:text-blue-500'>
                        <div className='w-7 h-7'>
                           <Image src={'/fb.png'} alt='' width={100} height={100} />
                        </div>
                     </Link>
                     <Link href='/' className='hover:text-blue-500'>
                        <div className='w-7 h-7'>
                           <Image src={'/gg.png'} alt='' width={100} height={100} />
                        </div>
                     </Link>
                     <Link href='/' className='hover:text-blue-500'>
                        <div className='w-7 h-7'>
                           <Image src={'/ap.png'} alt='' width={100} height={100} />
                        </div>
                     </Link>
                  </div>
               </div>

               {/* Cột 4: Tải ứng dụng */}
               <div>
                  <h2 className='font-semibold text-gray-900 mb-2'>Tải ứng dụng</h2>
                  <div className='flex flex-col gap-2'>
                     <Link href='/'></Link>
                     <Link href='/'></Link>
                  </div>
               </div>
            </div>

            {/* Copyright */}
            <div className='border-t mt-6 pt-4 text-center text-gray-500'>© 2025 Chợ Tốt. Mọi quyền được bảo lưu.</div>
         </div>
      </footer>
   )
}
