import { useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next/pages";

const FACEBOOK_PAGE_URL = "https://www.facebook.com/amaliamedicalcenter";
const FB_SDK_ID = "facebook-jssdk";

declare global {
  interface Window {
    FB?: {
      XFBML: {
        parse: (node?: HTMLElement) => void;
      };
    };
    fbAsyncInit?: () => void;
  }
}

function loadFacebookSdk() {
  if (document.getElementById(FB_SDK_ID)) {
    window.FB?.XFBML.parse();
    return;
  }

  window.fbAsyncInit = () => {
    window.FB?.XFBML.parse();
  };

  const script = document.createElement("script");
  script.id = FB_SDK_ID;
  script.src =
    "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0&appId=2566313423434058";
  script.async = true;
  script.defer = true;
  script.crossOrigin = "anonymous";
  document.body.appendChild(script);
}

export default function SocialMedia() {
  const { t } = useTranslation("common");

  useEffect(() => {
    loadFacebookSdk();
  }, []);

  return (
    <div className="relative mt-32 px-6 lg:px-8">
      <div className="isolate overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-green-300">
              {t("home_social.eyebrow")}
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {t("home_social.title")}
            </p>
          </div>
          <div className="relative mt-6">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-green-100">
              {t("home_social.subtitle")}
            </p>
            <svg
              viewBox="0 0 1208 1024"
              className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            >
              <ellipse
                cx={604}
                cy={512}
                fill="url(#aurora-gradient)"
                rx={604}
                ry={512}
              />
              <defs>
                <radialGradient id="aurora-gradient">
                  <stop stopColor="#7CFC00" />
                  <stop offset={0.5} stopColor="#00FF00" />
                  <stop offset={1} stopColor="#800080" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flow-root bg-white pb-24 sm:pb-32">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex justify-center">
                <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                  <div id="fb-root" />
                  <div
                    className="fb-page mx-auto"
                    data-href={FACEBOOK_PAGE_URL}
                    data-tabs="timeline"
                    data-width="500"
                    data-height="680"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  >
                    <blockquote
                      cite={FACEBOOK_PAGE_URL}
                      className="fb-xfbml-parse-ignore"
                    >
                      <Link
                        href={FACEBOOK_PAGE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Amalia Medical Center
                      </Link>
                    </blockquote>
                  </div>
                  <div className="mt-4 text-center">
                    <Link
                      href={FACEBOOK_PAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-green-600 hover:text-green-700"
                    >
                      {t("home_social.visit_facebook")} →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
