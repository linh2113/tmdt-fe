'use client'
import { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
export default function ProfileForm() {
   const [name, setName] = useState('Nguyễn Thanh Kỳ')
   const [phone, setPhone] = useState('012245667893')
   const [address, setAddress] = useState('')
   const [bio, setBio] = useState('')
   const [nickname, setNickname] = useState('')
   const [gender, setGender] = useState('')
   const [dob, setDob] = useState('')

   return (
      <div className='max-w-xl mx-auto bg-white p-5 rounded-lg shadow-md'>
         <h2 className='text-lg font-semibold'>Hồ sơ cá nhân</h2>
         <div className='mt-4 space-y-4'>
            {/* Họ và tên / Số điện thoại */}
            <div className='grid grid-cols-2 gap-4'>
               <div>
                  <label className='block text-sm font-medium'>Họ và tên *</label>
                  <input
                     type='text'
                     className='w-full mt-1 p-2 border rounded'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <div>
                  <label className='block text-sm font-medium'>Số điện thoại *</label>
                  <input
                     type='text'
                     className='w-full mt-1 p-2 border rounded'
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                  />
               </div>
            </div>

            {/* Địa chỉ */}
            <div>
               <label className='block text-sm font-medium'>Địa chỉ</label>
               <input
                  type='text'
                  className='w-full mt-1 p-2 border rounded'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
               />
            </div>

            {/* Giới thiệu */}
            <div>
               <label className='block text-sm font-medium'>Giới thiệu</label>
               <textarea
                  className='w-full mt-1 p-2 border rounded h-20'
                  placeholder='Viết vài dòng giới thiệu về gian hàng của bạn...'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
               />
            </div>

            {/* Tên gọi nhớ */}
            <div>
               <label className='block text-sm font-medium'>Tên gọi nhớ</label>
               <input
                  type='text'
                  className='w-full mt-1 p-2 border rounded'
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
               />
               <p className='text-xs text-gray-500 mt-1'>
                  Tên gọi nhớ sau khi được cập nhật sẽ không thể thay đổi trong vòng 60 ngày tới.
               </p>
            </div>

            {/* Thông tin bảo mật */}
            <h2 className='text-lg font-semibold mb-0'>Thông tin bảo mật</h2>
            <p className='text-sm text-gray-600'>
               Những thông tin dưới đây mang tính bảo mật. Chỉ bạn mới có thể thấy và chỉnh sửa những thông tin này.
            </p>

            {/* Email */}
            <div className='flex justify-between items-center bg-gray-200 p-3'>
               <div>
                  <label className='block text-sm font-medium'>Email</label>
                  <p className='mt-1 text-sm'>ky@gmail.com</p>
               </div>
               <button className='text-blue-500 text-sm'>Thay đổi</button>
            </div>

            {/* CCCD / CMND / Hộ chiếu */}
            <div>
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder='CCCD / CMND / Hộ chiếu' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>CCCD / CMND / Hộ chiếu</SelectLabel>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>

            {/* Thông tin xuất hóa đơn */}
            <div>
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder='Thông tin xuất hóa đơn' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Thông tin xuất hóa đơn</SelectLabel>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>

            {/* Mã số thuế */}
            <div>
               <Input placeholder='Mã số thuế ' />
            </div>

            {/* Danh mục yêu thích */}
            <div>
               <Select>
                  <SelectTrigger>
                     <SelectValue placeholder='Danh mục yêu thích' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Danh mục yêu thích</SelectLabel>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>

            {/* Giới tính & Ngày sinh */}
            <div className='grid grid-cols-2 gap-4'>
               <div>
                  <label className='block text-sm font-medium'>Giới tính</label>
                  <select
                     className='w-full mt-1 p-2 border rounded'
                     value={gender}
                     onChange={(e) => setGender(e.target.value)}
                  >
                     <option value=''>Chọn giới tính</option>
                     <option value='male'>Nam</option>
                     <option value='female'>Nữ</option>
                     <option value='other'>Khác</option>
                  </select>
               </div>
               <div>
                  <label className='block text-sm font-medium'>Ngày, tháng, năm sinh</label>
                  <input
                     type='date'
                     className='w-full mt-1 p-2 border rounded'
                     value={dob}
                     onChange={(e) => setDob(e.target.value)}
                  />
               </div>
            </div>

            {/* Lưu thay đổi */}
            <button className='w-full mt-4 p-2 bg-gray-300 rounded text-gray-700 font-semibold cursor-not-allowed'>
               LƯU THAY ĐỔI
            </button>
         </div>
      </div>
   )
}
