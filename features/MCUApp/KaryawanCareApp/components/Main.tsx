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
            className="aspect-video w-full h-[300px] rounded-xl bg-gray-50 object-cover object-bot"
            src="/img/facility/karyawan.jpg"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon
              className="mt-0.5 h-5 w-5 flex-none text-gray-300"
              aria-hidden="true"
            />
            Ilustrasi Karyawan
          </figcaption>
        </figure>
        <p className="mt-6 text-base font-semibold leading-7 text-green-600">
          #MedicalCheckUp #Pekerja #Karyawan
        </p>
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pemeriksaan MCU untuk Karyawan
        </h1>
        <div className="mt-10 max-w-2xl">
          <p>
            Medical check up karyawan adalah tindakan medis yang dilakukan untuk memeriksa kondisi tubuh karyawan atau
            calon karyawan pada suatu lingkungan kerja. Tujuan medical check up karyawan adalah untuk menjaga kesehatan
            tubuh pekerja agar terhindar dari berbagai macam penyakit yang dapat mengganggu produktivitas.<br />
            Tak hanya bermanfaat bagi pekerja, medical check up karyawan juga turut mengurangi ketidakhadiran karena sakit
            serta meningkatkan produktivitas dan citra perusahaan di masyarakat secara umum.
          </p>
          <h3 className="mt-6 text-xl leading-8">Jenis Medical Check Up Karyawan</h3>
          <p className="mt-2">
            Medical check up karyawan dikelompokkan ke dalam dua kategori, yaitu berdasarkan waktu pelaksanaan dan jenis
            pekerjaan. Berikut masing-masing penjelasannya.
          </p>
          <ul
            role="list"
            style={{ listStyleType: 'upper-alpha' }}
            className="mt-8 max-w-xl list-disc space-y-2 pl-6 text-gray-600"
          >
            <li>
              <strong>Medical Check Up Karyawan Berdasarkan Waktu Pelaksanaan</strong>
              <p>
                Berdasarkan waktu pelaksanaannya, medical check up untuk karyawan dibedakan menjadi tiga jenis, yaitu sebelum
                bekerja, rutinitas, dan khusus.
              </p>
              <ul role="list"
                className="max-w-xl list-decimal space-y-2 pl-6 text-gray-600">
                <li>
                  Medical Check Up Calon Pekerja
                  <p>
                    Sesuai dengan namanya, medical check up ini dilakukan untuk menilai kesiapan fisik serta mencegah penularan
                    penyakit infeksi sebelum calon pekerja diterima menjadi karyawan. Pemeriksaan yang umum dilakukan dalam medical
                    check up sebelum bekerja adalah skrining fisik lengkap, tes laboratorium, dan foto rontgen paru-paru.
                  </p>
                </li>
                <li>
                  Medical Check Up Berkala
                  <p>
                    Medical check up berkala merupakan pemeriksaan kesehatan yang dilakukan secara rutin sesuai dengan risiko di
                    lingkungan kerja karyawan tersebut. Medical check up berkala biasanya dilakukan minimal setahun sekali.
                  </p>
                </li>
                <li>
                  Medical Check Up Khusus
                  <p>
                    Medical check up khusus merupakan jenis medical check up untuk mendeteksi risiko dan pengaruh pekerjaan terhadap
                    golongan pekerja tertentu, seperti:
                  </p>
                  <ul role="list"
                    className="max-w-xl list-disc space-y-2 pl-6 text-gray-600">
                    <li>
                      Karyawan yang mengalami kecelakaan selama bekerja.
                    </li>
                    <li>
                      Karyawan berusia di atas 40 tahun.
                    </li>
                    <li>
                      Karyawan yang memiliki disabilitas.
                    </li>
                    <li>
                      Karyawan yang mengidap gangguan kesehatan tertentu.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Medical Check Up Karyawan Berdasarkan Jenis Pekerjaan</strong>
              <br />
              Karena setiap pekerjaan memiliki risiko tersendiri, medical check up juga perlu disesuaikan dengan bidang pekerjaan
              karyawan tersebut, seperti:
              <ul role="list"
                className="max-w-xl list-disc space-y-2 pl-6 text-gray-600">
                <li>
                  Karyawan yang bekerja di tempat bising, seperti pabrik atau maintenance mesin, memerlukan skrining fungsi
                  pendengaran melalui pemeriksaan audiometri.
                </li>
                <li>
                  Karyawan di lingkungan kerja yang bisa memengaruhi pernapasan, seperti pabrik semen atau penyemprotan cat mobil, memerlukan skrining fungsi paru melalui pemeriksaan spirometri.
                </li>
              </ul>
            </li>
          </ul>
          <h3 className="mt-6 text-xl leading-8">Persiapan Medical Check Up Karyawan</h3>
          <p className="mt-2">
            Sebelum menjalani medical check up, karyawan dianjurkan untuk mempersiapkan diri dengan berpuasa dan menjaga
            kesehatan tubuh. Adapun penjelasan lengkap mengenai persiapan medical check up kerja adalah sebagai berikut:
          </p>
          <ul role="list"
            className="max-w-xl list-disc space-y-2 pl-6 text-gray-600">
            <li>
              Puasa selama 8–12 jam sebelum melakukan pemeriksaan. Lama waktu puasa ini disesuaikan dengan jenis pemeriksaan
              yang akan dilakukan.
            </li>
            <li>
              Mengenakan pakaian berlengan pendek agar memudahkan dokter untuk mengambil sampel darah pada bagian lengan atas.
            </li>
            <li>
              Mencukupi waktu tidur minimal 7–9 jam pada malam hari sebelum pemeriksaan. Pasalnya, kurang tidur dapat
              memengaruhi hasil pemeriksaan tekanan darah, denyut jantung, serta suhu tubuh.
            </li>
          </ul>
          <p>
            Jika memiliki riwayat atau sedang menderita penyakit tertentu, karyawan atau calon karyawan dianjurkan untuk
            membawa hasil pemeriksaan sebelumnya.
          </p>
          <h3 className="mt-6 text-xl leading-8">Prosedur Medical Check Up Karyawan</h3>
          <p className="mt-2">
            Pada dasarnya, prosedur medical check up karyawan akan melalui serangkaian pemeriksaan medis, di antaranya:
          </p>
          <ul role="list"
            className="max-w-xl list-decimal space-y-2 pl-6 text-gray-600">
            <li>
              Pemeriksaan Laboratorium
              <p>
                Pemeriksaan ini dilakukan dengan mengambil sampel darah, urine, dan tinja untuk dianalisis pada laboratorium.
                Tes darah, bertujuan untuk menghitung jumlah sel darah, zat kimia penanda fungsi organ, gula darah kolesterol,
                fungsi organ hati, dan ginjal. Tes urine (urinalisis), dilakukan untuk mendeteksi infeksi saluran kemih, diabetes,
                penyakit ginjal, dan gangguan hati. Dan yang terakhir adalah Tes tinja, yaitu prosedur pemeriksaan dengan
                menganalisis kadar zat dan bakteri dalam tinja untuk mendeteksi gangguan pencernaan, seperti radang usus atau
                gastroenteritis. Hanya saja tes tinja berlaku di paket pemeriksaan tertentu yang membutuhkan saja.
              </p>
            </li>
            <li>
              Pemeriksaan Rontgen
              <p>
                Rontgen adalah prosedur pemeriksaan yang dilakukan dengan mengambil gambar organ dalam tubuh, seperti jantung
                dan paru-paru, mendeteksi kelainan atau infeksi pada organ tubuh tersebut.
              </p>
            </li>
            <li>
              Pemeriksaan Elektrokardiogram (EKG)
              <p>
                Elektrokardiogram (EKG) adalah prosedur pemeriksaan dengan menempelkan elektroda di bagian dada, lengan, dan
                tungkai pasien untuk melihat aktivitas listrik serta gangguan yang terjadi pada organ jantung.
              </p>
            </li>
            <li>
              Pemeriksaan Audiometri
              <p>
                Pemeriksaan audiometri atau prosedur pemeriksaan untuk mengevaluasi fungsi pendengaran karyawan dengan mendengarkan
                suara nada, atau frekuensi tertentu.
              </p>
            </li>
            <li>
              Pemeriksaan Spirometri
              <p>
                Spirometri adalah tes untuk mengevaluasi fungsi paru menggunakan sebuah alat bernama spirometer. Nantinya, alat
                tersebut akan mencatat jumlah udara yang dihirup serta diembuskan oleh pasien.
              </p>
            </li>
            <li>
              Tes Buta Warna
              <p>
                Tes buta warna yang umum dilakukan adalah metode Ishihara. Melalui pemeriksaan ini, pasien diminta untuk
                menyebutkan angka berwarna yang disisipkan pada titik-titik warna.
              </p>
            </li>
            <li>
              Tes Dokter
              <p>
                Tes dokter untuk cek tensi, tinggi badan, berat badan, cek mata serta pemeriksaan fisik.
              </p>
            </li>
            <li>
              Penilaian Hasil Medical Check Up Karyawan
              <p>
                Penilaian hasil medical check up dibuat berdasarkan tempat kerja serta proses kerja yang dijalani oleh setiap
                karyawan. Umumnya, hasil medical check up ini dikelompokkan ke dalam beberapa indikator penilaian, yaitu:
              </p>
              <ul role="list"
                className="max-w-xl list-disc space-y-2 pl-6 text-gray-600">
                <li>
                  Fit to work (sehat atau layak bekerja).
                </li>
                <li>
                  Fit with note (sehat atau laik bekerja dengan catatan).
                </li>
                <li>
                  Unfit (tidak sehat atau tidak laik bekerja).
                </li>
              </ul>
            </li>
          </ul>
          <br/>
          <p>
            Medical check up karyawan penting untuk dilakukan karena dapat memengaruhi motivasi serta produktivitas karyawan
            selama bekerja. Karena itu, Anda bisa memesan paket medical check up karyawan di Amalia Medical Center untuk
            memeriksa kesehatan karyawan Anda secara keseluruhan.
          </p>
        </div>
      </div>
    </div>
  );
}
