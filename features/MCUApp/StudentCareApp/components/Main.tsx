import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useTranslation } from "next-i18next/pages";

export default function StudentCare() {
  const { t } = useTranslation("mcuStudent");

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
            src="/img/facility/student.jpg"
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
          <p>{t("intro")}</p>
          <h3 className="mt-6 text-xl leading-8">{t("diff_title")}</h3>
          <p className="mt-2">{t("diff_body")}</p>
          <ul
            role="list"
            style={{ listStyleType: "upper-alpha" }}
            className="mt-8 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
          >
            <li>
              <strong>{t("blood_title")}</strong>
              <br />
              {t("blood_body")}
            </li>
            <li>
              <strong>{t("urine_title")}</strong>
              <br />
              {t("urine_body")
                .split("\n\n")
                .map((part) => (
                  <p key={part.slice(0, 24)} className="mt-2">
                    {part}
                  </p>
                ))}
            </li>
            <li>
              <strong>{t("stool_title")}</strong>
              <br />
              {t("stool_body")}
            </li>
            <li>
              <strong>{t("vaccine_title")}</strong>
              <br />
              {t("vaccine_body")
                .split("\n\n")
                .map((part) => (
                  <p key={part.slice(0, 24)} className="mt-2">
                    {part}
                  </p>
                ))}
            </li>
          </ul>
          <figure className="mt-16">
            <Image
              width={0}
              height={0}
              className="aspect-video w-full rounded-xl bg-gray-50 object-cover"
              src="/img/facility/student-mcu.jpg"
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
              {t("fig2")}
            </figcaption>
          </figure>
          <h3 className="mt-6 text-xl leading-8">{t("howto_title")}</h3>
          <div className="mt-2 space-y-2">
            {t("howto_body")
              .split("\n\n")
              .map((part) => (
                <p key={part.slice(0, 24)}>{part}</p>
              ))}
          </div>
          <ul
            role="list"
            className="mt-4 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
          >
            <li>{t("req_1")}</li>
            <li>{t("req_2")}</li>
            <li>{t("req_3")}</li>
            <li>{t("req_4")}</li>
            <li>{t("req_5")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
