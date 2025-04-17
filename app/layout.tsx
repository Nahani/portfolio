import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { AnalyticsProvider } from '@/components/analytics-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nolan Potier - Senior Frontend Developer',
  description: 'Portfolio showcasing professional experience in building enterprise applications, mobile apps, and innovative solutions using React, React Native, and TypeScript',
  metadataBase: new URL('https://nolanpotier.dev'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AnalyticsProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 bg-background">{children}</main>
              <Footer />
            </div>
          </AnalyticsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}