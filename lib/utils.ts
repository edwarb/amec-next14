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

function toErrorWithMessage(maybeError: unknown) {
  if (maybeError instanceof Error) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
}
export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}
