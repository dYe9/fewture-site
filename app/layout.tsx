import './globals.css';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400','600','700'] });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', weight: ['400','700'] });

export const metadata = {
  title: 'Fewture Studios',
  description: 'AI-first creative studio. Search, analyze, and embed culture.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
