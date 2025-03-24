import React from 'react';
import { cn } from '@/lib/utils';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

export function HeroBanner({
  title,
  subtitle,
  className,
  align = 'left',
  children,
}: HeroBannerProps) {
  return (
    <div className={cn(
      'relative py-16 md:py-24 overflow-hidden',
      className
    )}>
      <div 
        className={cn(
          'container-wide relative z-10',
          align === 'center' && 'text-center',
          align === 'right' && 'text-right'
        )}
      >
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          {title}
        </h1>
        
        {subtitle && (
          <p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 animate-fade-in"
            style={{ 
              animationDelay: '0.3s',
              marginLeft: align === 'center' ? 'auto' : undefined,
              marginRight: align === 'center' ? 'auto' : undefined
            }}
          >
            {subtitle}
          </p>
        )}
        
        {children && (
          <div 
            className="animate-fade-in" 
            style={{ animationDelay: '0.5s' }}
          >
            {children}
          </div>
        )}
      </div>
      
      {/* 装饰元素 - 左侧图案 */}
      <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* 装饰元素 - 右侧图案 */}
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      
      {/* 珐琅风格装饰线条 */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-white/40 to-primary/60"></div>
    </div>
  );
} 