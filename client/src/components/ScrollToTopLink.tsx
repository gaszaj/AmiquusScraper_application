import { useLocation } from "wouter";
import { ReactNode, useCallback } from "react";

interface ScrollToTopLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ScrollToTopLink({ href, children, className, onClick }: ScrollToTopLinkProps) {
  const [_, navigate] = useLocation();
  
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    
    // If onClick prop is provided, call it
    if (onClick) {
      onClick();
    }
    
    // For hash links to the home page, handle special navigation
    if (href.startsWith('/#')) {
      // If already on home page, just scroll to the section
      if (window.location.pathname === '/') {
        const sectionId = href.substring(2);
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // Navigate to home page and then scroll to section
        navigate('/');
        
        // Wait a bit for the page to load then scroll
        setTimeout(() => {
          const sectionId = href.substring(2);
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // For regular links, use Wouter navigation
      navigate(href);
      
      // And scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [href, navigate, onClick]);
  
  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}