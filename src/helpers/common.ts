import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL;

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null; // SSR check
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()!.split(";").shift()!;
  return null;
}
