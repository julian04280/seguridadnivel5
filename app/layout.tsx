import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Seguridad Nivel 5 | Seguridad Privada y Consultiva en Colombia',
  description: 'Líderes en seguridad integral, vigilancia y tecnología avanzada en Bogotá y Chía. Protegemos lo que más valoras con personal de élite.',
  keywords: ['seguridad privada colombia', 'vigilancia bogota', 'seguridad nivel 5', 'consultoría en seguridad'],
  authors: [{ name: 'Dojasoft' }],
  openGraph: {
    title: 'Seguridad Nivel 5',
    description: 'Anticipamos el riesgo mediante inteligencia y tecnología.',
    url: 'https://seguridadnivel5ltda.com',
    siteName: 'Seguridad Nivel 5',
    images: [
      {
        url: '/og-image.jpg', // Sube una foto de tu empresa a la carpeta /public
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
