import { InformationCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function PekerjaMigranCare() {
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
            className="aspect-video w-full h-[300px] rounded-xl bg-gray-50 object-cover object-top"
            src="/img/facility/migran-worker.jpg"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Ilustrasi Pekerja Migran
          </figcaption>
        </figure>
        <p className="mt-6 text-base font-semibold leading-7 text-green-600">
          #MedicalCheckUp #Pekerja #Migran
        </p>
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pemeriksaan MCU untuk Calon Pekerja Migran
        </h1>
        <div className="mt-10 max-w-2xl">
          <p>
            Calon Pekerja Migran Indonesia (PMI) adalah setiap warga negara Indonesia yang memenuhi syarat sebagai
            pencari kerja untuk bekerja di Luar Negeri dan terdaftar di Instansi Pemerintah Kabupaten/Kota yang
            bertanggung jawab di bidang ketenagakerjaan, sesuai proses dan prosedur yang telah ditetapkan.
            Salah satu lapangan pekerjaan yang banyak diminati oleh pekerja Indonesia adalah menjadi Pekerja Migran,
            Namun Pekerja Migran asal Indonesia atau disingkat PMI ini sering kali menjadi PMI Non Prosedural karena
            tidak melalui mekanisme dan persyaratan PMI yang benar.<br />
            Ada 5 (lima) mekanisme penempatan bekerja ke luar negeri, yaitu:
          </p>
          <ul role="list"
            className="max-w-xl list-disc space-y-2 pl-6 text-gray-600">
            <li>
              Private to Private (P to P)
            </li>
            <li>
              Government to Government (G to G)
            </li>
            <li>
              Government to Private (G to P)
            </li>
            <li>
              Intern Corporate Trasfership (ICT)
            </li>
            <li>
              Pekerja Migran Perseorangan (Mandiri)
            </li>
          </ul><br />
          <p>
            Untuk peluang kerja, masyarakat dapat mengakses <a className="text-green-600 hover:text-red-600" href="http://jobsinfo.bp2mi.go.id/">http://jobsinfo.bp2mi.go.id/ </a>
            serta <a className="text-green-600 hover:text-red-600" href="http://siskop2mi.bp2mi.go.id">http://siskop2mi.bp2mi.go.id</a>
          </p>
          <h3 className="mt-6 text-xl leading-8">Apa syaratnya?</h3>
          <p className="mt-2">
            Adapun persyaratan bagi calon Pekerja Migran Indonesia yang akan bekerja ke luar negeri harus memenuhi persyaratan
            berusia minimal 18 (delapan belas) tahun, memiliki kompetensi, sehat jasmani dan rohani, terdaftar dan memiliki
            nomor kepesertaan Jaminan Sosial dan memiliki dokumen lengkap yang dipersyaratkan.<br />
            Amalia Medical Center membuka medical check up ke luar negeri untuk tujuan Negara Asean serta Taiwan, Jepang,
            Korea, serta China. Semua paket bisa disesuaikan dengan kebutuhan si calon pasien MCU serta jenis pemeriksaan yang diambil.<br />
            Persyaratan untuk melakukan MCU adalah:
          </p>
          <ul role="list"
            className="max-w-xl list-decimal space-y-2 pl-6 text-gray-600">
            <li>
              Membawa fotokopi passport serta KTP
            </li>
            <li>
              Membawa pasfoto 3x4 atau 4x6 dengan background merah atau biru
            </li>
            <li>
              Membawa surat-surat pelengkap berkas
            </li>
            <li>
              Istirahat yang cukup, minum air putih serta menghindari minum kopi serta alcohol sebelum medical.
            </li>
            <li>
              Pastikan MCU-nya di Amalia Medical Center ya kakak – kakak.
            </li>
          </ul><br />
          <p>
            Untuk pemeriksaanya terdiri dari 3 unsur pemeriksaan, pengambilan sample darah dan urin, pengambilan foto
            thorax, pemeriksaan fisik di ruang dokter. Untuk harga MCU disesuaikan dengan Negara tujuannya,
            dengan tarif dasarnya berkisar dari <strong>250rb!</strong>.<br />
            Pasti dapat harga terbaik MCU di Amalia Medical Center!
          </p>
        </div>
      </div>
    </div>
  );
}
