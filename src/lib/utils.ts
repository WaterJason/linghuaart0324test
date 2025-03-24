import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format date to Chinese style (YYYY年MM月DD日)
 * @param dateString - Date string in YYYY-MM-DD format
 * @returns Formatted date in Chinese style
 */
export function formatDate(dateString: string): string {
  if (!dateString) return '';

  const [year, month, day] = dateString.split('-');
  return `${year}年${month}月${day}日`;
}
