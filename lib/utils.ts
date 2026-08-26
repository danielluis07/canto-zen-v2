import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&w=1600&q=80`;
