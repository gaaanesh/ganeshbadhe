import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Ganesh Badhe | UI/UX Designer & Frontend Developer From Mumbai, India.';
const description =
  'Ganesh Badhe is a skilled UI/UX Designer and Frontend Developer with expertise in HTML, CSS, JavaScript, and Graphic Design. He specializes in creative problem-solving, strategic UI development, and delivering impactful digital experiences.';
const url = 'https://ganeshbadhe.dev';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
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
  creator: 'Ganesh Badhe',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/images/open-graph-ganesh.jpg',
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title,
  //   description,
  //   creator: '@shahsagarm',
  //   images: '/images/open-graph-ganesh.jpg',
  // },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
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
