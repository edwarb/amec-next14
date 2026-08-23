import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const LOCALES = [
  { code: "id", label: "ID", name: "Bahasa Indonesia" },
  { code: "en", label: "EN", name: "English" },
] as const;

type LocaleCode = (typeof LOCALES)[number]["code"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, query } = router;
  const currentLocale = (router.locale ?? "id") as LocaleCode;
  const active =
    LOCALES.find((item) => item.code === currentLocale) ?? LOCALES[0];

  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden>{active.label}</span>
        <span className="sr-only">Current language: {active.name}</span>
        <ChevronDownIcon className="h-4 w-4 text-gray-500" aria-hidden />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label="Language"
          className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5"
        >
          {LOCALES.map((item) => {
            const isActive = item.code === currentLocale;

            return (
              <Link
                key={item.code}
                href={{ pathname, query }}
                locale={item.code}
                scroll={false}
                role="option"
                aria-selected={isActive}
                className={[
                  "flex items-center justify-between px-4 py-2 text-sm",
                  isActive
                    ? "font-semibold text-green-600"
                    : "text-gray-700 hover:bg-gray-50",
                ].join(" ")}
                onClick={() => setOpen(false)}
              >
                <span>
                  <span className="font-semibold">{item.label}</span>
                  <span className="text-gray-500"> — {item.name}</span>
                </span>
                {isActive ? (
                  <span className="text-xs text-green-600" aria-hidden>
                    ✓
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
