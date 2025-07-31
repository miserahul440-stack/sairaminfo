import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "साईराम कॉम्प्युटर - Digital Services & Internet Center",
  description:
    "साईराम कॉम्प्युटर - संपूर्ण डिजिटल सेवा, सरकारी फॉर्म, डॉक्युमेंट सर्विसेस, फोटो स्टुडिओ आणि कॉम्प्युटर ट्रेनिंग. Rahul Mise - 9011083440",
  manifest: "/manifest.json",
  themeColor: "#2A4784",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "साईराम कॉम्प्युटर",
  },
  openGraph: {
    title: "साईराम कॉम्प्युटर",
    description: "Digital Services & Internet Center",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="साईराम कॉम्प्युटर" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="साईराम कॉम्प्युटर" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#2A4784" />
        <meta name="msapplication-tap-highlight" content="no" />

        <link rel="icon" href="/icon-192.png" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
