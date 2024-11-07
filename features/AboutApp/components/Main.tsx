import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Company", href: "#" },
];

const timeline = [
  {
    name: "Berdirinya Amalia",
    description:
      `Amalia Medical Center dinaungi oleh badan hukum Yayasan Solidaritas Kemanusiaan Amanah, yang berlokasi di pemukiman 
      Cipinang Cempedak, Jakarta Timur. Yayasan ini didirikan oleh Irjen.Pol (P). Prof. Dr. Farouk Muhammad, Yayasan ini 
      telah memberikan sumbangsih antara lain untuk anak-anak yatim, para janda, korban bencana alam, dan kaum dhuafa 
      lainnya.`,
    date: "2000",
    dateTime: "2000",
  },
  {
    name: "World of Medical Overseas Workers",
    description:
      `Kemudian, kami merekrut staf Profesional Medis di bidangnya, kami mulai terjun ke dalam "World of Medical Overseas Workers" untuk menghadiri dan berpartisipasi aktif dalam berbagai seminar dan diskusi yang berkaitan dengan 
      layanan kepada pekerja luar negeri atau tenaga kerja, yang diselenggarakan oleh berbagai pihak (Kementerian Tenaga 
      Kerja, Kementerian Kesehatan, Asosiasi lembaga, Asosiasi pusat medis/HIPTEK, dll).`,
    date: "2002",
    dateTime: "2002",
  },
  {
    name: "Perwakilan Rumah Sakit Pertamina untuk Pekerja Laut/Pekerja Maritim",
    description:
      `Dengan pengalaman dan banyak pembelajaran dari para ahli di Kementerian Kesehatan dan Kementerian Tenaga Kerja, 
      serta pengalaman sebagai Sekretaris Jenderal HIPTEK (Asosiasi rumah sakit dan pusat medis untuk tenaga kerja 
      Indonesia), pada tahun 2004, hasil audit oleh Tim Gabungan Kementerian Kesehatan dan Kementerian Tenaga Kerja 
      mengumumkan bahwa Amalia Medical Center memperoleh skor tertinggi di tingkat nasional. Pada tahun 2004-2005, 
      kami menjadi satu-satunya klinik medis di Jakarta yang mendapat kepercayaan dari rumah sakit ternama, yaitu 
      Rumah Sakit Pertamina, sebagai perwakilan untuk pemeriksaan kesehatan pekerja laut/maritim untuk Taiwan. 
      Pada tahun yang sama, kami mengubah bentuk hukum menjadi Perusahaan Swasta (PT) tanpa meninggalkan yayasan.`,
    date: "2004",
    dateTime: "2004",
  },
  {
    name: "Pusat Medis Modern untuk Tenaga Kerja Luar Negeri di Indonesia",
    description:
      `Dengan kepercayaan dari lembaga-lembaga terpercaya nasional dan internasional, serta didukung oleh peralatan 
      canggih dan sumber daya manusia yang berkualitas, serta hasil kategori PME terbaik, pada tahun 2014, 
      Amalia Medical Center merancang dan membangun gedung baru dengan pertimbangan yang matang untuk mengantisipasi 
      kebijakan yang tegas dan detail dari negara-negara luar negeri di masa depan. Langkah ini dilakukan untuk 
      menyelaraskan dengan program kami dalam meningkatkan kualitas dan memberikan layanan yang lebih baik kepada 
      pelanggan. Gedung ini terdiri dari 5 lantai dengan total luas 1.250 meter persegi, termasuk basement untuk area 
      parkir. Kami juga memasang mesin Digital X-ray baru sebesar 500 mA dengan detektor beresolusi tinggi, 
      jaringan LAN (local area network), lift, generator berkapasitas 70 KVA, CCTV, running text untuk berbagai 
      informasi, dan lain-lain. Saat ini, gedung ini dianggap sebagai pusat medis terbesar dan tercanggih untuk 
      tenaga kerja luar negeri di Indonesia.`,
    date: "2014",
    dateTime: "2014",
  },
];

const comfort = [
  {
    id: 1,
    role: "Caring",
    href: "#",
    description:
      "Kepedulian adalah sikap kami terhadap pelanggan. Dengan sikap peduli maka pelanggan akan lebih mudah dalam berinteraksi dengan karyawan.",
  },
  {
    id: 2,
    role: "Observant",
    href: "#",
    description:
      "Selain observant yang artinya adalah memperhatikan dengan teliti. Observant juga kami artikan dengan taat kepada peraturan yang berlaku, baik kode etik tenaga medis maupun kode etik tenaga kerja. Kami mengamati kebutuhan pelanggan dan memperhatikan kepuasan Anda.",
  },
  {
    id: 3,
    role: "Mindful",
    href: "#",
    description:
      "Kami melakukan pekerjaan dengan penuh hati- hati, pengamatan jeli untuk pengambilan keputusan dan hasil laboratorium adalah hal yang wajib.",
  },
  {
    id: 4,
    role: "Friendly",
    href: "#",
    description:
      "Keramah-tamahan kami akan dapat mempererat hubungan antara karyawan, medis maupun non medis dengan pelanggan.",
  },
  {
    id: 5,
    role: "Obliging",
    href: "#",
    description:
      "Kami sigap membantu siapa saja yang membutuhkan pertolongan. Dibawah naungan yayasan social, membantu orang lain telah tertanam pada jiwa kami.",
  },
  {
    id: 6,
    role: "Responsible",
    href: "#",
    description:
      "Melakukan tugas dalam pekerjaan adalah termasuk menjalankan ibadah bagi kami. Kami siap bertanggung jawab atas segala yang kami kerjakan. Mawas diri terhadap rasa tanggung jawab ini membuat kami akan lebih berhati-hati setiap hal apapun yang kami lakukan.",
  },
  {
    id: 7,
    role: "Tactful",
    href: "#",
    description:
      "Kami belajar menjadi bijaksana setiap hari. Melalui perjalanan Amalia Medical Center yang panjang dan berliku-liku, kami belajar dan terus belajar menjadi pribadi yang lebih baik. Dimulai dari pribadi masing-masing, maka Amalia Medical Center terbentuk oleh pribadi yang unggul.",
  },
];

const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-green-100/20">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Kami berkomitmen untuk membangun masa depan melalui pelayanan
                kesehatan di Amalia Medical Center.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Di Amalia Medical Center, kami selalu berusaha memberikan
                  perawatan terbaik bagi setiap pasien. Kami berkomitmen untuk
                  terus meningkatkan kualitas pelayanan kesehatan dengan
                  memanfaatkan teknologi terbaru dan pendekatan yang berpusat
                  pada pasien.
                </p>
              </div>
              <img
                src="img/facility/contactus.png"
                alt=""
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
              />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        {/* Timeline section */}
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visi Misi */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Misi - Visi
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
              <p className="mx-auto max-w-xl text-left text-lg leading-8 text-gray-300">
                Menyediakan pelayanan kesehatan yang komprehensif untuk pekerja
                dengan praktek medis yang berlaku, bersyarat ilmiah dan
                berstandar internasional.
              </p>
              <p className="mx-auto max-w-xl text-left text-lg leading-8 text-gray-300">
                Terus mengembangkan diri melalui Program Jaminan Kualitas,
                menanamkan pengetahuan di sumber daya manusia dan meningkatkan
                peralatan, dan juga Informasi Teknologi (IT).
              </p>
              <p className="mx-auto max-w-xl text-left text-lg leading-8 text-gray-300">
                Menjadikan kami sebagai kontributor tunggal “Amanah” dari
                yayasan solidaritas manusia untuk sosial dan kesejahteraan
                kemanusiaan.
              </p>
            </div>
            <div
              className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Budaya Kami
                </h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Budaya perusahaan Amalia Medical Center diambil dari kata
                  COMFORT dan ditanamkan bagi seluruh karyawan-karyawati
                  sehingga menjadi bagian dari kesadaran dan budaya kerja
                  perusahaan.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Comfort artinya memiliki perasaan nikmat hingga muncul efek
                  nyaman dalam diri kita. Hal yang lebih penting dari Comfort
                  adalah kami menginginkan pelanggan yang datang ke Amalia
                  Medical Center merasakan kenyamanan itu sendiri. Dengan
                  demikian, kepuasan kami adalah refleksi dari kepuasan
                  pelanggan. Harapan kami adalah agar pelanggan mengajak sanak
                  saudara atau rekan sejawat untuk mempercayakan kepada kami
                  sebagai tempat pemeriksaan kesehatan.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="img/facility/fasilitas13.png"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <img
                      src="img/facility/fasilitas18.png"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <img
                      src="img/facility/fasilitas15.png"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="img/facility/fasilitas20.png"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
            <div className="w-full lg:max-w-lg lg:flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <i>Comfort</i> telah kami rasakan dalam bidang yang kami tekuni
                saat ini.
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Mulai dari pekerjaan yang kami lakukan, tugas yang harus kami
                selesaikan, serta melayani pelanggan dengan sepenuh hati, juga
                kami lakukan dengan nyaman.
              </p>
              <img
                src="img/facility/fasilitas12.png"
                alt=""
                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
              <img
                src="img/facility/fasilitas19.png"
                alt=""
                className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
            <div className="w-full lg:max-w-xl lg:flex-auto">
              <h3 className="sr-only">Comfort</h3>
              <ul className="-my-8 divide-y divide-gray-100">
                {comfort.map((opening) => (
                  <li key={opening.id} className="py-8">
                    <dl className="relative flex flex-wrap gap-x-3">
                      <dt className="sr-only">Role</dt>
                      <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                        <a href={opening.href}>
                          {opening.role}
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                        </a>
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                        {opening.description}
                      </dd>
                      <dt className="sr-only">Salary</dt>
                      <dd className="mt-4 text-base font-semibold leading-7 text-gray-900"></dd>
                      <dt className="sr-only">Location</dt>
                      <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                        <svg
                          viewBox="0 0 2 2"
                          className="h-0.5 w-0.5 flex-none fill-gray-300"
                          aria-hidden="true"
                        >
                          <circle cx={1} cy={1} r={1} />
                        </svg>
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider and Get in touch section */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 lg:mx-0 lg:max-w-none divide-y divide-gray-100">
            {/* Divider */}
            <hr className="my-20 border-t border-gray-100" />

            {/* Get in touch section */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 pt-2 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Hubungi Kami</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih lanjut mengenai layanan kami, kami siap membantu Anda dengan segala kebutuhan kesehatan Anda.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Telepon</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd>+62 (21) 8090 762</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Fax</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div className="mt-1">
                      <dt className="sr-only">Fax number</dt>
                      <dd>+62 (21) 8088 4802</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Whatsapp</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div className="mt-1">
                      <dt className="sr-only">Whatsapp number</dt>
                      <dd>+62 813 808 046 80</dd>
                    </div>
                  </dl>
                </div>
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Email</h3>
                  <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a className="font-semibold text-green-600" href="mailto:amaliamedicalcenter.cs@gmail.com">
                          amaliamedicalcenter.cs@gmail.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Locations section */}
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Lokasi</h2>
                <p className="mt-4 leading-7 text-gray-600">
                  Temukan lokasi kami dengan mudah melalui peta di bawah ini.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Amalia Medical Center</h3>
                  <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-600">
                    <p>Jl. Dewi Sartika 364 A Cawang,</p>
                    <p>Jakarta Timur 13630</p>
                  </address>
                  <div className="mt-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.498041633746!2d106.85097901532168!3d-6.234703195484332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992dd3fcdb5e1%3A0x4b3775676b5eb6e!2sJl.%20Dewi%20Sartika%20No.364A%2C%20Cawang%2C%20Kec.%20Kramat%20jati%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013630!5e0!3m2!1sen!2sid!4v1628153547754!5m2!1sen!2sid"
                      width="100%"
                      height="400"
                      allowFullScreen
                      loading="lazy"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
