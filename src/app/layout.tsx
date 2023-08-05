import type { Metadata } from 'next'


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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
