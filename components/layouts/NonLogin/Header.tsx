import { css } from "@emotion/css";
import { Button } from "components/ui/button";
import Image from "next/image";

const HEADER = [
  "Booking",
  "Home",
  "Tentang Kami",
  "Artikel",
  "Vaksinasi & Imunisasi",
  "MCU",
  "Promosi",
  "Galeri",
  "Hubungi Kami",
];

function Header() {
  return (
    <header className={styles.wrapper}>
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
          {HEADER.map((val) => (
            <li key={val}>
              <a href={"#"}>{val}</a>
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
    boxShadow: "0px -15px 20px",
    width: "100%",
    top: 0,
    zIndex: 100,
    backgroundColor: "#ffffff",
    // lineHeight: 0.8,

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
