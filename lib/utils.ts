import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function capitalizeFirstLetter(texto: string) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}
