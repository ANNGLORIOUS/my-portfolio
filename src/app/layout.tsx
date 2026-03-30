import type { Metadata } from 'next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'AnnGLorious | Software Engineer',
  description:
    'Portfolio of AnnGLorious Mueni, a software engineer building thoughtful interfaces and scalable digital products.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
