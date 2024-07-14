import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function FamilyCare() {
  return (
    <div className="relative bg-white px-6 py-32 lg:px-8">
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
            className="aspect-video w-full rounded-xl bg-gray-50 object-cover"
            src="/img/facility/mcufamily01.png"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Ilustrasi Medical Check Up pada anak
          </figcaption>
        </figure>
        <p className="mt-14 text-base font-semibold leading-7 text-green-600">
          #MedicalCheckUp #FamilyCare
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          MCU Family Care
        </h1>
        <div className="mt-10 max-w-2xl">
          <p>
            Kita tidak dapat mengukur apakah kondisi tubuh kita sehat atau tidak
            sehat. Kita hanya bisa merasakan keluhan namun tidak dapat
            mengetahui dengan detail. Oleh karena itu, diperlukan adanya
            pemeriksaan check up secara rutin. Medical check up bukan hanya
            diperuntukkan untuk orang dewasa. Namun anak-anak juga penting
            melakukan medical check up, disarankan sejak dini selalu dikontrol
            tumbuh kembangnya.
            <br />
            Kami menyediakan pemeriksaan kesehatan berdasarkan urutan sebagai
            berikut :
          </p>
          <ul
            role="list"
            className="mt-8 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
          >
            <li>
              <strong>Early Medical Check UP (Usia 3-5 tahun)</strong>
              <br />
              Panel periksa : Darah lengkap/rutin (dengan LED), Anti HbsAg, urin
              rutin, pemeriksaan fisik
            </li>
            <li>
              <strong>Children Medical Check Up (6-12 tahun)</strong>
              <br />
              Panel periksa : Darah lengkap/rutin (dengan LED), Anti HbsAg, Urin
              rutin, Pemeriksaan fisik
            </li>
            <li>
              <strong>Teenager Medical Check Up (13-17 tahun)</strong>
              <br />
              Panel periksa : Darah lengkap/rutin (dengan LED), Anti HbsAg, Urin
              rutin, radiologi, Cholestrol lengkap, Trigliserid, SGPT, Foto
              Thorax, Pemeriksaan fisik
            </li>
          </ul>

          <figure className="mt-16">
            <Image
              width={0}
              height={0}
              className="aspect-video w-full rounded-xl bg-gray-50 object-cover"
              src="/img/facility/mcufamily02.png"
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
              Ilustrasi Medical Check Up Parental
            </figcaption>
          </figure>

          <h3 className="mt-6 text-xl leading-8">Parental</h3>
          <ul
            role="list"
            className="my-4 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
          >
            <li>
              <strong>Medical Check Up for Mommy</strong>
              <br />
              Panel periksa : Darah lengkap, gula puasa 2x, LDL, SGPT, asam
              urat, analisa urin, EKG, radiologi, Pemeriksaan fisik
            </li>
            <li>
              <strong>Medical Check Up for Daddy</strong>
              <br />
              Panel periksa : Darah lengkap, gula puasa 2x, LDL, SGPT, asam
              urat, analisa urin, EKG, radiologi, Pemeriksaan fisik
            </li>
          </ul>
          <p className="mt-2">
            Pemeriksaan tersebut bisa ditambahkan sesuai kebutuhan dan keinginan
            atau saran dokter sebelumnya. Harga pemeriksaan paket keluarga
            (Ayah, Ibu, dan Anak) akan mendapatkan pengurangan harga.
          </p>
        </div>
      </div>
    </div>
  );
}
