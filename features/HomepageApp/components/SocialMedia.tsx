export default function SocialMedia() {
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
                  <div className="">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Famaliamedicalcenter&tabs=timeline&width=500&height=680&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="500"
                      height="680"
                      style={{ border: 'none', overflow: 'hidden' }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
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
