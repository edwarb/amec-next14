import { InformationCircleIcon } from '@heroicons/react/20/solid';

export default function VaksinMR() {
  return (
    <div className="relative bg-white px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-9 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#80ff89] to-[#ff80b5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-base leading-7 text-gray-700">
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/img/disease/inject-vitamin-c.jpg"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Ilustrasi Injeksi Vitamin C
          </figcaption>
        </figure>
        <p className="mt-14 text-base font-semibold leading-7 text-green-600">#Injeksi #VitaminC</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Injeksi Vitamin C</h1>
        <div className="mt-10 max-w-2xl">
          <p>
            Kebutuhan harian asupan vitamin C bagi orang dewasa adalah 2.000 mg. Kita bisa mencukupi kebutuhan vitamin C harian ini dengan
            mengonsumsi sayuran dan buah-buahan.<br />
            Sayangnya, vitamin C dalam sayuran atau buah-buahan rentan rusak juga mudah larut dalam air.
            Hal ini terjadi saat penyimpanan dan pengolahan sehingga cara ini dinilai kurang efektif.<br />
            Karena itu, suntik menjadi solusi terkini untuk memenuhi kebutuhan vitamin C. Cara ini dinilai paling efektif karena
            lebih mudah diserap tubuh ketimbang melalui oral.<br />
            Beberapa sumber menyebutkan bahwa tubuh menyerap 100% vitamin C yang disuntikkan dan hasilnya juga terlihat langsung
            ketimbang mengonsumsi suplemen tiap hari.
          </p>

          <h3 className="mt-6 text-xl leading-8">Apa saja manfaat suntik Vitamin C?</h3>
          <p className="mt-2">
            Menyuntikkan vitamin C sebenarnya adalah salah satu cara untuk
            memenuhi asupan vitamin C  selain dari makanan ataupun suplemen. Vitamin C disuntikkan langsung melalui
            pembuluh darah, otot, atau jaringan bawah kulit.<br />
            Prosedur ini biasanya dilakukan oleh orang yang mengalami defisiensi vitamin C atau sedang sakit karena
            penyakit infeksi. Vitamin C bisa meningkatkan kekuatan sistem imun. Selain itu, suntik vitamin C juga digunakan untuk perawatan kulit.<br /><br />
            Berikut 5 manfaatnya untuk kulit dan
            kesehatan tubuh:
          </p>
          <ul role="list" className="my-4 max-w-xl space-y-2 text-gray-600 list-disc pl-6">
            <li>Mencerahkan kulit</li>
            <li>Mencegah penuaan dini</li>
            <li>Melindungi kulit dari paparan sinar UV</li>
            <li>Melembapkan kulit</li>
            <li>Menjaga sistem imun</li>
          </ul>
          <h3 className="mt-6 text-xl leading-8">Berapa biaya suntik Vitamin C di Amalia Medical Center?</h3>
          <p className="mt-2">
            Kami memberikan harga yang terjangkau, dengan harga <b>Rp375.000</b> sudah termasuk biaya administrasi dan konsultasi dokter
          </p>

          <h3 className="mt-6 text-xl leading-8">Adakah efek samping vaksin melakukan injeksi Vitamin C?</h3>
          <p className="mt-2">
            Suntik vitamin C mungkin bisa memberikan efek, untuk itu perlu melakukan konsultasi dengan dokter terlebih dahulu.<br />
            Berikut efek yang mungkin terjadi:
          </p>
          <ul role="list" className="my-4 max-w-xl space-y-2 text-gray-600 list-disc pl-6">
            <li>Nyeri, kemerahan atau gatal di tempat bekas suntikan</li>
            <li>Diare ringan</li>
            <li>Mual dan pusing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
