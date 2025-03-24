"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoadingComplete"> {
  wrapperClassName?: string;
  blurEffect?: boolean;
  loadingColor?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  wrapperClassName,
  blurEffect = true,
  loadingColor = "bg-gray-200",
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className={cn(
        "overflow-hidden relative",
        isLoading && loadingColor,
        wrapperClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn(
          className,
          blurEffect && "transition-all duration-500",
          isLoading && blurEffect ? "scale-110 blur-lg" : "scale-100 blur-0"
        )}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
} 