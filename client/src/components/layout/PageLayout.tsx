import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  withoutPadding?: boolean;
}

export default function PageLayout({ children, className = '', withoutPadding = false }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${withoutPadding ? '' : 'pt-20 md:pt-24'} ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}