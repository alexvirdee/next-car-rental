import type { Metadata } from 'next';
import LayoutProvider from '@/components/LayoutProvider';
import './globals.css'
import '@/stylesheets/commonClasses.css'


export const metadata: Metadata = {
  title: 'RideRoster',
  description: 'Car rental application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <LayoutProvider>
        {children}
      </LayoutProvider>
  )
}
