import Header from '@/components/header';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/activeSectionContext';
import { Toaster } from 'react-hot-toast';
import ThemeSwitch from '@/components/themeSwitch';
import ThemeContextProvider from '@/context/themeContext';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alwin | Software Engineer',
  description:
    'A passionate software engineer showcasing projects, skills, and milestones',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
        <Script
          src="https://app.tinyanalytics.io/pixel/k2O3K88Z2KKL6MVp"
        ></Script>
      <body
        className={`${inter.className} bg-gray-300 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div
          className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
        xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-center" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
