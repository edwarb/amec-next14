import { InformationCircleIcon } from '@heroicons/react/20/solid';

export default function DemamKuning() {
  return (
    <div className="relative bg-white px-6 lg:px-8">
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
            className="aspect-video w-full h-[300px] rounded-xl bg-gray-50 object-cover object-bot"
            src="/img/disease/demamkuning01.png"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
            Ilustrasi nyamuk Aedes Aegypti
          </figcaption>
        </figure>
        <p className="mt-14 text-base font-semibold leading-7 text-green-600">#DemamKuning #YellowFever</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Demam Kuning</h1>
        <div className="mt-10 max-w-2xl">
          <p>
            Demam kuning atau yellow fever adalah jenis penyakit yang disebabkan oleh virus dan ditularkan melalui
            perantara nyamuk. Penyakit ini ditandai dengan demam tinggi, serta mata dan kulit yang menguning akibat
            penurunan fungsi hati. Umumnya, demam kuning ditemukan di wilayah Afrika, Amerika Selatan, Amerika Tengah,
            dan Karibia. Demam kuning dapat menyerang penduduk yang tinggal di daerah endemik dan para turis yang
            sedang mengunjungi daerah tersebut.
          </p>
          <h3 className="mt-6 text-xl leading-8">Penyebab Demam Kuning</h3>
          <p className="mt-2">
            Demam kuning disebabkan oleh virus yang berasal dari genus Flavivirus, dan disebarkan oleh nyamuk
            Aedes aegypti. Jenis nyamuk ini berkembang di lingkungan sekitar manusia. Bahkan, nyamuk Aedes aegypti
            juga berkembang biak di air bersih. Nyamuk Aedes aegypti membawa virus demam kuning setelah menggigit
            manusia atau monyet yang sedang terinfeksi. Virus kemudian memasuki aliran darah nyamuk dan menetap di
            kelenjar air liur (saliva) nyamuk. Ketika nyamuk itu kembali menggigit orang lain, virus akan memasuki
            tubuh orang tersebut melalui aliran darah dan menyebar di dalam tubuh. Waktu senja hingga fajar merupakan
            waktu ketika nyamuk Aedes aegypti sedang aktif, sehingga di waktu tersebut penyebaran virus demam kuning
            paling banyak terjadi.
          </p>

          <h3 className="mt-6 text-xl leading-8">Gejala Demam Kuning</h3>
          <p className="mt-2">
            Gejala demam kuning dapat dilihat berdasarkan tiga fase, yaitu:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-2 text-gray-600 list-decimal pl-6">
            <li>
              <strong>Fase inkubasi.</strong>
              Pada masa ini, virus yang masuk ke dalam tubuh belum menimbulkan
              tanda-tanda atau gejala. Masa inkubasi berlangsung selama 1-3 hari setelah terinfeksi.
            </li>
            <li>
              <strong>Fase akut.</strong>
              Fase ini terjadi pada hari ke-3 atau ke-4 setelah terinfeksi, dan dapat berlangsung selama 3-4 hari.
              Pada fase ini, penderita demam kuning mulai merasakan gejala-gejala yang meliputi:
              <ul className="my-2 max-w-xl space-y-4 text-gray-600 list-disc pl-6">
                <li>Demam</li>
                <li>Pusing</li>
                <li>Mata, wajah, atau lidah kemerahan</li>
                <li>Silau terhadap cahaya</li>
                <li>Nafsu makan menurun</li>
                <li>Nyeri otot</li>
                <li>Mual dan muntah</li>
              </ul>
              Setelah fase akut berakhir, gejala-gejala tersebut akan menghilang. Sebagian besar orang dapat sembuh
              dari demam kuning setelah fase ini. Namun, beberapa orang justru memasuki fase serius dari demam kuning,
              yaitu fase toksik, setelah 24 jam bebas gejala.
            </li>
            <li>
              <strong>Fase toksik.</strong>
              Pada fase ini, gejala demam kuning dirasakan kembali oleh penderita, dengan gejala yang lebih serius.
              Gejala-gejala tersebut meliputi:
              <ul className="my-2 max-w-xl space-y-4 text-gray-600 list-disc pl-6">
                <li>Kulit dan sklera (bagian putih mata) menguning</li>
                <li>Denyut jantung melambat</li>
                <li>Nyeri perut</li>
                <li>Muntah yang terkadang disertai muntah darah</li>
                <li>Mimisan, gusi berdarah, dan perdarahan dari mata</li>
                <li>Penurunan jumlah urine dan gagal ginjal</li>
                <li>Gagal hati</li>
                <li>Penurunan fungsi otak, meliputi delirium, kejang, hingga koma</li>
              </ul><br />
            </li>
          </ul>

          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src="/img/disease/demamkuning02.png"
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
              Ilustrasi demam kuning pada anak
            </figcaption>
          </figure>

          <h3 className="mt-6 text-xl leading-8">Diagnosis Demam Kuning</h3>
          <p className="mt-2">
            Demam kuning terkadang sulit didiagnosis karena gejalanya cukup umum dan menyerupai gejala penyakit
            lainnya, seperti malaria, tifus, dan demam berdarah. Dokter akan melakukan beberapa hal, antara lain:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-2 text-gray-600 list-disc pl-6">
            <li>Mengajukan pertanyaan terkait riwayat timbulnya gejala yang dialami pasien, termasuk
              riwayat bepergian ke daerah lain dan riwayat kesehatan terdahulu
            </li>
            <li>Melakukan pemeriksaan fisik lengkap dari kepala hingga kaki, termasuk pemeriksaan suhu tubuh dan
              tekanan darah
            </li>
            <li>Melakukan tes darah untuk mengetahui keberadaan antibodi tubuh yang muncul saat terinfeksi
              virus tersebut
            </li>
          </ul>
          <p className="mt-2">
            Segera temui dokter ketika Anda merasakan gejala-gejala demam kuning tersebut, terutama setelah atau
            sedang melakukan kunjungan ke negara-negara yang banyak terjadi penyakit demam kuning, seperti negara di
            Afrika, serta Amerika Latin dan Kepulauan Karibia.
          </p>

          <h3 className="mt-6 text-xl leading-8">Pengobatan Demam Kuning</h3>
          <p className="mt-2">
            Tidak ada obat yang dapat menyembuhkan penyakit demam kuning, melainkan sistem kekebalan tubuh yang
            akan membunuh virus tersebut. Pengobatan dilakukan untuk mendukung sistem kekebalan tubuh dalam menangani
            gejala yang muncul, antara lain:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-2 text-gray-600 list-disc pl-6">
            <li>Memberi tambahan oksigen</li>
            <li>Memberikan obat demam dan pereda rasa sakit, seperti paracetamol</li>
            <li>Menjaga tekanan darah tidak turun dengan infus cairan</li>
            <li>Transfusi darah, bila terjadi anemia akibat perdarahan</li>
            <li>Cuci darah jika mengalami gagal ginjal</li>
            <li>Pengobatan terhadap infeksi penyerta lainnya yang mungkin terjadi, seperti infeksi bakteri</li>
          </ul>

          <h3 className="mt-6 text-xl leading-8">Komplikasi Demam Kuning</h3>
          <p className="mt-2">
            Komplikasi demam kuning yang mungkin muncul selama fase toksik, antara lain:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-2 text-gray-600 list-disc pl-6">
            <li>Perdarahan</li>
            <li>Miokarditis, yaitu peradangan otot jantung</li>
            <li>Edema paru, yaitu penumpukan cairan di dalam kantung paru-paru (alveoli)</li>
            <li>Sindrom hepatorenal. Timbulnya gagal ginjal pada pasien yang mengalami kerusakan hati</li>
            <li>Radang otak (ensefalitis)</li>
            <li>Infeksi bakteri sekunder, yaitu infeksi bakteri yang muncul selama atau setelah pengobatan terhadap infeksi lain</li>
          </ul>

          <h3 className="mt-6 text-xl leading-8">Pencegahan Demam Kuning</h3>
          <p className="mt-2">
            Beberapa cara untuk mencegah demam kuning, antara lain:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-2 text-gray-600 list-disc pl-6">
            <li>
              <strong>Vaksinasi.</strong>
              Vaksinasi adalah cara paling utama untuk mencegah demam kuning, terutama bagi yang ingin bepergian ke
              daerah yang berisiko seperti negara di Afrika serta Amerika Latin dan Kepulauan Karibia. Konsultasikan
              dengan dokter mengenai vaksinasi yang paling tidak dilakukan 3-4 minggu sebelum keberangkatan. Beberapa
              negara mengharuskan para turis memiliki sertifikat imunisasi sebelum memasuki negara tersebut. Satu dosis
              vaksin demam kuning memberikan perlindungan sedikitnya 10 tahun. Efek samping dari vaksin ini umumnya
              ringan, seperti sakit kepala, demam ringan, nyeri otot, letih, dan sakit di area suntikan. Vaksin demam
              kuning aman diberikan kepada individu mulai dari usia 9 bulan hingga 60 tahun.<br />
              Namun, terdapat beberapa kategori individu yang perlu perhatian khusus sebelum melakukan vaksinasi, yaitu:
              <ul className="my-2 max-w-xl space-y-4 text-gray-600 list-disc pl-6">
                <li>Bayi usia kurang dari 9 bulan</li>
                <li>Seseorang yang alergi berat terhadap protein telur</li>
                <li>Seseorang dengan sistem kekebalan tubuh sangat rendah, seperti penderita HIV/AIDS</li>
                <li>Wanita hamil</li>
                <li>Individu di atas 60 tahun</li>
                <li>Sudah pernah mengalami infeksi demam kuning</li>
              </ul>
              Konsultasikan kepada dokter apabila Anda termasuk salah satu kategori individu di atas dan berencana menerima vaksin demam kuning (yellow fever).
            </li>
            <li>
              <strong>Perlindungan dari gigitan nyamuk.</strong>
              Selain vaksinasi, risiko demam kuning juga dapat dikurangi dengan melindungi diri dari gigitan nyamuk. 
              Ada beberapa cara yang dapat dilakukan untuk menurunkan risiko gigitan nyamuk, antara lain:
              <ul className="my-2 max-w-xl space-y-4 text-gray-600 list-disc pl-6">
                <li>Gunakan baju lengan panjang dan celana panjang</li>
                <li>Hindari banyak beraktivitas di luar ruangan, terutama sore hari hingga subuh</li>
                <li>Pilih tempat tinggal yang dilengkapi dengan jendela yang diberi kawat nyamuk dan pendingin ruangan</li>
                <li>Jika tidak memiliki pendingin ruangan dan jendela kawat nyamuk, maka gunakan kelambu</li>
                <li>Gunakan losion pengusir nyamuk. Namun, tetaplah berhati-hati karena losion pengusir nyamuk dapat bersifat racun. Gunakan sesuai kebutuhan dan jangan terlalu berlebihan. Bila ingin menggunakan losion anti nyamuk terhadap bayi dan anak-anak, gunakan produk yang memang diperuntukkan untuk bayi dan anak-anak</li>
                <li>Beberapa bahan alami, seperti minyak kayu putih, juga mampu memberikan perlindungan terhadap gigitan nyamuk</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
