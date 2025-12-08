import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns the provided image path or a default placeholder image if the image is missing
 * @param image - The image path to check
 * @param defaultImage - The default image to use if the provided image is empty or missing
 * @returns The image path or default image
 */
export function getImageWithFallback(
  image: string | undefined | null,
  defaultImage: string = '/image/logo.png'
): string {
  return image && image.trim() ? image : defaultImage
}
