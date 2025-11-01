import Script from 'next/script';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Providers } from '@/lib/providers';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = 'https://ganeshbadhe.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ganesh Badhe | UI/UX Designer & Frontend Developer From Mumbai, India.',
    template: '%s | Ganesh Badhe',
  },
  description:
    'Ganesh Badhe is a skilled UI/UX Designer and Frontend Developer with expertise in HTML, CSS, JavaScript, and Graphic Design. He specializes in creative problem-solving, strategic UI development, and delivering impactful digital experiences.',
  keywords: [
    'App Design', 
    'UI/UX Designer', 
    'Website Design & Development', 
    'HTML', 
    'CSS', 
    'JavaScript', 
    'Graphic Design', 
    'Website Redesign', 
    'Strategic UI Development', 
    'Product Design',
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Ganesh Badhe | UI/UX Designer & Frontend Developer From Mumbai, India',
    description:
      'Creating seamless user experiences and impactful designs for startups and digital products.',
    images: ['/images/open-graph-ganesh.jpg'],
  },
    twitter: {
    card: 'summary_large_image',
    title: 'Ganesh Badhe | UI/UX Designer & Frontend Developer From Mumbai, India',
   description: 'Creating seamless user experiences and impactful designs for startups and digital products.',
    creator: '@gbbadhe',
    images: '/images/open-graph-ganesh.jpg',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId && (
        <head>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
          <Script id="google-anayltics-script">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `}
          </Script>
        </head>
      )}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
