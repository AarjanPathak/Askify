import '@/styles/globals.css'
import {Inter} from "next/font/google"

export const metadata = {
  title: 'Breadit',
  description: 'A Reddit clone built with Next.js and TypeScript.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>

      <body>
      <h1>This is the header!</h1>
      {children}
      </body>
    </html>
  )
}
