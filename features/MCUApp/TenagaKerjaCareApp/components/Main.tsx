import { InformationCircleIcon } from '@heroicons/react/20/solid';

export default function TenagaKerjaCare() {
  return (
    <div className="relative bg-white px-6 py-32 lg:px-8">
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
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="/img/facility/mcukerja01.png"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Ilustrasi Medical Check Up Tenaga Kerja
          </figcaption>
        </figure>
        <p className="mt-14 text-base font-semibold leading-7 text-green-600">#MedicalCheckUp #TenagaKerjaCare</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MCU Tenaga Kerja</h1>
        <div className="mt-10 max-w-2xl">
          <p>
            Peranan tenaga kerja sebagai sumber daya manusia adalah sangat penting. Tenaga kerja yang sehat dan berkualitas
            merupakan salah satu faktor yang sangat menentukan produktivitas dan profitabilitas suatu perusahaan. Bila terjadi
            kecelakaan atau penyakit akibat hubungan kerja tentu akan menyebabkan kerugian yang tidak kecil bagi semua pihak,
            baik pengusaha, tenaga kerja maupun masyarakat yang memerlukan produk atau hasil kerjanya. Oleh karenanya
            perlindungan terhadap tenaga kerja terhadap bahaya-bahaya yang mungkin timbul selama bekerja serta kenyamanan dan
            ketenangan kerja menjadi suatu kebutuhan yang mendasar untuk dipenuhi. Untuk itu pemerintah melalui Undang-Undang
            tentang Keselamatan dan Kesehatan Kerja mewajibkan setiap perusahaan untuk memberikan perlindungan atas keselamatan
            dan kesehatan tenaga kerjanya.
          </p>
        </div>
      </div>
    </div>
  )
}
