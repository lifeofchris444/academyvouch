import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Academy Sports Method",
  description: "Discover how people are unlocking up to $750 in Academy Sports rewards. Complete simple steps and claim your gift card today.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    title: "Academy Sports Method",
    description: "Unlock up to $750 in Academy Sports rewards with a simple process.",
    siteName: "Academy Sports Method",
  },
  twitter: {
    card: "summary_large_image",
    title: "Academy Sports Method",
    description: "Unlock up to $750 in Academy Sports rewards with a simple process.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
