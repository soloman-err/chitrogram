import FooterBar from '@/components/FooterBar';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'chitrogram',
  description: 'An augmented client for the web',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>
        <Header />
        <main className=" min-h-screen">{children}</main>
        <div className="sticky bottom-0 right-0 left-0">
          <FooterBar />
        </div>
      </body>
    </html>
  );
}
