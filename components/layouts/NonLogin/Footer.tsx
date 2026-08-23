import { useTranslation } from "next-i18next/pages";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <footer
        aria-labelledby="footer-heading"
        className="relative border-t border-gray-900/10 py-10 sm:mt-32 sm:py-18"
      >
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <img
            className="h-14"
            src="/img/amec-new.png"
            alt="Amalia Medical Center"
          />
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="sm:grid sm:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {t("footer.address")}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  Graha Amalia
                  <br />
                  Jl. Dewi Sartika 364 A Cawang,
                  <br />
                  Jakarta Timur 13630
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {t("footer.contact")}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {t("footer.phone")} : +6221 8090762
                  <br />
                  {t("footer.fax")}: +6221 80884802
                  <br />
                  {t("footer.wa")}: +62 813 808 046 80
                  <br />
                  amaliamedicalcenter.cs@gmail.com
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer
        aria-labelledby="footer-heading"
        className="relative border-t border-gray-900/10 py-4 sm:py-10"
      >
        <div className="text-center">
          <p className="flex flex-col items-center justify-center text-sm leading-6 text-gray-600 sm:flex-row sm:justify-center">
            &copy; 2024 Amalia Medical Center -
            <span className="flex items-center">
              <span className="mx-1">{t("footer.crafted_with")}</span>
              <svg
                className="h-4 w-4 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span className="mx-1">
                {t("footer.by")} Jakago.id
              </span>
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
