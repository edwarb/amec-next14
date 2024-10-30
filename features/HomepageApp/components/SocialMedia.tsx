declare global {
  interface Window {
    FB: any;
  }
}

import { useEffect } from 'react';

export default function SocialMedia() {
  useEffect(() => {
    // Load the Facebook SDK script dynamically
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v21.0&appId=2566313423434058';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      // Initialize the Facebook SDK once loaded
      if (window.FB) {
        window.FB.XFBML.parse();
      }
    };
    document.body.appendChild(script);

    // Cleanup the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative -z-10 mt-32 px-6 lg:px-8">
      <div className="isolate overflow-hidden bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-base font-semibold leading-7 text-green-300">Media Sosial</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Terhubung dengan Amalia Medical Center, <br className="hidden sm:inline lg:hidden" />
              di manapun Anda berada
            </p>
          </div>
          <div className="relative mt-6">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-green-100">
              Tetap terupdate dengan berita terbaru, penawaran, dan layanan kesehatan dari Amalia Medical Center. Ikuti kami di platform media sosial kami dan jadilah bagian dari komunitas kami.
            </p>
            <svg
              viewBox="0 0 1208 1024"
              className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
            >
              <ellipse cx={604} cy={512} fill="url(#aurora-gradient)" rx={604} ry={512} />
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
                <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                  {/* Facebook Page Plugin */}
                  <div id="fb-root"></div>
                  <div className="fb-page"
                       data-href="https://www.facebook.com/amaliamedicalcenter"
                       data-tabs="timeline"
                       data-width="500"
                       data-height="680"
                       data-small-header="false"
                       data-adapt-container-width="true"
                       data-hide-cover="false"
                       data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/amaliamedicalcenter" className="fb-xfbml-parse-ignore">
                      <a href="https://www.facebook.com/amaliamedicalcenter">Amalia Medical Center</a>
                    </blockquote>
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
