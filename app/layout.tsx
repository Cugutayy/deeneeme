import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/navbar/navbar';

export const metadata: Metadata = {
  title: 'Alsancak Runners | Urban Running Community in Izmir',
  description:
    'Alsancak Runners is an urban running collective in Izmir sharing community runs, collaborations, and photography culture.',
  keywords: ['Running club Izmir', 'Urban running community', 'Alsancak runners']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
