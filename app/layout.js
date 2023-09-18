import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from '@/app/context/cart'

import UserProvider from '@/app/context/user'


export const metadata = {
  title: 'eBay',
  description: 'eBay Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ToastContainer/>

        {/* <UserProvider> */}
            <CartProvider>
               {children}
            </CartProvider>
        {/* </UserProvider> */}

        </body>
    </html>
  )
}



