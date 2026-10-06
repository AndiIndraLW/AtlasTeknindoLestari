import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'PT. Atlas Teknindo Lestari | Heavy Lifting & Material Handling Equipment Rental',
  description: 'Leading heavy lifting and material handling equipment rental in Indonesia. Premium fleet of mobile cranes, forklifts, boom lifts, scissor lifts, and reach stackers with certified K3 operators.',
  keywords: [
    'PT Atlas Teknindo Lestari',
    'heavy equipment rental',
    'mobile crane rental Indonesia',
    'industrial forklift rental',
    'boom lift rental',
    'scissor lift rental',
    'reach stacker rental',
    'K3 certified operator',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-[#FFB800] selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
