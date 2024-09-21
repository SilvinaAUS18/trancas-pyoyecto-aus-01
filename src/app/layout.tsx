import { Inter } from "next/font/google";
import type { Metadata } from 'next'
import './globals.css'

import Cabeza from "@/componentsFronend/Cabeza"
import Footer from "@/componentsFronend/Footer";
import NavBarPrincipal from '@/componentsFronend/NavPrincipal'
export const metadata = {
  title: "MUNICIPALIDAD DE TRANCAS",
  description: "Municipalidad de trancas Tucuman",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <main>
        <Cabeza />
        <NavBarPrincipal />

          {children}
        
          <Footer/>

          </main>
      </body>
    </html>
  )
}

/*const inter = Inter({ subsets: ["latin"] });
interface RootLayoutProps {
    children: React.ReactNode
  }

export const metadata = {
  title: "MUNICIPALIDAD DE TRANCAS",
  description: "Municipalidad de trancas Tucuman",
};

export default function RootLayout({ children}:RootLayoutProps ) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div >
        <Cabeza />
        <NavBarPrincipal />
        {children}       
        <Footer/>
        </div>
      </body>  
    </html>
  );
}*/
