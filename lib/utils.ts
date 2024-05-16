import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type TWParams = string | number;
export function tw(str: TemplateStringsArray, ...params: TWParams[]) {
  if (params.length === 0) return str[0];

  return str.reduce((memo, val, idx) => {
    memo += val;
    if (idx < params.length) {
      memo += params[idx];
    }
    
    return memo;
  }, "");
}
