import { InformationCircleIcon } from '@heroicons/react/20/solid';

export default function HajiCare() {
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
            src="/img/facility/mcuhaji01.png"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Ilustrasi Medical Check Up Haji Care
          </figcaption>
        </figure>
        <p className="mt-14 text-base font-semibold leading-7 text-green-600">#MedicalCheckUp #HajiCare</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MCU Haji Care</h1>
        <div className="mt-10 max-w-2xl">
          <p>
            Pentingnya memeriksa kesehatan bagi para calon haji adalah sesuatu yang vital mengingat kondisi Arab Saudi
            yang sangat berbeda dengan di tanah air mulai dari suhu, kelembapan udara, makanan hingga sosial budayanya.
            Membuat sejumlah perbedaan itu dapat mempengaruhi kesehatan para jamaah haji. Oleh karenanya untuk mencegah
            terjadinya kondisi kesehatan yang memburuk, para jamaah haji disarankan melakukan medical check up sejak di
            tanah air.<br />
            Di tanah air, pemeriksaan kesehatan para calon haji melalui beberapa tahapan yaitu, untuk pemeriksaan pertama para 
            calon haji melakukannya di puskesmas. Hal ini dimaksudkan untuk mengetahui bagaimana kondisi kesehatan para jamaah, 
            apakah cukup sehat dan mampu untuk m enunaikan rukun Islam yang terakhir ini. Selanjutnya pemeriksaan diteruskan di 
            Dinas Kesehatan Dati II Kabupaten/ Kotamadya. Pada pemeriksaan II ini, dilaksanakan pemeriksaan kesehatan dan 
            penyuntikan vaksin ‘meningitis’ dan tes kehamilan bagi calon haji wanita Pasangan Usia Subur (PUS).
          </p>
        </div>
      </div>
    </div>
  )
}
