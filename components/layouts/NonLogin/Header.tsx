import { useState, type ReactNode } from "react";
import { Dialog, DialogPanel, Menu, MenuButton, MenuItems, MenuItem, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next/pages";
import LanguageSwitcher from "components/LanguageSwitcher";

const NAV_ITEMS = [
  { key: "booking", href: "/booking" },
  { key: "about", href: "/about" },
  { key: "article", href: "/article" },
  { key: "vaccination", href: "#" },
  { key: "mcu", href: "#" },
  { key: "promo", href: "#" },
  { key: "sdm", href: "#" },
] as const;

const VAKSINASI_ITEMS = [
  { key: "covid", href: "#" },
  { key: "campak", href: "/vaksinasi-imunisasi/campak" },
  { key: "demam_kuning", href: "/vaksinasi-imunisasi/demam-kuning" },
  { key: "influenza", href: "/vaksinasi-imunisasi/influenza" },
  { key: "meningitis", href: "/vaksinasi-imunisasi/meningitis" },
  { key: "mmr", href: "/vaksinasi-imunisasi/mmr" },
  { key: "tifoid", href: "/vaksinasi-imunisasi/tifoid" },
  { key: "mr", href: "/vaksinasi-imunisasi/vaksin-mr" },
  { key: "vitamin_c", href: "/vaksinasi-imunisasi/vitaminc" },
] as const;

const MCU_ITEMS = [
  { key: "covid", href: "/mcu/covid-care" },
  { key: "family", href: "/mcu/family-care" },
  { key: "haji", href: "/mcu/haji-care" },
  { key: "on_site", href: "/mcu/on-site-care" },
  { key: "tenaga_kerja", href: "/mcu/tenaga-kerja-care" },
  { key: "pelajar_taiwan", href: "/mcu/pelajar-taiwan-care" },
  { key: "pekerja_migran", href: "/mcu/pekerja-migran-care" },
  { key: "karyawan", href: "/mcu/karyawan-care" },
] as const;

const SDM_ITEMS = [
  { key: "analisis_lab", href: "/sdm/analisis-lab" },
  { key: "csr", href: "/sdm/csr" },
  { key: "fasilitas", href: "/sdm/fasilitas" },
  { key: "sertifikat", href: "/sdm/sertifikat" },
] as const;

function NavLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

type MobileNavGroupProps = {
  title: string;
  items: readonly { key: string; href: string }[];
  labelPrefix: "nav_vaccination" | "nav_mcu" | "nav_sdm";
  onNavigate: () => void;
};

function MobileNavGroup({
  title,
  items,
  labelPrefix,
  onNavigate,
}: MobileNavGroupProps) {
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50/80">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3.5 text-left text-base font-semibold text-gray-900"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <div className="space-y-0.5 border-t border-gray-100 bg-white px-2 py-2">
          {items.map((item) => (
            <NavLink
              key={item.key}
              href={item.href}
              className="block rounded-lg px-3 py-2.5 text-sm leading-snug text-gray-600 hover:bg-green-50 hover:text-green-700"
              onClick={onNavigate}
            >
              {t(`${labelPrefix}.${item.key}`)}
            </NavLink>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Header() {
  const { t } = useTranslation("common");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="relative inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Amalia Medical Center</span>
            <Image
              alt="amalia-logo"
              width={120}
              height={60}
              className="h-16 w-auto"
              src="/img/amec-new.png"
            />
          </Link>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">{t("nav.open_menu")}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {NAV_ITEMS.map((item) =>
            item.key === "vaccination" ? (
              <Menu
                as="div"
                key={item.key}
                className="relative inline-block text-left"
              >
                <MenuButton className="inline-flex w-full justify-center text-sm font-semibold leading-6 text-gray-900 hover:text-green-600">
                  {t(`nav.${item.key}`)}
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {VAKSINASI_ITEMS.map((dropdownItem) => (
                      <MenuItem key={dropdownItem.key}>
                        <NavLink
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {t(`nav_vaccination.${dropdownItem.key}`)}
                        </NavLink>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Transition>
              </Menu>
            ) : item.key === "mcu" ? (
              <Menu
                as="div"
                key={item.key}
                className="relative inline-block text-left"
              >
                <MenuButton className="inline-flex w-full justify-center text-sm font-semibold leading-6 text-gray-900 hover:text-green-600">
                  {t(`nav.${item.key}`)}
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {MCU_ITEMS.map((dropdownItem) => (
                      <MenuItem key={dropdownItem.key}>
                        <NavLink
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {t(`nav_mcu.${dropdownItem.key}`)}
                        </NavLink>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Transition>
              </Menu>
            ) : item.key === "sdm" ? (
              <Menu
                as="div"
                key={item.key}
                className="relative inline-block text-left"
              >
                <MenuButton className="inline-flex w-full text-sm font-semibold leading-6 text-gray-900 hover:text-green-600">
                  {t(`nav.${item.key}`)}
                </MenuButton>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {SDM_ITEMS.map((dropdownItem) => (
                      <MenuItem key={dropdownItem.key}>
                        <NavLink
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {t(`nav_sdm.${dropdownItem.key}`)}
                        </NavLink>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Transition>
              </Menu>
            ) : (
              <NavLink
                key={item.key}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
              >
                {t(`nav.${item.key}`)}
              </NavLink>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-6">
          <LanguageSwitcher />
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
          >
            {t("nav.login")}
            <span aria-hidden="true" className="arrow">
              &rarr;
            </span>
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-gray-900/30 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
            <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobile}>
              <span className="sr-only">Amalia Medical Center</span>
              <Image
                className="h-10 w-auto"
                src="/img/amec-new.png"
                alt="Amalia Medical Center"
                width={120}
                height={60}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
              onClick={closeMobile}
            >
              <span className="sr-only">{t("nav.close_menu")}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="flex-1 overflow-y-auto px-4 py-4"
            aria-label="Mobile"
          >
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => {
                if (item.key === "vaccination") {
                  return (
                    <MobileNavGroup
                      key={item.key}
                      title={t(`nav.${item.key}`)}
                      items={VAKSINASI_ITEMS}
                      labelPrefix="nav_vaccination"
                      onNavigate={closeMobile}
                    />
                  );
                }

                if (item.key === "mcu") {
                  return (
                    <MobileNavGroup
                      key={item.key}
                      title={t(`nav.${item.key}`)}
                      items={MCU_ITEMS}
                      labelPrefix="nav_mcu"
                      onNavigate={closeMobile}
                    />
                  );
                }

                if (item.key === "sdm") {
                  return (
                    <MobileNavGroup
                      key={item.key}
                      title={t(`nav.${item.key}`)}
                      items={SDM_ITEMS}
                      labelPrefix="nav_sdm"
                      onNavigate={closeMobile}
                    />
                  );
                }

                return (
                  <NavLink
                    key={item.key}
                    href={item.href}
                    className="block rounded-xl border border-gray-100 bg-white px-4 py-3.5 text-base font-semibold text-gray-900 hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                    onClick={closeMobile}
                  >
                    {t(`nav.${item.key}`)}
                  </NavLink>
                );
              })}
            </div>
          </nav>

          <div className="border-t border-gray-100 px-4 py-4">
            <Link
              href="/login"
              className="flex items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-base font-semibold text-white hover:bg-green-700"
              onClick={closeMobile}
            >
              {t("nav.login")}
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
