import Image from 'next/image';

const fadilla = [
  {
    name: 'Sertifikat Penjaminan Mutu dan Update Analisa Sperma',
    imageSrc:
      '/img/sdm/analisis-lab/Fadilla Darma Putri A.Md.A.K/Sertifikat Penjaminan Mutu dan Update Analisa Sperma.png',
  },
  {
    name: 'Sertifikat Pre Analitik Laboratorium',
    imageSrc:
      '/img/sdm/analisis-lab/Fadilla Darma Putri A.Md.A.K/Sertifikat Pre Analitik Laboratorium.png',
  },
  {
    name: 'Sertifikat Pemantapan Mutu',
    imageSrc:
      '/img/sdm/analisis-lab/Fadilla Darma Putri A.Md.A.K/Sertifikat Pemantapan Mutu.png',
  },
  {
    name: 'Sertifikat Teknik Pengambilan Darah Kapiler',
    imageSrc:
      '/img/sdm/analisis-lab/Fadilla Darma Putri A.Md.A.K/Sertifikat Teknik Pengambilan Darah Kapiler.png',
  },
  {
    name: 'Sertifikat Verifikasi Terhadap Analisis Sampel',
    imageSrc:
      '/img/sdm/analisis-lab/Fadilla Darma Putri A.Md.A.K/Sertifikat Verifikasi terhadap analisis sampel.png',
  },
  {
    name: 'Sertifikat Analisa Gas Darah',
    imageSrc:
      '/img/sdm/analisis-lab/Fadilla Darma Putri A.Md.A.K/Sertifikat Analisa Gas Darah.png',
  },
  {
    name: 'Sertifikat Kompetensi',
    imageSrc:
      '/img/sdm/analisis-lab/Fadilla Darma Putri A.Md.A.K/Sertifikat Kompetensi.png',
  },
];

const indah = [
  {
    name: 'Sertifikat Penjaminan Mutu dan Update Analisa Sperma',
    imageSrc:
      '/img/sdm/analisis-lab/Indah Lestary A.Md.A.K/Sertifikat Penjaminan Mutu dan Update Analisa Sperma.png',
  },
  {
    name: 'Sertifikat Pelatihan Penanggulangan Tuberkulosis',
    imageSrc:
      '/img/sdm/analisis-lab/Indah Lestary A.Md.A.K/Sertifikat Pelatihan Penanggulangan Tuberkulosis.png',
  },
  {
    name: 'Sertifikat Laboratorium Update',
    imageSrc:
      '/img/sdm/analisis-lab/Indah Lestary A.Md.A.K/Sertifikat Laboratorium Update.png',
  },
  {
    name: 'Sertifikat Flebotomi Teknik Pengambilan Darah Kapiler',
    imageSrc:
      '/img/sdm/analisis-lab/Indah Lestary A.Md.A.K/Sertifikat Flebotomi Teknik Pengambilan Darah Kapiler.png',
  },
  {
    name: 'Sertifikat Pemantapan Mutu',
    imageSrc:
      '/img/sdm/analisis-lab/Indah Lestary A.Md.A.K/Sertifikat Pemantapan Mutu.png',
  },
  {
    name: 'SertifikatFlebotomi Dasar',
    imageSrc:
      '/img/sdm/analisis-lab/Indah Lestary A.Md.A.K/Sertifikat Flebotomi Dasar.png',
  },
  {
    name: 'Sertifikat Kompetensi',
    imageSrc:
      '/img/sdm/analisis-lab/Indah Lestary A.Md.A.K/Sertifikat Kompetensi.png',
  },
];

const santi = [
  {
    name: 'Sertifikat Penjaminan Mutu dan Update Analisa Sperma',
    imageSrc:
      '/img/sdm/analisis-lab/Santi Dwi Yuniarti A.Md.A.K/Sertifikat Penjaminan Mutu dan Update Analisa Sperma.png',
  },
  {
    name: 'Sertifikat Aspek Hukum dan Peran Pre Analitik',
    imageSrc:
      '/img/sdm/analisis-lab/Santi Dwi Yuniarti A.Md.A.K/Sertifikat Aspek Hukum dan Peran Pre Analitik.png',
  },
  {
    name: 'Sertifikat Analisa Gas Darah',
    imageSrc:
      '/img/sdm/analisis-lab/Santi Dwi Yuniarti A.Md.A.K/Sertifikat Analisa Gas Darah.png',
  },
  {
    name: 'Sertifikat Flebotomi Teknik Pengambilan Darah Kapiler',
    imageSrc:
      '/img/sdm/analisis-lab/Santi Dwi Yuniarti A.Md.A.K/Sertifikat Flebotomi Teknik Pengambilan Darah Kapiler.png',
  },
  {
    name: 'Sertifikat Verifikasi Terhadap Proses Analisa Sampel',
    imageSrc:
      '/img/sdm/analisis-lab/Santi Dwi Yuniarti A.Md.A.K/Sertifikat Verifikasi Terhadap Proses Analisa Sampel.png',
  },
  {
    name: 'Sertifikat Pemantapan Mutu',
    imageSrc:
      '/img/sdm/analisis-lab/Santi Dwi Yuniarti A.Md.A.K/Sertifikat Pemantapan Mutu.png',
  },
  {
    name: 'Sertifikat Flebotomi',
    imageSrc:
      '/img/sdm/analisis-lab/Santi Dwi Yuniarti A.Md.A.K/Sertifikat Flebotomi.png',
  },
];

export default function Sertifikat() {
  return (
    <div className="bg-white">
      <div
        className="-z-9 absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h1 className="mt-2 flex justify-center py-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Tenaga Ahli Analisis Lab
        </h1>
        <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-gray-600">
          Amalia Medical Center memiliki tenaga ahli yang kompeten sebagai
          analisis lab yang siap memberikan pelayanan terbaik dengan standar
          kualitas tinggi untuk memastikan hasil pemeriksaan yang akurat dan
          terpercaya.
        </p>
        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-xl font-semibold text-gray-900">
              Fadilla Darma Putri A.Md.A.K
            </span>
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {fadilla.map((fadilla) => (
            <li key={fadilla.name}>
              <Image
                alt={fadilla.name}
                src={fadilla.imageSrc}
                width={400}
                height={300}
                className="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <h3 className="mt-2 text-center text-sm font-semibold tracking-tight text-gray-900">
                {fadilla.name}
              </h3>
            </li>
          ))}
        </ul>
        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-xl font-semibold text-gray-900">
              Indah Lestary A.Md.AK
            </span>
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {indah.map((indah) => (
            <li key={indah.name}>
              <Image
                alt={indah.name}
                src={indah.imageSrc}
                width={400}
                height={300}
                className="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <h3 className="mt-2 text-center text-sm font-semibold tracking-tight text-gray-900">
                {indah.name}
              </h3>
            </li>
          ))}
        </ul>
        <div className="relative mt-10">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-2 text-xl font-semibold text-gray-900">
              Santi Dwi Yuniarti A.Md.A.K
            </span>
          </div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {santi.map((santi) => (
            <li key={santi.name}>
              <Image
                alt={santi.name}
                src={santi.imageSrc}
                width={400}
                height={300}
                className="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <h3 className="mt-2 text-center text-sm font-semibold tracking-tight text-gray-900">
                {santi.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
