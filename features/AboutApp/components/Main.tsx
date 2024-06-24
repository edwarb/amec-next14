import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react';

const timeline = [
  {
    name: 'Berdirinya Amalia',
    description:
      'Amalia medical center dinaungi oleh badan hukum Yayasan Solidaritas Kemanusiaan Amanah, yang berlokasi di pemukiman Cipinang Cempedak, Jakarta Timur. Yayasan ini didirikan oleh Irjen.Pol (P). Prof. Dr. Farouk Muhammad, Yayasan ini telah memberikan sumbangsih antara lain untuk anak-anak yatim, para janda, korban bencana alam, dan kaum dhuafa lainnya.',
    date: '2000',
    dateTime: '2000',
  },
  {
    name: 'Secured $65m in funding',
    description:
      'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
    date: '2001',
    dateTime: '2001',
  },
  {
    name: 'Released beta',
    description:
      'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
    date: '2002',
    dateTime: '2002',
  },
  {
    name: 'Global launch of product',
    description:
      'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
    date: '2020',
    dateTime: '2020',
  },
]

const comfort = [
  {
    id: 1,
    role: 'Caring',
    href: '#',
    description:
      'Kepedulian adalah sikap kami terhadap pelanggan. Dengan sikap peduli maka pelanggan akan lebih mudah dalam berinteraksi dengan karyawan.',
  },
  {
    id: 2,
    role: 'Observant',
    href: '#',
    description:
      'Selain observant yang artinya adalah memperhatikan dengan teliti. Observant juga kami artikan dengan taat kepada peraturan yang berlaku, baik kode etik tenaga medis maupun kode etik tenaga kerja. Kami mengamati kebutuhan pelanggan dan memperhatikan kepuasan Anda.',
  },
  {
    id: 3,
    role: 'Mindful',
    href: '#',
    description:
      'Kami melakukan pekerjaan dengan penuh hati- hati, pengamatan jeli untuk pengambilan keputusan dan hasil laboratorium adalah hal yang wajib.',
  },
  {
    id: 4,
    role: 'Friendly',
    href: '#',
    description:
      'Keramah-tamahan kami akan dapat mempererat hubungan antara karyawan, medis maupun non medis dengan pelanggan.',
  },
  {
    id: 5,
    role: 'Obliging',
    href: '#',
    description:
      'Kami sigap membantu siapa saja yang membutuhkan pertolongan. Dibawah naungan yayasan social, membantu orang lain telah tertanam pada jiwa kami.',
  },
  {
    id: 6,
    role: 'Responsible',
    href: '#',
    description:
      'Melakukan tugas dalam pekerjaan adalah termasuk menjalankan ibadah bagi kami. Kami siap bertanggung jawab atas segala yang kami kerjakan. Mawas diri terhadap rasa tanggung jawab ini membuat kami akan lebih berhati-hati setiap hal apapun yang kami lakukan.',
  },
  {
    id: 7,
    role: 'Tactful',
    href: '#',
    description:
      'Kami belajar menjadi bijaksana setiap hari. Melalui perjalanan Amalia Medical Center yang panjang dan berliku-liku, kami belajar dan terus belajar menjadi pribadi yang lebih baik. Dimulai dari pribadi masing-masing, maka Amalia Medical Center terbentuk oleh pribadi yang unggul.',
  },
]

export default function About() {

  return (
    <div className="bg-white">
      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-green-100/20 pt-14">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-green-600/10 ring-1 ring-green-50 sm:-mr-80 lg:-mr-96"
            aria-hidden="true"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Kami berkomitmen untuk membangun
                masa depan melalui pelayanan kesehatan di Amalia Medical Center.
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 text-gray-600">
                  Di Amalia Medical Center, kami selalu berusaha memberikan perawatan terbaik bagi setiap pasien.
                  Kami berkomitmen untuk terus meningkatkan kualitas pelayanan kesehatan dengan memanfaatkan teknologi terbaru dan
                  pendekatan yang berpusat pada pasien.
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
                  <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
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
              <p className="mx-auto max-w-xl text-lg leading-8 text-gray-300 text-left">
                Menyediakan pelayanan kesehatan yang komprehensif untuk pekerja dengan praktek medis yang berlaku, bersyarat ilmiah dan berstandar internasional.
              </p>
              <p className="mx-auto max-w-xl text-lg leading-8 text-gray-300 text-left">
                Terus mengembangkan diri melalui Program Jaminan Kualitas, menanamkan pengetahuan di sumber daya manusia dan meningkatkan peralatan, dan juga Informasi Teknologi (IT).
              </p>
              <p className="mx-auto max-w-xl text-lg leading-8 text-gray-300 text-left">
                Menjadikan kami sebagai kontributor tunggal “Amanah” dari yayasan solidaritas manusia untuk sosial dan kesejahteraan kemanusiaan.
              </p>
            </div>
            <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
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
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Budaya Kami</h2>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Budaya perusahaan Amalia Medical Center diambil dari kata COMFORT dan ditanamkan bagi seluruh karyawan-karyawati
                  sehingga menjadi bagian dari kesadaran dan budaya kerja perusahaan.
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  Comfort artinya memiliki perasaan nikmat
                  hingga muncul efek nyaman dalam diri kita. Hal yang lebih penting dari Comfort adalah kami menginginkan pelanggan yang datang ke Amalia Medical Center
                  merasakan kenyamanan itu sendiri. Dengan demikian, kepuasan kami adalah refleksi dari kepuasan pelanggan.
                  Harapan kami adalah agar pelanggan mengajak sanak saudara atau rekan sejawat untuk mempercayakan kepada kami
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
                <i>Comfort</i> telah kami rasakan dalam bidang yang kami tekuni saat ini.
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-600">
                Mulai dari pekerjaan yang kami lakukan, tugas yang harus kami selesaikan, serta melayani pelanggan dengan
                sepenuh hati, juga kami lakukan dengan nyaman.
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
                          <span className="absolute inset-0" aria-hidden="true" />
                        </a>
                      </dd>
                      <dt className="sr-only">Description</dt>
                      <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">{opening.description}</dd>
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
  )
}
