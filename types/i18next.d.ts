import type common from "../public/locales/en/common.json";
import type about from "../public/locales/en/about.json";
import type mcuFamily from "../public/locales/en/mcuFamily.json";
import type mcuHaji from "../public/locales/en/mcuHaji.json";
import type mcuOnsite from "../public/locales/en/mcuOnsite.json";
import type mcuTenagaKerja from "../public/locales/en/mcuTenagaKerja.json";
import type mcuStudent from "../public/locales/en/mcuStudent.json";
import type mcuMigran from "../public/locales/en/mcuMigran.json";
import type mcuKaryawan from "../public/locales/en/mcuKaryawan.json";
import type vaccineCampak from "../public/locales/en/vaccineCampak.json";
import type vaccineYellowFever from "../public/locales/en/vaccineYellowFever.json";
import type vaccineInfluenza from "../public/locales/en/vaccineInfluenza.json";
import type vaccineMeningitis from "../public/locales/en/vaccineMeningitis.json";
import type vaccineMmr from "../public/locales/en/vaccineMmr.json";
import type vaccineTyphoid from "../public/locales/en/vaccineTyphoid.json";
import type vaccineMr from "../public/locales/en/vaccineMr.json";
import type vaccineVitaminC from "../public/locales/en/vaccineVitaminC.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      about: typeof about;
      mcuFamily: typeof mcuFamily;
      mcuHaji: typeof mcuHaji;
      mcuOnsite: typeof mcuOnsite;
      mcuTenagaKerja: typeof mcuTenagaKerja;
      mcuStudent: typeof mcuStudent;
      mcuMigran: typeof mcuMigran;
      mcuKaryawan: typeof mcuKaryawan;
      vaccineCampak: typeof vaccineCampak;
      vaccineYellowFever: typeof vaccineYellowFever;
      vaccineInfluenza: typeof vaccineInfluenza;
      vaccineMeningitis: typeof vaccineMeningitis;
      vaccineMmr: typeof vaccineMmr;
      vaccineTyphoid: typeof vaccineTyphoid;
      vaccineMr: typeof vaccineMr;
      vaccineVitaminC: typeof vaccineVitaminC;
    };
  }
}
