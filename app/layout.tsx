import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kenya’s Visionary Entrepreneurs',
  description:
    'Explore the stories of Kenya’s most influential entrepreneurs, innovators, and business builders reshaping the region.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <header className="bg-brand text-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-brand-accent">Third Site Features</p>
                <h1 className="font-display text-3xl sm:text-4xl">Kenya&apos;s Visionary Entrepreneurs</h1>
              </div>
              <p className="max-w-md text-sm text-slate-200 sm:text-base">
                A deep dive into the founders, industrialists, and innovators shaping East Africa&apos;s economic future.
              </p>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>&copy; 2023 Third Site Media. All rights reserved.</p>
              <nav className="flex gap-4">
                <a href="#top-ten" className="hover:underline">
                  Top 10 Feature
                </a>
                <a href="#newsletter" className="hover:underline">
                  Newsletter
                </a>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
