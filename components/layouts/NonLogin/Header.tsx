import { css } from "@emotion/css";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "components/ui/button";
import { Popover } from "components/ui/popover";
import { cn } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

const HEADER = [
  { label: "Booking", href: "/" },
  { label: "Home", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Artikel", href: "/" },
  {
    label: "Vaksinasi & Imunisasi",
    href: "/",
    child: [
      { label: "Campak", href: "/vaksin/campak" },
      { label: "Demam Kuning", href: "/vaksin/demam-kuning" },
      { label: "Influenza", href: "/vaksin/influenza" },
      { label: "Meningitis", href: "/vaksin/meningitis" },
      { label: "MMR", href: "/vaksin/mmr" },
      { label: "Tifoid", href: "/vaksin/tifoid" },
      { label: "Vaksin MR", href: "/vaksin/vaksin-mr" },
    ],
  },
  {
    label: "MCU",
    href: "/",
    child: [
      { label: "Covid Care", href: "/mcu/covid-care" },
      { label: "Family Care", href: "/mcu/family-care" },
      { label: "Haji Care", href: "/mcu/haji-care" },
      { label: "On Site Care", href: "/mcu/on-site-care" },
      { label: "Tenaga Kerja Care", href: "/mcu/tenaga-kerja-care" },
    ],
  },
  {
    label: "Promosi",
    href: "/",
    child: [
      { label: "Paket Hemat", href: "/promosi/paket-hemat" },
      { label: "Promo Bulan ini", href: "/promosi/paket-bulan-ini" },
    ],
  },
  {
    label: "Galeri",
    href: "/",
    child: [
      { label: "Fasilitas Klinik", href: "/galeri/fasilitas" },
      { label: "CSR", href: "/galeri/csr" },
      { label: "Sertifikat", href: "/galeri/sertifikat" },
    ],
  },
  { label: "Hubungi Kami", href: "/" },
];

function Header() {
  return (
    <header className={cn(styles.wrapper, "shadow-md")}>
      <nav>
        <div style={{ width: 150 }}>
          <Image
            src={"/img/amec-new.png"}
            alt="Icon"
            width={150}
            height={150}
          />
        </div>
      </nav>

      <nav className={styles.navlink}>
        <ul className={styles.flex}>
          {HEADER.map((headVal) => (
            <li key={headVal.label}>
              {!!headVal.child?.length && (
                <PopoverHoverTrigger label={headVal.label}>
                  <ul className="bg-white">
                    {headVal.child.map((childVal) => (
                      <Link href={childVal.href}>
                        <li
                          key={childVal.label}
                          className="px-4 py-2 hover:bg-slate-200 cursor-pointer"
                        >
                          {childVal.label}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </PopoverHoverTrigger>
              )}

              {!headVal.child?.length && (
                <Link href={headVal.href}>{headVal.label}</Link>
              )}
            </li>
          ))}
          <li>
            <Button size={"sm"}>{`Login`}</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

const styles = {
  wrapper: css({
    position: "sticky",
    paddingLeft: 24,
    paddingRight: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: `4rem`,
    width: "100%",
    top: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",

    ["@media screen and (max-width: 770px)"]: {
      display: "flex",
      padding: 0,
      position: "relative",
      flexDirection: "column",
    },
  }),
  navlink: css({
    display: "flex",
    alignItems: "center",
    ["@media screen and (max-width: 770px)"]: {
      display: "none",
      padding: 0,
      position: "relative",
      flexDirection: "column",
    },
  }),
  flex: css({
    display: "flex",
    alignItems: "center",
    gap: 12,
  }),
};

function PopoverHoverTrigger({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger onMouseLeave={handleClose} onMouseEnter={handleOpen}>
        {label}
      </PopoverTrigger>
      <PopoverContent
        onMouseLeave={handleClose}
        onMouseEnter={handleOpen}
        className="shadow-md"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}
