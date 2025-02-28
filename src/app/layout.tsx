import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
const manrope = Nunito({ subsets: ['latin'], variable: '--font-manrope' })
export const metadata: Metadata = {
   title: 'Chợ Tốt - Website Mua Bán, Rao Vặt Trực Tuyến Hàng Đầu Của Người Việt',
   description:
      'Chợ Tốt - Website mua bán rao vặt của người Việt với hàng ngàn món hời đang được rao bán mỗi ngày. Đăng tin mua bán UY TÍN, NHANH CHÓNG, AN TOÀN.'
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang='en' suppressHydrationWarning>
         <body className={`${manrope.className} antialiased text-sm font-normal`}>
            <Header />
            <main className='container my-5'>{children}</main>
            <Footer />
         </body>
      </html>
   )
}
