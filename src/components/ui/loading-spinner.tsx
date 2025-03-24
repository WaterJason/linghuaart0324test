"use client";

import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-solid border-current border-t-transparent text-primary",
        sizeClasses[size],
        className
      )}
    />
  );
}

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center flex-col gap-4">
      <LoadingSpinner size="lg" />
      <p className="text-secondary font-medium animate-pulse">页面加载中...</p>
    </div>
  );
} 