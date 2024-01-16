import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isValidGithubUsername(username: string) {
  const regex = /^(?!-)[a-zA-Z0-9-]{1,39}(?<!-)$/;
  return regex.test(username);
}
