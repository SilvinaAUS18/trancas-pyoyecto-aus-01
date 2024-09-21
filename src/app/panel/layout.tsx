import { NotificationProvider } from '@/context/NotificacionContext'

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section >
          <NotificationProvider>

          {children}
    </NotificationProvider>

    </section>}


/*import { Inter } from 'next/font/google'
import { NotificationProvider } from '@/context/NotificacionContext'

const inter = Inter({ subsets: ['latin'] })



interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
      <body className={inter.className}>
        <NotificationProvider>

        <div className='min-h-screen flex flex-col items-center justify-center'>
            {children}
          </div>
        </NotificationProvider>
      </body>
  )
}*/