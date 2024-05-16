import { css } from "@emotion/css";
import Image from "next/image";
import YoutubePlayer from "./YoutubePlayer";

import DrawerCustom from "components/ui/drawerCustom";

function IntroSection() {
  return (
    <section>
      <DrawerCustom />
      <YoutubePlayer />

      <div className={styles.sectionIntro}>
        <div className={styles.picBig}>
          <Image
            priority
            alt={"dokter bidan"}
            width={600}
            height={400}
            src="/img/dokterbidan.png"
            style={{
              objectFit: "contain",
              paddingRight: 16,
            }}
          />
        </div>

        <div className={styles.rightText}>
          <h2>{`Selamat Datang di Amalia Medical Center`}</h2>
          <p>
            {`Amalia Medical Center (AMEC) adalah pusat medical check up & vaksinasi internasional yang berlokasi di Jakarta yang dibangun pada tahun 2000. Kami menyediakan pelayanan kesehatan yang kompetititf untuk customer dengan praktek medis yang berlaku, bersyarat ilmiah dan berstandar internasional. Citra positif dan pengakuandari berbagai institusi di dalam negeri maupun luarnegeri telah kami terima dan berhasil bekerjasama dengan baik.`}
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;

const styles = {
  sectionIntro: css({
    display: `flex`,
    alignItems: "center",
    ["@media screen and (max-width: 770px)"]: {
      padding: 0,
      position: "relative",
      display: "flex",
      flexDirection: "column",
    },
  }),
  picBig: css({
    flex: 1,
  }),
  rightText: css({
    display: "flex",
    flexDirection: "column",
    gap: 24,
    flex: 1,
  }),
};
