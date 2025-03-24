import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';
import { Breadcrumb } from '@/components/ui/breadcrumb';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="container-wide py-4">
          <Breadcrumb />
        </div>
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
