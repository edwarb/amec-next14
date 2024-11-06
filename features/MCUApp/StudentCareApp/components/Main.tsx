import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function StudentCare() {
  return (
    <div className="relative bg-white px-6 lg:px-8">
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
            className="aspect-video w-full h-[300px] rounded-xl bg-gray-50 object-cover object-bot"
            src="/img/facility/student.jpg"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Ilustrasi Pelajar
          </figcaption>
        </figure>
        <p className="mt-6 text-base font-semibold leading-7 text-green-600">
          #MedicalCheckUp #Student #Taiwan
        </p>
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pemeriksaan MCU ke Taiwan Untuk Pelajar
        </h1>
        <div className="mt-10 max-w-2xl">
          <p>
            Umumnnya MCU bukan hanya untuk kebutuhan dalam negeri saja, melainkan bisa untuk ke luar negeri.
            Kebutuhan MCU untuk luar negeri dibutuhkan untuk calon pelajar maupun calon pekerja.
            Untuk Amalia Medical Center memiliki 2 jenis pemeriksaan MCU untuk Pelajar serta Pekerja.
          </p>
          <h3 className="mt-6 text-xl leading-8">Apa ya yang membedakannya?</h3>
          <p className="mt-2">
            Untuk pemeriksaan dasarnya berupa cek darah, urin, thorax, dan fisik. Namun untuk MCU Taiwan memiliki
            tambahan  tes tinja serta ditambahkan vaksin MMR atau MR. Untuk vaksin MMR atau MR bisa disesuaikan oleh
            kebutuhan calon pelajar maupun calon pekerjanya.<br /><br />
            MCU Taiwan untuk pelajar meliputi pemeriksaan darah (HBSAG, HIV, VDRL+TPHA),
            pemeriksaan urin (warna, ph, HCG, gula dalam urin), pemeriksaan tinja (warna, darah, bentuk)
            yang bisa di ambil samplenya langsung ketika hari kedatangan MCU.
            Untuk pemeriksaan fisiknya berupa cek dokter, cek mata, cek tensi + tinggi berat badan,
            pemberian vaksin MR/MMR, dan yang terakhir cek rontgen.
          </p>
          <ul
            role="list"
            style={{ listStyleType: 'upper-alpha' }}
            className="mt-8 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
          >
            <li>
              <strong>Rincian fungsi serta peran pemeriksaan darah</strong>
              <br />
              <ul role="list"
                className="max-w-xl list-disc space-y-2 pl-6 text-gray-600">
                <li>
                  HBsAg adalah salah satu tes laboratorium yang umum digunakan untuk mendeteksi infeksi hepatitis B.
                  Tes ini dapat dilakukan sebagai bagian dari pemeriksaan kesehatan rutin, skrining donor darah, atau
                  dalam kasus-kasus di mana ada kecurigaan adanya infeksi hepatitis B.
                </li>
                <li>
                  HIV (Human Immunodeficiency Virus) adalah virus yang menyerang sistem kekebalan tubuh yang dapat melemahkan
                  kemampuan tubuh melawan infeksi dan penyakit.
                </li>
                <li>
                  PHA dan VDRL adalah pemeriksaan laboratorium untuk mengetahui apakah seseorang terinfeksi bakteri Treponema pallidum
                  yang menyebabkan penyakit Sifilis atau "rajasinga".
                </li>
              </ul>
            </li>
            <li>
              <strong>Rincian fungsi serta peran pemeriksaan urin</strong>
              <br />
              Tes urine atau urinalisis adalah jenis pemeriksaan medis yang menggunakan urine untuk mengidentifikasi
              masalah kesehatan. Pemeriksaan ini biasanya dokter minta untuk mendiagnosis gangguan pada saluran kemih.
              Misalnya untuk memeriksa diabetes, penyakit ginjal, dan infeksi saluran kemih. Tes ini juga dapat kamu lakukan saat
              berada di rumah sakit, sebelum operasi, atau saat sedang hamil.<br />
              Urinalisis umumnya dokter gunakan untuk menganalisa warna, konsentrasi, dan kandungan pada urine.
              Misalnya, warna urine yang terlihat lebih keruh dan tidak bening bisa menjadi tanda infeksi saluran kemih.
            </li>
            <li>
              <strong>Rincian fungsi serta peran pemeriksaan tinja</strong>
              <br />
              Kultur feses/ tes tinja adalah pemeriksaan menggunakan sampel feses yang dikultur/ditumbuhkan pada media khusus untuk
              melihat jenis bakteri yang terdapat pada feses. Jika ditemukan bakteri patogen maka pemeriksaan akan dilanjutkan dengan
              uji kepekaan antibiotik. Bakteri yang peka pada antibiotik tertentu tidak mengalami pertumbuhan.
            </li>
            <li>
              <strong>Vaksin MR/MMR</strong>
              <br />
              Setiap pelajar yang MCU ke Taiwan, diwajibkan untuk mengambil vaksin MR/MMR. Vaksin MR dan vaksin MMR merupakan
              bagian dari program imunisasi yang diselenggarakan oleh pemerintah. Namun, apakah perbedaan dari
              kedua vaksin tersebut?  Vaksin MR diberikan untuk mencegah terjadinya penyakit yang disebabkan oleh
              virus campak (measles) dan rubella (campak jerman). Sementara vaksin MMR juga digunakan untuk mencegah kedua
              penyakit tersebut, hanya saja dilengkapi dengan vaksin penyakit gondongan (mumps).<br />
              Perbedaan antara vaksin MR dan MMR adalah kandungan mumps untuk melawan penyakit gondongan yang tidak lagi dimasukkan
              ke dalam vaksin MR.<br />
              Bukti pemberian vaksin MR/MMR tercetak, sehingga memudahkan calon penggunanya tersimpan sebagai arsip MCU.
            </li>
          </ul>
          <figure className="mt-16">
            <Image
              width={0}
              height={0}
              className="aspect-video w-full rounded-xl bg-gray-50 object-cover"
              src="/img/facility/student-mcu.jpg"
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon
                className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                aria-hidden="true"
              />
              Ilustrasi Medical Check Up Student
            </figcaption>
          </figure>
          <h3 className="mt-6 text-xl leading-8">Saya mau nih kak MCU pelajar, gimana caranya?</h3>
          <p className="mt-2">
            Mudah banget! Di Klinik Amalia Medical center dengan harga <b>800rb aja</b> sudah bisa MCU + Hasil hard print!
            Jika mau pakai vaksin MMR bisa membayar 1,4jt. Terjangkau kan? Hasil bisa 2-3 hari kerja.<br />
            Jangan lupa cek syaratnya:
          </p>
          <ul role="list"
            className="max-w-xl list-disc space-y-2 pl-6 text-gray-600">
            <li>
              Membawa fotokopi passport serta KTP
            </li>
            <li>
              Membawa pasfoto 3x4 atau 4x6 dengan background merah atau biru
            </li>
            <li>
              Membawa surat yang dibutuhkan oleh kampus, biasanya ada keterangan yang memang harus pihak klinik isi.
            </li>
            <li>
              Istirahat yang cukup, minum air putih serta menghindari minum kopi serta alcohol sebelum medical.
            </li>
            <li>
              Pastikan MCU-nya di Amalia Medical Center ya kakak – kakak.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
