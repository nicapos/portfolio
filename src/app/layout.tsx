import type { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { inter } from '@/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio | nicapos',
  description:
    'A personal portfolio website to showcase my skills and projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { name: 'home', href: '/#main' },
    { name: 'about me', href: '/#about-me' },
    { name: 'projects', href: '/#projects' },
    { name: 'experience', href: '/#experience' },
    { name: 'contact me', href: '/#contact-me' },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('container relative mx-auto', inter.className)}>
        <nav className="fixed inset-x-0 top-0 z-20">
          <ul className="hidden h-16 w-full items-center justify-center gap-12 lg:flex">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {children}

        <footer className="p-8 text-center opacity-50">
          Built with Next.js and TailwindCSS, deployed with Vercel. <br />
          &copy; Annika Posadas. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
