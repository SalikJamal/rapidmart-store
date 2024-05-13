import type { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "./globals.css"

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rapidmart",
  description: "Rapidmart | Buy and sell products online"
}


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
