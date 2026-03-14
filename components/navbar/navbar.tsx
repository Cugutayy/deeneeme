import Link from 'next/link';
import { navLinks } from '@/lib/content';

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-bold tracking-[0.25em]">ALSANCAK RUNNERS</Link>
        <ul className="hidden gap-6 text-xs uppercase tracking-[0.18em] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-lime">{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
