import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useTranslation } from "next-i18next/pages";

export default function KaryawanCare() {
  const { t } = useTranslation("mcuKaryawan");

  return (
    <div className="relative bg-white px-6 lg:px-8">
      <div
        className="-z-9 absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ff89] to-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <figure className="mt-16">
          <Image
            width={0}
            height={0}
            className="aspect-video h-[300px] w-full rounded-xl bg-gray-50 object-cover object-bot"
            src="/img/facility/karyawan.jpg"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            {t("fig")}
          </figcaption>
        </figure>
        <p className="mt-6 text-base font-semibold leading-7 text-green-600">
          {t("tags")}
        </p>
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {t("title")}
        </h1>
        <div className="mt-10 max-w-2xl">
          {t("intro")
            .split("\n\n")
            .map((part) => (
              <p key={part.slice(0, 24)} className="mt-2 first:mt-0">
                {part}
              </p>
            ))}

          <h3 className="mt-6 text-xl leading-8">{t("types_title")}</h3>
          <p className="mt-2">{t("types_intro")}</p>

          <ul
            role="list"
            style={{ listStyleType: "upper-alpha" }}
            className="mt-8 max-w-xl space-y-4 pl-6 text-gray-600"
          >
            <li>
              <strong>{t("timing_title")}</strong>
              <p className="mt-2">{t("timing_intro")}</p>
              <ul
                role="list"
                className="mt-2 max-w-xl list-decimal space-y-2 pl-6 text-gray-600"
              >
                <li>
                  <strong>{t("pre_title")}</strong>
                  <p>{t("pre_body")}</p>
                </li>
                <li>
                  <strong>{t("periodic_title")}</strong>
                  <p>{t("periodic_body")}</p>
                </li>
                <li>
                  <strong>{t("special_title")}</strong>
                  <p>{t("special_body")}</p>
                  <ul
                    role="list"
                    className="mt-2 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
                  >
                    <li>{t("special_1")}</li>
                    <li>{t("special_2")}</li>
                    <li>{t("special_3")}</li>
                    <li>{t("special_4")}</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>{t("jobtype_title")}</strong>
              <p className="mt-2">{t("jobtype_intro")}</p>
              <ul
                role="list"
                className="mt-2 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
              >
                <li>{t("jobtype_1")}</li>
                <li>{t("jobtype_2")}</li>
              </ul>
            </li>
          </ul>

          <h3 className="mt-6 text-xl leading-8">{t("prep_title")}</h3>
          <p className="mt-2">{t("prep_intro")}</p>
          <ul
            role="list"
            className="mt-2 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
          >
            <li>{t("prep_1")}</li>
            <li>{t("prep_2")}</li>
            <li>{t("prep_3")}</li>
          </ul>
          <p className="mt-2">{t("prep_note")}</p>

          <h3 className="mt-6 text-xl leading-8">{t("proc_title")}</h3>
          <p className="mt-2">{t("proc_intro")}</p>
          <ul
            role="list"
            className="mt-2 max-w-xl list-decimal space-y-3 pl-6 text-gray-600"
          >
            <li>
              <strong>{t("lab_title")}</strong>
              <p>{t("lab_body")}</p>
            </li>
            <li>
              <strong>{t("xray_title")}</strong>
              <p>{t("xray_body")}</p>
            </li>
            <li>
              <strong>{t("ecg_title")}</strong>
              <p>{t("ecg_body")}</p>
            </li>
            <li>
              <strong>{t("audio_title")}</strong>
              <p>{t("audio_body")}</p>
            </li>
            <li>
              <strong>{t("spiro_title")}</strong>
              <p>{t("spiro_body")}</p>
            </li>
            <li>
              <strong>{t("color_title")}</strong>
              <p>{t("color_body")}</p>
            </li>
            <li>
              <strong>{t("physical_title")}</strong>
              <p>{t("physical_body")}</p>
            </li>
          </ul>

          <h3 className="mt-6 text-xl leading-8">{t("result_title")}</h3>
          <p className="mt-2">{t("result_intro")}</p>
          <ul
            role="list"
            className="mt-2 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
          >
            <li>{t("result_1")}</li>
            <li>{t("result_2")}</li>
            <li>{t("result_3")}</li>
          </ul>
          <p className="mt-4">{t("closing")}</p>
        </div>
      </div>
    </div>
  );
}
