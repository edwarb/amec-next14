import Link from "next/link";
import Image from "next/image";
import {
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
  IdentificationIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc2W0zCyUTCuEBFLdbYRVbBFpNqMFJCGuvxcBUWiLQRbxG_vQ/viewform?usp=header";

export default function Main() {
  return (
    <div className="relative isolate overflow-hidden pt-10 sm:pt-14">
      {/* Background ambient decorative mesh (matching IntroSection / BookingApp) */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center space-x-2 text-sm text-gray-500">
          <Link
            href="/"
            className="hover:text-green-700 transition-colors duration-150"
          >
            Beranda
          </Link>
          <span>/</span>
          <span className="font-medium text-gray-900">Pendaftaran JPETS</span>
        </nav>

        {/* Hero title & intro */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-x-2 rounded-full bg-green-50 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-green-700 ring-1 ring-inset ring-green-600/20 mb-4">
            <span className="h-2 w-2 rounded-full bg-green-600 animate-pulse" />
            Official Panel Clinic JPETS
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Pendaftaran JPETS
          </h1>
          <p className="mt-2 text-sm font-medium uppercase tracking-wider text-green-700 sm:text-base">
            Japan Pre-Entry Tuberculosis Screening
          </p>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Klinik Utama Amalia Medical Center ditunjuk resmi sebagai Panel Clinic untuk pemeriksaan skrining tuberkulosis pra-keberangkatan ke Jepang. Silakan klik formulir pendaftaran di bawah ini untuk memulai pengisian data.
          </p>
        </div>

        {/* Quick instructions / Info cards */}
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border border-gray-200/80 bg-white/80 p-4 shadow-sm backdrop-blur">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
              <IdentificationIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Dokumen Wajib
              </h3>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                Siapkan paspor asli yang masih berlaku, pas foto terbaru, dan dokumen COE jika ada.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-gray-200/80 bg-white/80 p-4 shadow-sm backdrop-blur">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
              <BuildingOffice2Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Lokasi Klinik
              </h3>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                Graha Amalia, Jl. Dewi Sartika No. 364 A Cawang, Kramat Jati, Jakarta Timur.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-gray-200/80 bg-white/80 p-4 shadow-sm backdrop-blur">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-700">
              <PhoneIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Layanan Informasi
              </h3>
              <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                WhatsApp: <a href="https://wa.me/6281380804680" target="_blank" rel="noopener noreferrer" className="font-medium text-green-700 hover:underline">+62 813 808 046 80</a>
              </p>
            </div>
          </div>
        </div>

        {/* Gambar Banner JPETS (Clickable ke Google Form) */}
        <div className="mx-auto mt-10 max-w-4xl">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:border-green-400"
            title="Klik untuk membuka Formulir Pendaftaran Pasien JPETS"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src="/img/jpets.jpg"
                alt="Pendaftaran Pasien JPETS Amalia Medical Center"
                width={1200}
                height={670}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
              {/* Overlay badge info */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15 flex items-end justify-end p-4 sm:p-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs sm:text-sm font-semibold text-gray-900 shadow-md backdrop-blur transition group-hover:bg-green-600 group-hover:text-white">
                  <span>Buka &amp; Isi Formulir Pendaftaran</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Bottom helper card */}
        <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-green-100 bg-gradient-to-r from-green-50/60 to-emerald-50/60 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base font-semibold text-gray-900">
                Ada pertanyaan seputar persyaratan &amp; jadwal JPETS?
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Tim Amalia Medical Center siap membantu kelancaran persiapan keberangkatan Anda ke Jepang.
              </p>
            </div>
            <a
              href="https://wa.me/6281380804680?text=Halo%20Amalia%20Medical%20Center,%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20JPETS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom ambient blur decoration */}
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
}
