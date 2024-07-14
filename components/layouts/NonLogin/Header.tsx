import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Booking", href: "/booking" },
  { name: "Tentang Kami", href: "/about" },
  { name: "Artikel", href: "/article" },
  { name: "Vaksinasi & Imunisasi", href: "#" },
  { name: "MCU", href: "#" },
  { name: "Promosi", href: "#" },
  { name: "Galeri", href: "#" },
];

const vaksinasiDropdown = [
  { name: "Vaksinasi Covid", href: "#" },
  { name: "Imunisasi Campak", href: "/vaksinasi-imunisasi/campak" },
  { name: "Vaksinasi Demam Kuning", href: "/vaksinasi-imunisasi/demam-kuning" },
  { name: "Vaksinasi Influenza", href: "/vaksinasi-imunisasi/influenza" },
  { name: "Vaksinasi Meningitis", href: "/vaksinasi-imunisasi/meningitis" },
  { name: "Vaksinasi MMR", href: "/vaksinasi-imunisasi/mmr" },
  { name: "Vaksinasi Tifoid", href: "/vaksinasi-imunisasi/tifoid" },
  { name: "Vaksinasi MR", href: "/vaksinasi-imunisasi/vaksin-mr" },
];

const mcuDropdown = [
  { name: "MCU Covid Care", href: "/mcu/covid-care" },
  { name: "MCU Family Care", href: "/mcu/family-care" },
  { name: "MCU Haji", href: "/mcu/haji-care" },
  { name: "MCU On Site", href: "/mcu/on-site-care" },
  { name: "MCU Tenaga Kerja", href: "/mcu/tenaga-kerja-care" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              alt={"amalia-logo"}
              width={120}
              height={60}
              className="h-16 w-auto"
              src="/img/amec-new.png"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.name === "Vaksinasi & Imunisasi" ? (
              <Menu
                as="div"
                key={item.name}
                className="relative inline-block text-left"
              >
                <MenuButton className="inline-flex w-full justify-center text-sm font-semibold leading-6 text-gray-900 hover:text-green-600">
                  {item.name}
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
                    {vaksinasiDropdown.map((dropdownItem) => (
                      <MenuItem key={dropdownItem.name}>
                        {({ active }) => (
                          <a
                            href={dropdownItem.href}
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            {dropdownItem.name}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Transition>
              </Menu>
            ) : item.name === "MCU" ? (
              <Menu
                as="div"
                key={item.name}
                className="relative inline-block text-left"
              >
                <MenuButton className="inline-flex w-full justify-center text-sm font-semibold leading-6 text-gray-900 hover:text-green-600">
                  {item.name}
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
                    {mcuDropdown.map((dropdownItem) => (
                      <MenuItem key={dropdownItem.name}>
                        {({ active }) => (
                          <a
                            href={dropdownItem.href}
                            className={`${
                              active ? "bg-gray-100" : ""
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            {dropdownItem.name}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Transition>
              </Menu>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
              >
                {item.name}
              </a>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600"
          >
            {`Log in`}
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
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Amalia Medical Center</span>
              <img className="h-8 w-auto" src="/img/amec-new.png" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.name === "Vaksinasi & Imunisasi" ? (
                    <Menu
                      as="div"
                      key={item.name}
                      className="relative inline-block text-left"
                    >
                      <MenuButton className="inline-flex w-full justify-center text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {item.name}
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </MenuButton>
                      <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {vaksinasiDropdown.map((dropdownItem) => (
                            <MenuItem key={dropdownItem.name}>
                              {({ active }) => (
                                <a
                                  href={dropdownItem.href}
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } block px-4 py-2 text-base font-semibold text-gray-900`}
                                >
                                  {dropdownItem.name}
                                </a>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Transition>
                    </Menu>
                  ) : item.name === "MCU" ? (
                    <Menu
                      as="div"
                      key={item.name}
                      className="relative inline-block text-left"
                    >
                      <MenuButton className="inline-flex w-full justify-center text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        {item.name}
                        <ChevronDownIcon
                          className="ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </MenuButton>
                      <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {mcuDropdown.map((dropdownItem) => (
                            <MenuItem key={dropdownItem.name}>
                              {({ active }) => (
                                <a
                                  href={dropdownItem.href}
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } block px-4 py-2 text-base font-semibold text-gray-900`}
                                >
                                  {dropdownItem.name}
                                </a>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Transition>
                    </Menu>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ),
                )}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
