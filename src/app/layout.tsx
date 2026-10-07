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
  title: 'PT. Atlas Teknindo Lestari | Sewa Alat Berat & Material Handling',
  description: 'Penyedia sewa alat berat dan material handling terkemuka di Indonesia. Armada berkualitas: mobile crane, forklift, boom lift, scissor lift, dan reach stacker dengan operator tersertifikasi K3.',
  keywords: [
    'PT Atlas Teknindo Lestari',
    'sewa alat berat',
    'sewa mobile crane Indonesia',
    'sewa forklift industri',
    'sewa boom lift',
    'sewa scissor lift',
    'sewa reach stacker',
    'operator sertifikasi K3',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${barlowCondensed.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-[#FFB800] selection:text-black">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
