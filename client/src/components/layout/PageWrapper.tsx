import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

/**
 * PageWrapper component provides consistent layout with header, footer and proper spacing
 * for all pages throughout the application
 */
export default function PageWrapper({ 
  children, 
  className = '',
  noPadding = false 
}: PageWrapperProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`flex-grow ${noPadding ? '' : 'pt-24 md:pt-28'} ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}