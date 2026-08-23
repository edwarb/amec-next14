import fs from "fs";
import path from "path";

const root = path.join(process.cwd(), "public/locales");

function writeLocale(locale, namespace, data) {
  const dir = path.join(root, locale);
  fs.mkdirSync(dir, { recursive: true });
  const filePath = path.join(dir, `${namespace}.json`);
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  return filePath;
}

const locales = {
  "id": {
    "vaccineCampak": {
      "fig": "Ilustrasi campak pada orang dewasa",
      "tags": "#Campak #Rubeola",
      "title": "Campak Kering",
      "blocks": [
        {
          "type": "p",
          "text": "Rubeola, atau yang lebih dikenal dengan penyakit campak adalah infeksi menular yang disebabkan oleh virus. Sebelum imunisasi campak digalakkan, campak adalah salah satu penyakit endemik yang menyebabkan kematian terbanyak setiap tahunnya. Penyakit ini disebabkan oleh virus dalam keluarga paramyxovirus yang biasanya ditularkan melalui kontak langsung dengan penderita atau lewat udara. Virus menginfeksi saluran pernapasan dan kemudian menyebar ke seluruh tubuh."
        },
        {
          "type": "h3",
          "text": "Seberapa umumkah penyakit campak?"
        },
        {
          "type": "p",
          "text": "Penyakit ini paling sering terjadi pada anak-anak. Namun, penyakit ini juga bisa terjadi pada orang dewasa jika saat anak-anak Anda belum pernah mengalaminya. Anda dapat mengurangi kemungkinan terkena penyakit ini dengan mengurangi faktor risiko yang ada. Konsultasikan dengan dokter Anda untuk informasi lebih lanjut."
        },
        {
          "type": "h3",
          "text": "Apa saja ciri dan gejala campak?"
        },
        {
          "type": "p",
          "text": "Gejala campak seringnya terjadi sekitar satu hingga dua minggu setelah seseorang terinfeksi virus. Gejala campak yang paling awal muncul adalah demam tinggi hingga 40 celcius, diikuti dengan mata merah dan berair, pilek, bersin-bersin, batuk kering, sensitif terhadap cahaya, lelah, serta nafsu makan yang menurun.\n\nDua atau tiga hari setelah gejala campak awal tersebut muncul, menyusullah gejala campak selanjutnya, yaitu muncul bintik-bintik putih keabuan di mulut dan tenggorokan. Setelah itu, muncul ruam berwarna merah kecoklatan yang diawali dari sekitar telinga, kepala, leher, dan kemudian menyebar ke seluruh tubuh.\n\nRuam ini muncul sekitar empat hari setelah gejala campak awal muncul dan dapat bertahan selama 5 hingga 6 hari. Sementara demam tinggi akibat penyakit ini biasanya akan mulai turun pada hari ketiga setelah ruam muncul. Kemungkinan ada tanda-tanda dan gejala campak yang tidak disebutkan di atas. Bila Anda memiliki kekhawatiran akan sebuah gejala campak, segera konsultasikanlah dengan dokter Anda."
        },
        {
          "type": "figure",
          "src": "/img/disease/campak02.png",
          "caption": "Ilustrasi campak pada anak"
        },
        {
          "type": "h3",
          "text": "Kapan saya harus periksa ke dokter?"
        },
        {
          "type": "p",
          "text": "Hubungi dokter Anda jika Anda berpikir Anda atau anak Anda terkena kontak dengan virus penyebab penyakit ini atau jika Anda atau anak Anda memiliki ruam menyerupai penyakit ini. Beri tahu dokter Anda jika Anda hamil dan merasakan gejala campak karena penyakit ini dapat mengenai janin Anda.\n\nJika Anda memiliki tanda-tanda atau gejala-gejala campak seperti yang sudah disebutkan di atas atau pertanyaan lainnya, konsultasikanlah dengan dokter Anda. Tubuh masing-masing orang berbeda. Selalu konsultasikan ke dokter untuk menangani kondisi kesehatan Anda.\n\nRuam ini muncul sekitar empat hari setelah gejala campak awal muncul dan dapat bertahan selama 5 hingga 6 hari. Sementara demam tinggi akibat penyakit ini biasanya akan mulai turun pada hari ketiga setelah ruam muncul. Kemungkinan ada tanda-tanda dan gejala campak yang tidak disebutkan di atas. Bila Anda memiliki kekhawatiran akan sebuah gejala campak, segera konsultasikanlah dengan dokter Anda.\n\nSelain itu, segera hubungi dokter jika anak Anda menunjukkan gejala-gejala seperti di bawah ini:"
        },
        {
          "type": "ul",
          "items": [
            "Demam tinggi yang semakin parah",
            "Sulit dibangunkan",
            "Linglung atau terus menerus mengigau",
            "Kesulitan bernapas dan keluhannya tidak membaik setelah Anda membersihkan hidungnya",
            "Mengeluhkan sakit kepala parah",
            "Mengeluarkan cairan kuning dari mata",
            "Masih mengeluhkan demam setelah hari keempat ruam timbul",
            "Terlihat sangat pucat, lemah, dan lunglai",
            "Mengeluhkan sakit telinga"
          ]
        },
        {
          "type": "h3",
          "text": "Komplikasi"
        },
        {
          "type": "p",
          "text": "Jika ditangani dengan baik, komplikasi campak pada bayi dan anak yang berujung kematian jarang terjadi. Virus Morbili dalam tubuh dapat menyebar ke seluruh bagian melalui pembuluh darah. Bila menyerang pencernaan, anak akan muntah dan diare hebat.\n\nHal yang paling mengkhawatirkan adalah komplikasi ke paru berupa radang paru (pneumonia). Anak akan kesulitan bernapas dan sesak napas. Komplikasi fatal lainnya yaitu ensefalitis yaitu radang otak yang menyebabkan anak kejang-kejang dan mengalami penurunan kesadaran. Anak-anak juga dapat mengalami perdarahan dan trombositopenia meskipun begitu hal ini jarang terjadi.\n\nSecara umum, Anak Anda akan berisiko mengalami komplikasi jika:"
        },
        {
          "type": "ul",
          "items": [
            "Masih berusia di bawah satu tahun.",
            "Memiliki sistem kekebalan tubuh yang lemah.",
            "Memiliki kondisi medis tertentu, seperti terkena penyakit kronis."
          ]
        },
        {
          "type": "h3",
          "text": "Apa penyebab penyakit campak?"
        },
        {
          "type": "p",
          "text": "Penyakit ini disebabkan oleh virus yang sangat menular. Penularan dapat terjadi jika menghirup percikan air di udara dari bersin, batuk, atau ludah yang mengandung virus dari penderita. Selain itu, menyentuh barang yang terkontaminasi virus juga bisa menyebabkan Anda mengalami peyakit ini.\n\nVirus penyebab penyakit ini dapat bertahan di udara dan di permukaan hingga lebih dari 2 jam lamanya. Itu sebabnya, jika Anda menyentuh barang yang terkena percikan virus penyakit ini, lalu tidak sengaja mengucek mata, menempelkan tangan ke hidung atau mulut, Anda bisa saja ikut terinfeksi.\n\nPenyakit ini juga dapat ditularkan oleh orang yang terinfeksi dari 4 hari sebelum timbulnya gejala sampai 4 hari setelah gejala sudah mulai mereda. Dalam banyak kasus, jika penyakit ini tidak ditangani dengan baik dapat menjadi penyakit endemik yang menyebabkan banyak kematian, terutama di kalangan anak-anak yang kekurangan gizi. Meski penyakit ini lebih sering menyerang anak-anak, Anda juga dapat terinfeksi virus ini apabila sebelumnya belum pernah terkena penyakit ini atau belum imunisasi."
        },
        {
          "type": "h3",
          "text": "Siapa yang berisiko terkena penyakit campak?"
        },
        {
          "type": "p",
          "text": "Ada banyak faktor yang meningkatkan risiko Anda terkena penyakit ini, di antaranya:"
        },
        {
          "type": "ul",
          "items": [
            "Anak-anak. Penyakit ini paling sering menyerang bayi dan balita karena mereka umumnya belum memiliki sistem kekebalan tubuh yang kuat.",
            "Belum imunisasi campak. Jika Anda belum pernah imunisasi campak, Anda berisiko untuk mengalami penyakit ini di kemudian hari.",
            "Bepergian ke luar negeri. Jika Anda bepergian ke luar negeri di mana penyakit ini sering terjadi, Anda lebih berisiko terkena penyakit tersebut juga.",
            "Kurang vitamin A."
          ]
        },
        {
          "type": "p",
          "text": "Tidak memiliki faktor risiko bukan berarti Anda tidak dapat terkena penyakit ini, Faktor ini hanyalah referensi saja. Konsultasikan dengan dokter Anda untuk informasi lebih lanjut."
        },
        {
          "type": "h3",
          "text": "Bagimana cara mengobati penyakit campak?"
        },
        {
          "type": "p",
          "text": "Pada dasarnya prinsip penanganan penyakit ini adalah dengan terapi suportif. Pasalnya virus penyebab penyakit ini bersifat self limiting disease, sehingga penyakit ini idealnya dapat sembuh dengan sendirinya.\n\nAkan tetapi, Anda tetap harus mengendalikan perkembangan virus di dalam tubuh anak, agar tidak menyebar ke organ vital lain, seperti otak dan paru. Berikut adalah langkah-langkah yang dapat Anda lakukan untuk mengatasi campak pada bayi dan anak."
        },
        {
          "type": "richOl",
          "items": [
            {
              "title": "Banyak istirahat",
              "body": "Kunci mengatasi campak pada bayi anak adalah dengan memperbanyak istirahat. Oleh karena itu, pastikan anak Anda mengurangi aktivitas fisik dan bermainnya untuk sementara waktu. Dengan mendapatkan istirahat yang cukup, sistem kekebalan tubuh anak Anda pun akan semakin kuat untuk melawan infeksi virus yang berkembang biak di dalam tubuhnya."
            },
            {
              "title": "Batasi kontak dengan lingkungan sekitar",
              "body": "Orang yang terkena penyakit ini harus “diasingkan” sementara waktu karena penyakit ini bersifat sangat menular. Oleh sebab itu, penting bagi Anda untuk membatasi si kecil dari kontak dengan lingkungan sekitarnya, supaya penyakit yang ia derita tak menular ke teman-temannya. Jika anak Anda sudah bersekolah, mintalah izin untuk tidak masuk sekolah hingga demam dan ruamnya hilang.\n\nPisahkan pula anak yang terkena penyakit ini dari saudaranya, terutama bila Anda memiliki anak bayi yang belum menerima imunisasi campak. Untuk anggota keluarga atau kontak yang rentan, dapat diberikan vaksinasi atau human immunoglobulin untuk pencegahan. Ada baiknya juga anak diberi masker untuk membatasi penularan melalui batuk atau bersin.\n\nYang tidak kalah penting, pisahkan semua peralatan mandi maupun makan yang digunakan si kecil apabila ia terkena penyakit ini. Hal ini dilakukan supaya menghindari penularan campak pada bayi dan anak lewat kontak tidak langsung."
            },
            {
              "title": "Perhatikan asupan makanan",
              "body": "Memerhatikan asupan makanan bergizi memegang peranan penting untuk mengatasi campak pada bayi dan anak. Konsumsilah makanan bergizi seimbang dari buah dan sayuran yang banyak mengandung vitamin. Sayangnya, campak pada bayi dan anak seringkali membuat mereka sulit makan karena gejala penyakit ini terkadang dapat mengiritasi kerongkongan.\n\nMeski begitu jangan khawatir, Anda dapat menyiasatinya dengan memberikan makanan dalam bentuk bubur. Pastikan Anda juga menghindari gorengan dan makanan serta minuman dingin untuk sementara waktu."
            },
            {
              "title": "Jangan takut mandi",
              "body": "Banyak orang percaya jika campak pada bayi dan anak tidak boleh kena air karena dapat memperparah bercak merah di kulitnya. Akibatnya, tidak sedikit orangtua yang tidak memperbolehkan anaknya untuk mandi. Padahal faktanya, setelah anak sudah tidak demam lagi, Anda dapat memandikan si kecil. Hal ini dilakukan untuk mengurangi gatal karena ruam sekaligus memberikan kenyamanan untuk si kecil.\n\nKetika mandi, pakailah sabun yang tidak mengiritasi kulitnya yang sedang bermasalah. Setelah mandi, keringkan tubuh si kecil dengan kain lembut dan berikan bedak khusus gatal pada badannya."
            },
            {
              "title": "Minum banyak air putih",
              "body": "Campak pada bayi dan anak memunculkan gejala awal demam tinggi. Nah demam tinggi yang dialami anak saat terserang penyakit ini umumnya akan menguras cairan dan elektrolit tubuh. Oleh karena itu, berikan minum yang cukup untuk menjaga cairan tubuh dan mengganti cairan yang hilang bila anak juga mengalami muntah dan diare saat mereka mengalami penyakit ini."
            },
            {
              "title": "Minum obat pereda nyeri",
              "body": "Untuk menurunkan demam dan mengurangi rasa sakit, anak Anda dapat mengonsumsi obat penurun demam dan pereda nyeri seperti aspirin (paracetamol) dan ibuprofen. Namun pastikan Anda tidak memberikan obat aspirin jika si kecil belum berusia di atas 16 tahun. Pemberian obat aspirin pada anak di bawah usia 16 tahun dapat menyebabkan anak terkena sindrom Reye’s. Penggunaan antibiotik jarang dilakukan kecuali jika dokter menemukan infeksi lain yang dialami oleh si kecil.\n\nSelain itu suplementasi vitamin A juga mampu membantu mempercepat pemulihan kondisi jika Anda atau si kecil mengalami penyakit ini. Dosis vitamin A yang diberikan adalah:",
              "items": [
                "Bayi usia kurang dari 6 bulan 50.000 IU/hari PO diberi 2 dosis",
                "Usia 6-11 bulan 100.000 IU/hari PO 2 dosis",
                "Usia di atas 1 tahun 200.000 IU/hari PO 2 dosis",
                "Anak dengan tanda defisiensi vitamin A, 2 dosis pertama sesuai usia, dilanjutkan dosis ketiga sesuai usia yang diberikan 2-4 minggu kemudian"
              ]
            }
          ]
        },
        {
          "type": "p",
          "text": "Selalu konsultasikan ke dokter sebelum mengonsumsi suplemen tambahan. Pasalnya dosis dan aturan pakai setiap suplemen mungkin berbeda."
        },
        {
          "type": "h3",
          "text": "Apa saja tes yang biasa dilakukan untuk penyakit campak?"
        },
        {
          "type": "p",
          "text": "Dokter Anda akan mendiagnosis penyakit yang diderita si kecil berdasarkan karakteristik ruam yang berbentuk bintik kecil putih kebiruan dengan dasar merah terang (Koplik’s spot) di lapisan dalam pipinya. Jika diperlukan, pemeriksaan darah dapat mengkonfirmasi apakah ruam tersebut memang benar-benar gejala penyakit ini atau tidak."
        },
        {
          "type": "h3",
          "text": "Bagaimana cara mencegah penyakit campak pada bayi dan anak?"
        },
        {
          "type": "p",
          "text": "Cara paling ampuh yang dapat dilakukan untuk mencegah penyakit ini adalah dengan pemberian imunisasi mumps-measles-rubella (MMR), alias imunisasi campak, gondongan, dan rubella (campak Jerman). Jika Anda adalah orang dewasa yang belum pernah menerima imunisasi campak atau belum pernah terjangkit penyakit ini sebelumnya, penting bagi Anda untuk segera mendapatkan imunisasi ini.\n\nSementara wanita yang merencanakan kehamilan namun belum pernah menerima imunisasi campak harus berkonsultasi dengan dokter terlebih dahulu, karena vaksin tidak bisa diberikan selama masa kehamilan. Perlu diketahui bahwa campak pada ibu hamil dapat membahayakan janin. Imunisasi MMR dapat diberikan untuk semua anak usia 9 bulan sampai dengan usia kurang dari 15 tahun lewat penyuntikan dengan dosis 0,5 mililiter.\n\nPemerintah menyediakan pelayanan imunisasi campak rubella secara gratis tiap bulan Agustus-September. Anda bisa mendapatkan imunisasi campak rubella tersebut di sekolah-sekolah, Puskesmas, Posyandu dan fasilitas kesehatan lainnya.\n\nSecara umum, imunisasi ini aman untuk semua orang. Namun, wanita hamil, orang yang memiliki sistem kekebalan tubuh yang lemah karena penyakit leukimia, TBC, dan mereka yang alergi terhadap komponen tertentu dalam vaksin, tidak dianjurkan untuk melakukan imunisasi."
        }
      ]
    },
    "vaccineYellowFever": {
      "fig": "Ilustrasi nyamuk Aedes Aegypti",
      "tags": "#DemamKuning #YellowFever",
      "title": "Demam Kuning",
      "blocks": [
        {
          "type": "p",
          "text": "Demam kuning atau yellow fever adalah jenis penyakit yang disebabkan oleh virus dan ditularkan melalui perantara nyamuk. Penyakit ini ditandai dengan demam tinggi, serta mata dan kulit yang menguning akibat penurunan fungsi hati. Umumnya, demam kuning ditemukan di wilayah Afrika, Amerika Selatan, Amerika Tengah, dan Karibia. Demam kuning dapat menyerang penduduk yang tinggal di daerah endemik dan para turis yang sedang mengunjungi daerah tersebut."
        },
        {
          "type": "h3",
          "text": "Penyebab Demam Kuning"
        },
        {
          "type": "p",
          "text": "Demam kuning disebabkan oleh virus yang berasal dari genus Flavivirus, dan disebarkan oleh nyamuk Aedes aegypti. Jenis nyamuk ini berkembang di lingkungan sekitar manusia. Bahkan, nyamuk Aedes aegypti juga berkembang biak di air bersih. Nyamuk Aedes aegypti membawa virus demam kuning setelah menggigit manusia atau monyet yang sedang terinfeksi. Virus kemudian memasuki aliran darah nyamuk dan menetap di kelenjar air liur (saliva) nyamuk. Ketika nyamuk itu kembali menggigit orang lain, virus akan memasuki tubuh orang tersebut melalui aliran darah dan menyebar di dalam tubuh. Waktu senja hingga fajar merupakan waktu ketika nyamuk Aedes aegypti sedang aktif, sehingga di waktu tersebut penyebaran virus demam kuning paling banyak terjadi."
        },
        {
          "type": "h3",
          "text": "Gejala Demam Kuning"
        },
        {
          "type": "p",
          "text": "Gejala demam kuning dapat dilihat berdasarkan tiga fase, yaitu:"
        },
        {
          "type": "richOl",
          "items": [
            {
              "title": "Fase inkubasi.",
              "body": "Pada masa ini, virus yang masuk ke dalam tubuh belum menimbulkan tanda-tanda atau gejala. Masa inkubasi berlangsung selama 1-3 hari setelah terinfeksi."
            },
            {
              "title": "Fase akut.",
              "body": "Fase ini terjadi pada hari ke-3 atau ke-4 setelah terinfeksi, dan dapat berlangsung selama 3-4 hari. Pada fase ini, penderita demam kuning mulai merasakan gejala-gejala yang meliputi:",
              "items": [
                "Demam",
                "Pusing",
                "Mata, wajah, atau lidah kemerahan",
                "Silau terhadap cahaya",
                "Nafsu makan menurun",
                "Nyeri otot",
                "Mual dan muntah"
              ]
            },
            {
              "title": "Fase toksik.",
              "body": "Setelah fase akut berakhir, gejala-gejala tersebut akan menghilang. Sebagian besar orang dapat sembuh dari demam kuning setelah fase ini. Namun, beberapa orang justru memasuki fase serius dari demam kuning, yaitu fase toksik, setelah 24 jam bebas gejala.\n\nPada fase ini, gejala demam kuning dirasakan kembali oleh penderita, dengan gejala yang lebih serius. Gejala-gejala tersebut meliputi:",
              "items": [
                "Kulit dan sklera (bagian putih mata) menguning",
                "Denyut jantung melambat",
                "Nyeri perut",
                "Muntah yang terkadang disertai muntah darah",
                "Mimisan, gusi berdarah, dan perdarahan dari mata",
                "Penurunan jumlah urine dan gagal ginjal",
                "Gagal hati",
                "Penurunan fungsi otak, meliputi delirium, kejang, hingga koma"
              ]
            }
          ]
        },
        {
          "type": "figure",
          "src": "/img/disease/demamkuning02.png",
          "caption": "Ilustrasi demam kuning pada anak"
        },
        {
          "type": "h3",
          "text": "Diagnosis Demam Kuning"
        },
        {
          "type": "p",
          "text": "Demam kuning terkadang sulit didiagnosis karena gejalanya cukup umum dan menyerupai gejala penyakit lainnya, seperti malaria, tifus, dan demam berdarah. Dokter akan melakukan beberapa hal, antara lain:"
        },
        {
          "type": "ul",
          "items": [
            "Mengajukan pertanyaan terkait riwayat timbulnya gejala yang dialami pasien, termasuk riwayat bepergian ke daerah lain dan riwayat kesehatan terdahulu",
            "Melakukan pemeriksaan fisik lengkap dari kepala hingga kaki, termasuk pemeriksaan suhu tubuh dan tekanan darah",
            "Melakukan tes darah untuk mengetahui keberadaan antibodi tubuh yang muncul saat terinfeksi virus tersebut"
          ]
        },
        {
          "type": "p",
          "text": "Segera temui dokter ketika Anda merasakan gejala-gejala demam kuning tersebut, terutama setelah atau sedang melakukan kunjungan ke negara-negara yang banyak terjadi penyakit demam kuning, seperti negara di Afrika, serta Amerika Latin dan Kepulauan Karibia."
        },
        {
          "type": "h3",
          "text": "Pengobatan Demam Kuning"
        },
        {
          "type": "p",
          "text": "Tidak ada obat yang dapat menyembuhkan penyakit demam kuning, melainkan sistem kekebalan tubuh yang akan membunuh virus tersebut. Pengobatan dilakukan untuk mendukung sistem kekebalan tubuh dalam menangani gejala yang muncul, antara lain:"
        },
        {
          "type": "ul",
          "items": [
            "Memberi tambahan oksigen",
            "Memberikan obat demam dan pereda rasa sakit, seperti paracetamol",
            "Menjaga tekanan darah tidak turun dengan infus cairan",
            "Transfusi darah, bila terjadi anemia akibat perdarahan",
            "Cuci darah jika mengalami gagal ginjal",
            "Pengobatan terhadap infeksi penyerta lainnya yang mungkin terjadi, seperti infeksi bakteri"
          ]
        },
        {
          "type": "h3",
          "text": "Komplikasi Demam Kuning"
        },
        {
          "type": "p",
          "text": "Komplikasi demam kuning yang mungkin muncul selama fase toksik, antara lain:"
        },
        {
          "type": "ul",
          "items": [
            "Perdarahan",
            "Miokarditis, yaitu peradangan otot jantung",
            "Edema paru, yaitu penumpukan cairan di dalam kantung paru-paru (alveoli)",
            "Sindrom hepatorenal. Timbulnya gagal ginjal pada pasien yang mengalami kerusakan hati",
            "Radang otak (ensefalitis)",
            "Infeksi bakteri sekunder, yaitu infeksi bakteri yang muncul selama atau setelah pengobatan terhadap infeksi lain"
          ]
        },
        {
          "type": "h3",
          "text": "Pencegahan Demam Kuning"
        },
        {
          "type": "p",
          "text": "Beberapa cara untuk mencegah demam kuning, antara lain:"
        },
        {
          "type": "richOl",
          "items": [
            {
              "title": "Vaksinasi.",
              "body": "Vaksinasi adalah cara paling utama untuk mencegah demam kuning, terutama bagi yang ingin bepergian ke daerah yang berisiko seperti negara di Afrika serta Amerika Latin dan Kepulauan Karibia. Konsultasikan dengan dokter mengenai vaksinasi yang paling tidak dilakukan 3-4 minggu sebelum keberangkatan. Beberapa negara mengharuskan para turis memiliki sertifikat imunisasi sebelum memasuki negara tersebut. Satu dosis vaksin demam kuning memberikan perlindungan sedikitnya 10 tahun. Efek samping dari vaksin ini umumnya ringan, seperti sakit kepala, demam ringan, nyeri otot, letih, dan sakit di area suntikan. Vaksin demam kuning aman diberikan kepada individu mulai dari usia 9 bulan hingga 60 tahun.\n\nNamun, terdapat beberapa kategori individu yang perlu perhatian khusus sebelum melakukan vaksinasi, yaitu:",
              "items": [
                "Bayi usia kurang dari 9 bulan",
                "Seseorang yang alergi berat terhadap protein telur",
                "Seseorang dengan sistem kekebalan tubuh sangat rendah, seperti penderita HIV/AIDS",
                "Wanita hamil",
                "Individu di atas 60 tahun",
                "Sudah pernah mengalami infeksi demam kuning"
              ]
            },
            {
              "title": "Perlindungan dari gigitan nyamuk.",
              "body": "Selain vaksinasi, risiko demam kuning juga dapat dikurangi dengan melindungi diri dari gigitan nyamuk. Ada beberapa cara yang dapat dilakukan untuk menurunkan risiko gigitan nyamuk, antara lain:",
              "items": [
                "Gunakan baju lengan panjang dan celana panjang",
                "Hindari banyak beraktivitas di luar ruangan, terutama sore hari hingga subuh",
                "Pilih tempat tinggal yang dilengkapi dengan jendela yang diberi kawat nyamuk dan pendingin ruangan",
                "Jika tidak memiliki pendingin ruangan dan jendela kawat nyamuk, maka gunakan kelambu",
                "Gunakan losion pengusir nyamuk. Namun, tetaplah berhati-hati karena losion pengusir nyamuk dapat bersifat racun. Gunakan sesuai kebutuhan dan jangan terlalu berlebihan. Bila ingin menggunakan losion anti nyamuk terhadap bayi dan anak-anak, gunakan produk yang memang diperuntukkan untuk bayi dan anak-anak",
                "Beberapa bahan alami, seperti minyak kayu putih, juga mampu memberikan perlindungan terhadap gigitan nyamuk"
              ]
            }
          ]
        },
        {
          "type": "p",
          "text": "Konsultasikan kepada dokter apabila Anda termasuk salah satu kategori individu di atas dan berencana menerima vaksin demam kuning (yellow fever)."
        }
      ]
    },
    "vaccineInfluenza": {
      "fig": "Ilustrasi influenza pada orang dewasa",
      "tags": "#Influenza",
      "title": "Influenza",
      "blocks": [
        {
          "type": "p",
          "text": "Influenza atau flu adalah infeksi virus pada saluran pernapasan. Flu adalah kondisi yang datang secara tiba-tiba, biasanya berlangsung selama 7 sampai 10 hari. Flu bisa hilang begitu saja dan ada yang diobati menggunakan obat obatan alami atau obat resep. Kebanyakan kasus flu umumnya bisa sembuh sepenuhnya.\n\nNamun bagi orang tua, balita, dan orang yang daya tahan tubuhnya lemah, gejala flu bisa terasa lebih parah dan bahkan mengakibatkan kematian akibat komplikasinya. Tipe lain dari flu adalah flu babi (HIN1), flu burung (H5N1, H7N9), dan lain-lain. Setiap tahun terdapat 10% hingga 15% kasus influenza, memengaruhi 250.000 - 500.000 orang. Jenis baru dari influenza A/H1N1 menyebabkan wabah pada Juni 2009."
        },
        {
          "type": "h3",
          "text": "Penularan Influenza"
        },
        {
          "type": "p",
          "text": "Cara utama flu bisa menular adalah ketika seseorang yang batuk atau bersin. Droplet ataupartikel air kecil dengan kuman dapat mendarat di tempat-tempat seperti gagang pintu, telepon, dan keyboard komputer. Orang yang sakit bisa juga batuk atau bersin ke tangan mereka dan kemudian menyentuh benda-benda. Kemudian seseorang yang sehat menyentuh benda yang terkontaminasi. Selanjutnya, tanpa menyadarinya, Anda mungkin menyentuh hidung dan mulut. Dalam sekejap Anda bisa terinfeksi."
        },
        {
          "type": "h3",
          "text": "Gejala flu (influenza)"
        },
        {
          "type": "p",
          "text": "Gejala influenza umumnya datang secara tiba-tiba. Tanda dan gejalanya biasanya mulai dari 24 sampai 48 jam setelah terpapar virus flu. Gejala dan demam terburuk biasanya berlangsung selama 3 sampai 5 hari.\n\nTanda dan gejalanya seperti:"
        },
        {
          "type": "ul",
          "items": [
            "Demam tinggi (di atas 38ºC)",
            "Panas dingin, nyeri otot",
            "Merasa sangat lemah atau lelah",
            "Sakit kepala",
            "Mata terasa sakit",
            "Batuk dan bersin",
            "Sakit tenggorokan",
            "Hidung meler",
            "Sakit perut (terlebih pada anak-anak dibandingkan orang dewasa)",
            "Batuk dan merasa sangat lemah dan lelah bisa bertahan hingga 6 minggu"
          ]
        },
        {
          "type": "p",
          "text": "Mungkin ada beberapa tanda dan gejala yang tidak tercantum di atas. Jika Anda mempunyai kekhawatiran mengenai gejala influenza, silakan berkonsultasi dengan dokter Anda."
        },
        {
          "type": "figure",
          "src": "/img/disease/influenza02.png",
          "caption": "Ilustrasi influenza pada anak"
        },
        {
          "type": "h3",
          "text": "Kapan saya harus ke dokter?"
        },
        {
          "type": "p",
          "text": "Kebanyakan orang yang terkena flu dapat mengobati dirinya sendiri di rumah dan biasanya tidak perlu ke dokter. Jika Anda menunjukkan gejala flu dan berisiko komplikasi, pergilah ke dokter segera. Mengonsumsi obat antivirus dalam 48 jam pertama setelah munculnya gejala utama dapat mengurangi lamanya Anda mengidap penyakit dan membantu mencegah masalah yang lebih serius."
        },
        {
          "type": "h3",
          "text": "Apa penyebab flu (influenza)?"
        },
        {
          "type": "p",
          "text": "Influenza atau flu adalah kondisi yang disebabkan oleh virus yang bisa dikaterogikan. Anda jenis flu dari jenis A, B atau C. Jenis A adalah yang paling umum. Orang yang terkena virus penyebab influenza akibat menghirup udara yang sudah tercemar virus dari orang lain yang terinfeksi (misalnya melalui batuk atau bersin), atau dari menyentuh sesuatu yang sudah disentuh orang yang terinfeksi. Influenza bisa menyebar melalui kontak dengan hewan yang terinfeksi atau jika Anda memakan daging hewan tersebut."
        },
        {
          "type": "h3",
          "text": "Apa yang meningkatkan risiko saya untuk flu (influenza)?"
        },
        {
          "type": "p",
          "text": "Ada beberapa faktor risiko untuk influenza, misalnya:"
        },
        {
          "type": "ul",
          "items": [
            "Usia. Influenza musiman cenderung menyerang balita dan orang tua",
            "Kondisi tempat tinggal. Orang yang tinggal di fasilitas bersama dengan banyak penghuni, seperti panti jompo atau asrama tentara, lebih sering terkena influenza",
            "Sistem kekebalan tubuh lemah. Pengobatan kanker, obat anti penolakan, kortikosteroid, dan HIV/AIDS bisa melemahkan sistem kekebalan tubuh Anda. Hal ini bisa membuat Anda lebih mudah tertular influenza dan bisa juga meningkatkan risiko Anda terkena komplikasi",
            "Penyakit kronis. Kondisi kronis, seperti asma, diabetes, atau jantung, bisa meningkatkan risiko Anda terjangkit komplikasi akibat influenza",
            "Hamil. Wanita hamil lebih mungkin untuk terjangkit komplikasi influenza, terutama dalam trimester kedua dan ketiga",
            "Kegemukan. Orang dengan Indeks Massa Tubuh sebesar 40 atau lebih memiliki peningkatan risiko komplikasi dari flu"
          ]
        },
        {
          "type": "h3",
          "text": "Apa saja pilihan pengobatan saya untuk flu (influenza)?"
        },
        {
          "type": "p",
          "text": "Informasi yang diberikan bukanlah pengganti nasihat medis. SELALU konsultasikan pada dokter Anda. Untuk mengatasi gejala lainnya yang membuat tidak nyaman, Anda bisa minum obat pereda nyeri NSAID seperti paracetamol dan ibuprofen, hingga obat batuk pilek, atau dekongestan. Jangan memberikan aspirin kepada anak-anak berusia kurang dari 16 tahun karena akan sangat meningkatkan risiko terkena Reye’s Syndrome. Menghirup uap hangat dapat melegakan hidung yang tersumbat dan membantu mengencerkan sekret hidung (ingus). Tuangkan air panas ke dalam baskom lalu hirup uap hangat yang dihasilkan oleh air panas tersebut. Minyak esensial yang beraroma dapat ditambahkan. Anda dapat menggunakan selimut untuk membuat ruang tertutup bagi kepala Anda dan baskom agar uap air dapat terfokus ke hidung Anda. Tundukkan kepala Anda agar dapat mengarahkan uap air dengan lebih baik. Perbanyak minum air putih untuk mengencerkan ingus. Influenza tidak bisa disembuhkan dengan antibiotik."
        }
      ]
    },
    "vaccineMeningitis": {
      "fig": "Ilustrasi meningitis pada wanita",
      "tags": "#Meningitis",
      "title": "Meningitis",
      "blocks": [
        {
          "type": "p",
          "text": "Vaksinasi meningitis adalah vaksinasi yang dilakukan untuk menimbulkan kekebalan tubuh untuk menghindari penyakit radang selaput otak (meningitis) yang disebabkan oleh bakteri Neisseria Meningitidis. Vaksinasi ini diberikan kepada seseorang yang akan pergi ke daerah endemis meningitis. Khusus untuk jamaah haji dan umroh diwajibkan melakukan vaksinasi meningitis sebagai salah satusyarat untuk mendapatkan visa di Kedutaan Besar Arab Saudi. Vaksinasi meningitis kekebalannya berlaku untuk dua tahun."
        },
        {
          "type": "h3",
          "text": "Suntik Vaksin Meningitis Sebelum Umroh atau Haji"
        },
        {
          "type": "p",
          "text": "Sehubungan dengan kegiatan ibadah Umroh dan Haji, pelayanan imunisasi meningitis meningokokus ACW135Y dapat diperoleh di Kantor Kesehatan Pelabuhan (KKP) seluruh Indonesia. Setelah memperoleh vaksinasi meningitis meningokokus, calon jamaah diberikan kartu ICV (International Certificate of Vaccination) sebagai syarat memperoleh visa. Vaksin yang digunakan adalah vaksin meningitis meningokokus Menveo ACW 135Y yang telah mendapatkan izin edar dari Badan Pengawas Obat dan Makanan (Badan POM) dan dinyatakan halal berdasarkan Fatwa Majelis Ulama Indonesia (MUI).\n\nImunisasi meningitis merupakan persyaratan wajib untuk mendapatan visa sesuai ketentuan yang ditetapkan Pemerintah Arab Saudi bagi semua calon jamaah haji dan umroh. Untuk efektivitas vaksin, imunisasi diberikan sekurang-kurangnya dua minggu sebelum keberangkatan. Tujuan imunisasi adalah untuk melindungi jamaah dari penularan penyakit meningitis selama 3 tahun."
        },
        {
          "type": "h3",
          "text": "Vaksin Pencegah Penularan"
        },
        {
          "type": "p",
          "text": "Selain itu untuk mencegah penularan antar jamaah dari seluruh dunia serta mencegah penularan meningitis kepada keluarga di tanah air. Meningitis meningokokus ditularkan langsung melalui percikan cairan hidung dan tenggorokan pada saat batuk/bersin dari penderita. Penyakit ini menyerang selaput otak (meningen) dan dapat menimbulkan cacat bahkan kematian."
        },
        {
          "type": "richOl",
          "items": [
            {
              "title": "Kenapa yang perempuan ditanya terakhir mens/ditanya tanggal awal mens terakhir?",
              "body": "karena dikhawatirkan hamil saat melakukan vaksin ini, bila ragu apakah dalam kondisi hamil atau, akan dilakukan tes HCG terlebih dahulu (di situ ada ruang lab tersendiri untuk pemeriksaan ini). vaksinasi meningitis sendiri tidak boleh diberikan kepada ibu hamil, karena dapat menyebabkan kecacatan dan kematian bagi janinnya."
            },
            {
              "title": "Kepada siapa saja vaksin ini tidak boleh diberikan selain kepada wanita hamil?",
              "items": [
                "Tidak tepat diberikan untuk bayi berusia kurang dari dua bulan",
                "Jika diberikan pada orang dewasa dan anak-anak berusia lebih dari lima tahun, vaksin ini akan memberikan perlindungan dari meningitis selama lima tahun",
                "Untuk anak di bawah usia lima tahun, vaksinasi akan memberikan perlindungan selama 2–3 tahun. Namun pemberian pada balita usia dua bulan hingga tiga tahun harus diikuti dengan pemberian vaksin kedua pada tiga bulan setelahnya"
              ]
            },
            {
              "title": "Apa Efek sampingnya?",
              "body": "Efek samping yang parah setelah pemberian vaksin ini sangat jarang terjadi. Sekitar 10 persen orang yang mendapat vaksin ini mengalami nyeri dan kulit kemerahan yang umumnya akan hilang dalam 1-2 hari. Sementara anak-anak terkadang mengalami demam."
            }
          ]
        },
        {
          "type": "figure",
          "src": "/img/disease/meningitis02.png",
          "caption": "Ilustrasi meningitis pada pria"
        },
        {
          "type": "h3",
          "text": "Vaksin Meningitis saat Hamil"
        },
        {
          "type": "p",
          "text": "Jika sedang hamil, berhati-hati dalam memilih makanan. Banyak kasus meningitis virus dan bakteri bisa dicegah dengan berbagai macam vaksin. Bicarakan dengan dokter jika Anda tidak yakin apakah vaksinasi Anda yang terbaru atau tidak.\n\nVaksin yang sudah tersedia antara lain:"
        },
        {
          "type": "ul",
          "items": [
            "Vaksin MMR (campak, gondongan dan campak Jerman): Dapat diberikan pada umur 12 bulan, vaksin ulangan umur 5-7 tahun",
            "Vaksin pneumokokus (PCV): Usia di bawah 1 tahun diberikan setiap dua bulan sekali, di atas dua tahun cukup diberikan sekali",
            "Vaksinasi DTaP/IPV/Hib: Perlindungan pada bakteri Hib, difteri, batuk, tetanus dan virus polio Vaksin meningitis belum termasuk jadwal imunisasi anak tetapi dapat didapatkan di Indonesia"
          ]
        },
        {
          "type": "p",
          "text": "Konsultasikanlah dengan dokter Anda jika menginginkan vaksin tersebut. Penerapan Vaksin Meningitis Untuk Perjalanan Bakteri Neisseria meningitidis (meningokokus) jarang ditemukan di Indonesia. Sehingga banyak orang Indonesia yang tidak memiliki kekebalan terhadap bakteri tersebut. Vaksinasi sangat dianjurkan bagi orang Indonesia yang bepergian ke wilayah berisiko tinggi. Daerah yang berisiko tinggi atau daerah asal bakteri ini adalah Arab Saudi dan sebagian Negara-negara di Afrika. Calon peserta Umroh diwajibkan untuk menerima vaksin meningitis sebelum berangkat untuk mencegah terkena meningitis.\n\nMengunjungi tempat dengan risiko tinggi terjangkit meningitis Sangat disarankan untuk melakukan vaksinasi terhadap meningitis grup A, C, Y dan W135, jika bepergian ke daerah berisiko tinggi. Terutama jika Anda membuat rencana seperti di bawah ini:"
        },
        {
          "type": "ul",
          "items": [
            "Tinggal dengan warga setempat di area padat untuk mengikuti ibadah Haji atau Umroh di Arab Saudi",
            "Melakukan aktivitas berlebih di area Haji di Arab Saudi, menjadi pekerja musiman atau sebagai TKI",
            "Tinggal lebih lama dari sebulan sebagai wisatawan berangsel"
          ]
        },
        {
          "type": "h3",
          "text": "Vaksin Meningitis Untuk Bayi"
        },
        {
          "type": "p",
          "text": "Pemberian Vaksinasi Untuk bayi yang berusia antara dua bulan hingga dua tahun, dosis awal vaksin harus diikuti dengan dosis kedua tiga bulan berikutnya.Vaksin meningitis tidak cocok untuk bayi yang berusia kurang dari dua bulan. Saat mereka pertama kali vaksinasi untuk anak di bawah lima tahun, vaksin memberi perlindungan selama dua hingga tiga tahun. Satu dosis vaksin akan memberi perlindungan sekitar lima tahun bagi orang dewasa dan anak-anak berusia di atas lima tahun. Untuk melindungi Anda dari meningitis grup A, C, Y, dan W135 dibutuhkan vaksinasi meningokokus ACYW135."
        },
        {
          "type": "h3",
          "text": "Efek Samping Suntik Meningitis"
        },
        {
          "type": "p",
          "text": "Vaksinasi harus diberikan dua hingga empat minggu sebelum Anda bepergian sekitar. Efek Samping dari vaksinasi Satu dari sepuluh orang yang disuntik vaksin ACWY akan mendapatkan rasa sakit dan ruam di sekitar luka suntikan. Biasanya efek samping ini akan bertahan selama satu sampai dua hari. Reaksi yang gawat jarang sekali terjadi, tapi demam ringan bisa muncul. Kondisi ini lebih sering dijumpai pada anak-anak daripada orang dewasa.\n\nPenyakit meningitis disebabkan bakteri Neisseria meningitidis. Penyakit ini bisa ditularkan antarmanusia melalui droplet dan air liur dengan masa inkubasi penyakit 3-4 hari. Penyakit meningitis tak boleh dianggap sepele karena dapat menyebabkan kematian. Penyakit menular lain yang perlu diwaspadai jamaah haji selama di Tanah Suci adalah penyakit influenza. Berbeda dengan batuk-pilek biasa (selesma), penyakit influenza disertai dengan gejala yang lebih berat dan hanya disebabkan oleh infeksi virus influenza.\n\nStrain virus influenza yang paling umum menginfeksi manusia adalah strain virus influenza A dan strain virus influenza B. Contoh dari strain virus influenza A adalah H1N1 dan H3N2, sedangkan contoh strain virus influenza B adalah Victoria dan Yamagata. Seperti halnya penyakit meningitis, penyakit influenza juga dapat menyebabkan kematian. Center for Disease Control and Prevention pada 2017 mengungkapkan ada sekitar 291 ribu hingga 646 ribu kasus kematian akibat influenza musiman setiap tahun di seluruh dunia.\n\nPakar alergi dan imunologi dari Departemen Ilmu Penyakit Dalam FKUI-RSCM, Dr.Iris Rengganis, Sp.PD, menyarankan sebelum berwisata ke suatu wilayah atau negara ada baiknya seseorang melakukan persiapan, di antaranya mewaspadai kemungkinan risiko tertular penyakit yang berkembang di daerah tujuan wisata."
        },
        {
          "type": "quote",
          "text": "“Setiap negara punya penyakit endemis. Ini yang harus dicari tahu tentang negara yang dituju, misalnya saja di Arab Saudi risiko tertular meningitis sangat besar. Atau penyakit tipus dan hepatitis di Indonesia. (Jakarta,14/2/2013)”",
          "author": "Dr.Iris Rengganis, Sp.PD",
          "role": "Pakar alergi dan imunologi dari Departemen Ilmu Penyakit Dalam FKUI-RSCM",
          "image": "/img/facility/iris.png"
        },
        {
          "type": "p",
          "text": "Pemberian vaksinasi merupakan upaya pencegahan primer yang wajib dilakukan para pelancong. “Beberapa negara mewajibkan para pendatang untuk melakukan vaksinasi sebelum masuk wilayahnya,” katanya. Beberapa penyakit yang dapat dicegah dengan vaksinasi antara lain meningitis, influenza, tifoid, yellow fever, tetanus, serta hepatitis. Namun dalam melakukan vaksinasi terdapat hal penting yang harus diperhatikan, antara lain vaksin yang diberikan harus poten, punya kemampuan merangsang sistem imun tubuh untuk membentuk antibodi yang cukup, aman, tidak mempunyai kejadian ikutan yang membahayakan penerima vaksin, serta mengikuti persyaratan global sesuai standar Badan Kesehatan Dunia (WHO). “Vaksinasi sebaiknya diberikan 2 minggu sampai 1 bulan sebelum bepergian supaya antibodi terbentuk sempurna,” imbuh Iris. Di negara tujuan, Iris juga menyarankan agar selalu menerapkan kebiasaan sehat seperti mencuci tangan sebelum makan atau setelah ke toilet umum, menjaga stamina dengan mengonsumsi makanan bergizi dan berolahraga. Selain itu perhatikan pula kesesuaian jenis makanan di tempat wisata dengan apa yang biasa kita makan. Membawa pakaian yang sesuai dengan musim di negara tujuan juga sangat penting."
        },
        {
          "type": "h3",
          "text": "Kegunaan Suntik Meningitis"
        },
        {
          "type": "p",
          "text": "Vaksin mengandung antigen (substansi yang mencetuskan peningkatan sistem imun dan menyebabkan terbentuknya antibodi). Antibodi ini bisa melindungi tubuh dengan cara membunuh bakteri yang menginvasi sistem imun tubuh. Suntik meningitis memiliki tingkat keefektifan sebesar 85 hingga 90% dalam pencegahan penyakit meningococcal. Karena vaksin meningitis ini tidak bisa melindungi tubuh dari semua strain bakteri penyebab meningitis, maka orang yang mendapatkan vaksin masih bisa terinfeksi meningitis dari strain bakteri yang berbeda yang tak dilindungi oleh vaksin tersebut. Namun risiko terinfeksi meningitis meningococcal sangat menurun setelah pemberian suntik meningitis tersebut."
        }
      ]
    },
    "vaccineMmr": {
      "fig": "Ilustrasi vaksin MMR",
      "tags": "#MMR",
      "title": "MMR",
      "blocks": [
        {
          "type": "p",
          "text": "MMR adalah singkatan dari tiga macam penyakit infeksi yang paling rentan menyerang anak-anak di tahun pertama kehidupannya. Anak-anak adalah kelompok usia yang paling rentan terinfeksi MMR karena daya tahan tubuhnya belum sekuat orang dewasa. Namun demikian, orang dewasa yang memiliki sistem kekebalan tubuh lemah juga berpeluang untuk ketularan salah satu atau lebih dari penyakit ini. Apalagi jika sewaktu kecilnya tidak mendapatkan vaksinasi."
        },
        {
          "type": "h3",
          "text": "Meales (campak)"
        },
        {
          "type": "p",
          "text": "Measles atau campak adalah infeksi virus sangat menular yang menyerang pernapasan. Virus penyebab campak dapat sangat mudah menyebar melalui percikan liur atau lendir yang keluar dari mulut orang sakit campak saat batuk atau bersin. Penyakit campak juga mudah menular dari sentuhan langsung dengan cairan tubuh orang yang terinfeksi atau kebiasaan saling berbagi barang pribadi, seperti pinjam-meminjam alat makan atau minum dari gelas yang sama.\n\nGejala campak yang harus diwaspadai adalah:"
        },
        {
          "type": "ul",
          "items": [
            "Ruam merah di kulit",
            "Batuk",
            "Hidung mengeluarkan ingus",
            "Demam",
            "Bintik putih di mulut (bintik Koplik)"
          ]
        },
        {
          "type": "p",
          "text": "Campak yang sudah parah dapat menyebabkan pneumonia (radang paru), infeksi telinga, dan kerusakan otak. Komplikasi campak lainnya yang juga fatal adalah ensefalitis (radang otak) yang dapat menyebabkan anak kejang-kejang."
        },
        {
          "type": "h3",
          "text": "Mumps (gondongan)"
        },
        {
          "type": "p",
          "text": "Mumps (parotitis) atau di Indonesia sering disebut dengan nama gondongan adalah infeksi virus menular yang menyerang kelenjar ludah. Setiap orang dapat terinfeksi gondongan, tapi penyakit ini biasanya terjadi pada anak berusia 2-12 tahun. Virus penyebab gondongan menular lewat air liur (ludah) yang keluar bersama embusan udara saat orang sakit gondongan batuk atau bersin. Selain itu, Anda juga dapat terkena penyakit ini jika bersentuhan langsung atau menggunakan barang seseorang yang terjangkit penyakit gondongan.\n\nGejala gondongan yang paling jelas adalah pembengkakan kelenjar ludah sehingga area pipi dan sekitar leher terlihat bulat, bengkak membesar. Berikut adalah gejala gondongan lainnya:"
        },
        {
          "type": "ul",
          "items": [
            "Demam",
            "Sakit kepala",
            "Pembengkakan kelenjar ludah",
            "Nyeri otot",
            "Rasa sakit saat mengunyah atau menelan",
            "Nyeri pada wajah atau kedua sisi pipi",
            "Sakit tenggorokan"
          ]
        },
        {
          "type": "p",
          "text": "Kadang-kadang, virus gondongan juga dapat menyebabkan peradangan pada testis, ovarium, pankreas, atau meninges (selaput yang mengelilingi otak dan sumsum tulang belakang). Tuli dan meningitis adalah risiko komplikasi lainnya yang mungkin terjadi akibat gondongan."
        },
        {
          "type": "h3",
          "text": "Rubella (campak Jerman)"
        },
        {
          "type": "p",
          "text": "Rubella atau sering disebut dengan campak Jerman adalah infeksi virus rubella yang menyebabkan kemunculan bintik-bintik ruam merah di kulit. Virus penyebab Campak Jerman juga menyebabkan kelenjar getah bening leher dan belakang telinga membengkak.\n\nTanda-tanda dan gejala rubella seringkali sangat ringan sehingga sulit untuk diperhatikan, terutama pada anak-anak. Gejala campak Jerman pada anak biasanya mulai muncul sekitar 2-3 minggu setelah tubuh mulai terpapar virus. Berikut gejalanya:"
        },
        {
          "type": "ul",
          "items": [
            "Demam",
            "Sakit kepala",
            "Hidung tersumbat atau pilek",
            "Mata merah meradang",
            "Ruam merah muda halus yang dimulai pada wajah dan dengan cepat menyebar ke batang tubuh, kemudian ke lengan dan kaki, sebelum menghilang dalam urutan yang sama.",
            "Sendi-sendi tubuh sakit, terutama pada wanita."
          ]
        },
        {
          "type": "p",
          "text": "Semua orang berisiko terkena rubella. Rubella pada anak dan dewasa pada umumnya dapat cepat membaik, tidak berbahaya, dan jarang menyebabkan komplikasi fatal.Campak Jerman barulah sangat berbahaya jika terjadi pada wanita hamil, khususnya dalam 4 bulan pertama kehamilannya. Jika seorang wanita terinfeksi rubella saat hamil mida, bayi berisiko mengalami kecacatan atau bahkan lahir mati."
        },
        {
          "type": "figure",
          "src": "/img/disease/mmr02.png",
          "caption": "Ilustrasi vaksinasi MMR pada anak"
        },
        {
          "type": "h3",
          "text": "Siapa yang wajib vaksin MMR?"
        },
        {
          "type": "p",
          "text": "Tiap orang wajib mendapatkan vaksin MMR paling tidak sekali seumur hidup. Perlu diketahui bahwa di Indonesia, vaksin campak dan campak Jerman (vaksin MR) sengaja dipisah dari vaksin gondongan karena gondongan sudah lebih jarang ditemui di zaman modern kini. Namun, bukan berarti ini menjadi alasan buat Anda tidak mendapatkan ketiganya. Tiap orang wajib mendapatkan vaksin MMR paling tidak sekali seumur hidup. Perlu diketahui bahwa di Indonesia, vaksin campak dan campak Jerman (vaksin MR) sengaja dipisah dari vaksin gondongan karena gondongan sudah lebih jarang ditemui di zaman modern kini. Namun, bukan berarti ini menjadi alasan buat Anda tidak mendapatkan ketiganya."
        },
        {
          "type": "h3",
          "text": "Anak kecil dan balita"
        },
        {
          "type": "p",
          "text": "Menurut Kementerian Kesehatan Indonesia, imunisasi MMR wajib diberikan pada anak mulai usia 9 bulan sampai selambat-lambatnya kurang dari 15 tahun. Imunisasi ini juga akan masuk ke dalam jadwal vaksinasi rutin selanjutnya yang diberikan pada anak di usia 18 bulan dan anak kelas 1 SD sederajat (usia 6-7 tahun) atau saat anak baru masuk sekolah, tanpa dipungut biaya.\n\nSelain itu, anak-anak berusia 6-11 bulan yang akan bepergian ke luar negeri harus menerima setidaknya dosis pertama vaksin MMR sebelum keberangkatan. Sebelum berusia 12 bulan, anak-anak juga harus sudah menerima dosis vaksin kedua."
        },
        {
          "type": "h3",
          "text": "Orang dewasa"
        },
        {
          "type": "p",
          "text": "Menurut Center for Disease Control and Prevention, (CDC), orang dewasa berusia 18 tahun atau yang lahir sebelum tahun 1956 harus menerima dua dosis vaksin MMR sekaligus kapan saja jika tidak pernah mendapatkan vaksin ini sebelumnya. Orang dewasa barulah hanya diwajibkan imunisasi susulan dengan 1 dosis saja apabila mereka dapat membuktikan bahwa mereka telah divaksinasi atau sudah pernah terkena penyakit MMR sebelumnya.\n\nSiapa pun yang berusia 12 bulan atau lebih yang telah menerima setidaknya satu dosis vaksin MMR tetapi dianggap berpeluang besar terkena gondong selama terjadi wabah harus mendapatkan satu lagi vaksin gondong secepatnya. Dalam semua kasus, dosis harus diberikan setidaknya 28 hari setelah imunisasi pertama atau kedua didapatkan."
        },
        {
          "type": "h3",
          "text": "Yang tidak harus vaksin MMR"
        },
        {
          "type": "p",
          "text": "Menurut Centers for Disease Control and Prevention (CDC), badan pengendalian dan pencegahan penyakit di Amerika Serikat, ada beberapa kelompok orang tertentu yang tidak perlu mendapatkan vaksin MMR. Mereka adalah orang-orang yang tidak dapat terlindungi oleh vaksin secara langsung, tapi dapat merasakan perlindungan dari penyakit MMR apabila orang-orang di sekitarnya sudah melengkapi vaksin tersebut sehingga tidak ada lagi yang bisa menularkan penyakit MMR ke mereka. Efek ini disebut dengan herd immunity.\n\nBerikut adalah kriterianya:"
        },
        {
          "type": "ul",
          "items": [
            "Orang memiliki reaksi alergi yang parah atau mengancam jiwa terhadap neomycin atau komponen lain dari vaksi",
            "Orang telah memiliki reaksi serius terhadap dosis MMR atau MMRV masa lalu (campak, gondong, rubella, dan varicella)",
            "Orang yang menderita kanker atau menerima perawatan kanker yang melemahkan sistem kekebalan tubuh",
            "Orang menderita HIV/AIDS, atau gangguan sistem kekebalan tubuh lainnya",
            "Orang yang menerima obat apa pun yang memengaruhi sistem kekebalan tubuh, seperti steroid",
            "Orang yang sedang menderita TBC atau tuberculosis"
          ]
        },
        {
          "type": "p",
          "text": "Selain itu, kemungkinan Anda dipebolehkan menunda vaksin MMR apabila memiliki kondisi berikut:"
        },
        {
          "type": "ul",
          "items": [
            "Saat ini memiliki penyakit kronis dari stadium sedang hingga parah",
            "Sedang hamil atau dalam program hamil",
            "Baru-baru ini menjalani transfusi darah atau memiliki kondisi yang membuat Anda mudah berdarah atau memar",
            "Telah menerima vaksin untuk penyakit lain selain MMR, dalam empat minggu terakhir"
          ]
        }
      ]
    },
    "vaccineTyphoid": {
      "fig": "Ilustrasi tifoid pada orang dewasa",
      "tags": "#Tifoid",
      "title": "Tifoid",
      "blocks": [
        {
          "type": "p",
          "text": "Tifus (tipes) atau demam tifoid adalah penyakit yang disebabkan oleh infeksi bakteri Salmonella typhii. Tifus dapat menular dengan cepat, umumnya melalui konsumsi makanan atau minuman yang sudah terkontaminasi tinja yang mengandung bakteri Salmonella typhii. Pada kasus yang jarang terjadi, penularan tifus dapat terjadi karena terpapar urine yang sudah terinfeksi bakteri Salmonella typhii."
        },
        {
          "type": "h3",
          "text": "Kasus Tifus di Indonesia"
        },
        {
          "type": "p",
          "text": "Hampir 100.000 penduduk Indonesia terjangkit penyakit tifus tiap tahunnya. Oleh sebab itu, penyakit tifus dinyatakan sebagai penyakit endemik dan masalah kesehatan serius di dalam negeri. Sanitasi yang buruk dan keterbatasan akses air bersih, diyakini merupakan penyebab utama berkembangnya penyakit tifus. Selain itu, anak-anak lebih sering terserang tifus karena belum sempurnanya sistem kekebalan tubuh. Jika tidak segera ditangani dengan baik, diperkirakan tiap satu dari lima orang akan meninggal karena tifus. Selain itu, tifus juga berisiko menimbulkan komplikasi. Penanganan penyakit tifus adalah melalui pemberian obat antibiotik. Pengobatan bisa dilakukan di rumah atau perlu dilakukan di rumah sakit, akan bergantung pada tingkat keparahan penyakit."
        },
        {
          "type": "h3",
          "text": "Vaksinasi Tifoid"
        },
        {
          "type": "p",
          "text": "Di Indonesia, vaksin tifoid yang diberikan untuk mencegah tifus termasuk imunisasi yang dianjurkan oleh pemerintah, namun belum termasuk ke dalam kategori wajib. Vaksin tifoid diberikan kepada anak-anak berusia lebih dari 2 tahun, dan diulang tiap tiga tahun. Seperti vaksin-vaksin lainnya, vaksin tifoid tidak menjamin perlindungan 100 persen terhadap infeksi tifus. Anak yang sudah diimunisasi tifoid pun tetap dapat terinfeksi, namun tingkat infeksinya tidak seberat pada pasien yang belum mendapat vaksin tifoid. Vaksinasi juga sangat dianjurkan bagi orang yang ingin bekerja atau bepergian ke daerah yang banyak kasus penyebaran tifus. Tindakan pencegahan lain yang perlu dilakukan adalah memerhatikan makanan dan minuman yang akan dikonsumsi, misalnya dengan menghindari makan di tempat terbuka yang mudah terpapar bakteri."
        },
        {
          "type": "h3",
          "text": "Gejala Tifus"
        },
        {
          "type": "p",
          "text": "Rubella atau sering disebut dengan campak Jerman adalah infeksi virus rubella yang menyebabkan kemunculan bintik-bintik ruam merah di kulit. Virus penyebab Campak Jerman juga menyebabkan kelenjar getah bening leher dan belakang telinga membengkak.\n\nTanda-tanda dan gejala rubella seringkali sangat ringan sehingga sulit untuk diperhatikan, terutama pada anak-anak. Gejala campak Jerman pada anak biasanya mulai muncul sekitar 2-3 minggu setelah tubuh mulai terpapar virus. Berikut gejalanya:"
        },
        {
          "type": "ul",
          "items": [
            "Demam yang meningkat secara bertahap tiap hari hingga mencapai 39°C-40°C. Demam juga akan lebih tinggi pada malam hari",
            "Nyeri otot",
            "Sakit kepala",
            "Merasa tidak enak badan",
            "Pembesaran ginjal dan hati",
            "Kelelahan dan lemas",
            "Berkeringat",
            "Batuk kering",
            "Penurunan berat badan",
            "Sakit perut",
            "Kehilangan nafsu makan",
            "Anak-anak sering mengalami diare, sementara orang dewasa cenderung mengalami konstipasi",
            "Muncul ruam pada kulit berupa bintik-bintik kecil berwarna merah muda",
            "Linglung, merasa tidak tahu sedang berada di mana dan apa yang sedang terjadi di sekitar dirinya"
          ]
        },
        {
          "type": "p",
          "text": "Gejala tifus berkembang dari minggu ke minggu dengan ciri-ciri sebagai berikut:"
        },
        {
          "type": "richOl",
          "items": [
            {
              "title": "Minggu ke-1.",
              "body": "Gejala-gejala awal yang patut diperhatikan, khususnya terkait perkembangan suhu badan penderita adalah:",
              "items": [
                "Demam yang awalnya tidak tinggi, kemudian meningkat secara bertahap hingga mencapai 39-40°C. Pada minggu pertama, suhu tubuh dapat naik atau turun",
                "Sakit kepala",
                "Lemas dan tidak enak badan",
                "Batuk kering"
              ]
            },
            {
              "title": "Minggu ke-2.",
              "body": "Jika tidak segera ditangani, pasien akan memasuki stadium kedua dengan gejala:",
              "items": [
                "Demam tinggi yang masih berlanjut dan cenderung memburuk di malam hari, disertai denyut nadi yang lambat",
                "Muncul bintik-bintik yang berwarna seperti bunga mawar di daerah perut dan dada",
                "Mengigau",
                "Sakit perut",
                "Diare atau sembelit parah",
                "Tinja umumnya berwarna kehijauan",
                "Perut kembung akibat pembengkakan hati dan empedu"
              ]
            },
            {
              "title": "Minggu ke-3.",
              "body": "Suhu tubuh menurun pada akhir minggu ketiga. Jika tidak ditangani, komplikasi bisa muncul pada tahap ini, berupa:",
              "items": [
                "Perdarahan pada usus",
                "Pecahnya usus"
              ]
            },
            {
              "title": "Minggu ke-4.",
              "body": "Demam tifoid secara berangsur-angsur akan turun. Namun tetap perlu segera ditangani agar tidak muncul gejala-gejala lain atau menyebabkan komplikasi yang membahayakan nyawa. Pada sebagian kasus, gejala dapat kembali muncul dua minggu setelah demam reda\n\nSegera konsultasikan kepada dokter jika mengalami demam tinggi dan beberapa gejala di atas. Ingatlah bahwa walaupun telah menerima vaksin atau imunisasi, seseorang masih berisiko menderita tifus. Pemeriksaan juga sebaiknya dilakukan jika terserang demam setelah berkunjung ke tempat dengan kasus penyebaran tifus yang tinggi."
            }
          ]
        },
        {
          "type": "figure",
          "src": "/img/disease/tifoid02.png",
          "caption": "Ilustrasi tifoid pada anak"
        },
        {
          "type": "h3",
          "text": "Penyebab Tifus"
        },
        {
          "type": "p",
          "text": "Tifus disebabkan oleh bakteri Salmonella typhii yang masuk ke dalam usus manusia melalui makanan atau minuman yang terkontaminasi bakteri tersebut, hingga berkembang biak di saluran pencernaan. Gejala-gejala seperti demam, sakit perut, sembelit, atau diare akan timbul ketika bakteri ini berkembang biak di saluran pencernaan.\n\nBeberapa faktor risiko penyakit tifus, di antaranya:"
        },
        {
          "type": "ul",
          "items": [
            "Sanitasi buruk. Di negara seperti Indonesia, penyebaran bakteri Salmonella typhii biasanya terjadi melalui konsumsi air yang terkontaminasi tinja yang yang mengandung bakteri Salmonella typhii, juga dari makanan yang dicuci dengan menggunakan air yang terkontaminasi. Kondisi ini terutama disebabkan oleh buruknya sanitasi dan akses air bersih.",
            "Bakteri juga dapat menyebar jika orang yang telah terinfeksi tidak mencuci tangan sebelum menyentuh atau mengolah makanan. Penyebaran bakteri terjadi ketika ada orang lain yang menyantap makanan yang tersentuh tangan penderita.",
            "Mengonsumsi sayur-sayuran yang menggunakan pupuk dari kotoran manusia yang terinfeksi.",
            "Mengonsumsi produk susu yang telah terkontaminasi.",
            "Menggunakan toilet yang terkontaminasi bakteri. Anda akan terinfeksi jika menyentuh mulut sebelum mencuci tangan setelah buang air.",
            "Melakukan seks oral dengan pembawa bakteri Salmonella typhii."
          ]
        },
        {
          "type": "p",
          "text": "Jika tidak segera diobati, Salmonella typhii akan menyebar ke seluruh tubuh dengan memasuki pembuluh darah. Gejala tifus akan diperburuk jika bakteri telah menyebar ke luar sistem pencernaan. Selain itu, bakteri yang menyebar dapat merusak organ dan jaringan, serta menyebabkan komplikasi serius. Kondisi yang paling umum terjadi adalah perdarahan internal atau usus bocor."
        },
        {
          "type": "h3",
          "text": "Pengobatan Tifus"
        },
        {
          "type": "p",
          "text": "Terapi antibiotik adalah cara efektif dalam menangani tifus dan perlu diberikan sedini mungkin. Beberapa obat antibiotik yang digunakan untuk mengobati tifus adalah azithromycin, ciprofloxacin, atau ceftriaxone.\n\nPerawatan tifus dilakukan di rumah sakit, tapi jika tifus lebih cepat dideteksi dan gejalanya masih tergolong ringan, maka penanganannya bisa dilakukan secara mandiri di rumah.\n\nPengobatan Tifus di Rumah Sakit Antibiotik di rumah sakit akan diberikan dalam bentuk suntikan. Jika diperlukan, asupan cairan dan nutrisi juga akan dimasukkan ke dalam pembuluh darah melalui infus. Pasien perlu menggunakan antibiotik hingga hasil tes terhadap bakteri penyebab tifus benar-benar bersih. Infus akan diberikan apabila pasien tifus disertai dengan gejala-gejala, seperti muntah terus-menerus serta diareparah. Infus berisi cairan akan diberikan untuk mencegah kekurangan cairan tubuh (dehidrasi). Anak yang mengalami demam tifoid bisa direkomendasikan untuk melalui perawatan di rumah sakit sebagai tindakan pencegahan. Pada kasus yang jarang terjadi, operasi dapat dilakukan jika terjadi komplikasi yang membahayakan nyawa, seperti perdarahan saluran pencernaan. Penderita tifus akan berangsur-angsur membaik setelah dirawat kurang-lebih selama 3-5 hari. Tubuh akan pulih dengan perlahan-lahan hingga kondisi pasien pulih sepenuhnya setelah beberapa minggu pascainfeksi.\n\nPengobatan Tifus di Rumah Umumnya orang yang didiagnosis tifus pada stadium awal membutuhkan pengobatan selama 1-2 minggu dengan tablet antibiotik. Meski tubuh mulai membaik setelah 2-3 hari mengonsumsi antibiotik, sebaiknya jangan menghentikan konsumsi sebelum antibiotik habis. Hal ini berguna untuk memastikan agar bakteri Salmonella typhii benar-benar lenyap di dalam tubuh. Meski begitu, pemberian antibiotik untuk mengobati tifus mulai menimbulkan masalah bagi negara-negara di Asia Tenggara. Beberapa kelompok Salmonella typhii menjadi kebal terhadap antibiotik. Beberapa tahun terakhir, bakteri ini juga menjadi kebal terhadap antibiotik chloramphenicol, ampicillin, dan trimethoprim-sulfamethoxazole. Jika kondisi makin memburuk saat menjalani perawatan tifus di rumah, segera temui dokter untuk mendapatkan penanganan yang tepat. Pada sebagian kecil penderita tifus, penyakit ini dapat kambuh kembali.\n\nPastikan untuk mengikuti langkah-langkah ini supaya tubuh segera pulih dan mencegah risiko tifus kambuh:"
        },
        {
          "type": "ul",
          "items": [
            "Istirahat yang cukup",
            "Makan teratur. Makan dalam porsi sedikit, tapi dalam frekuensi yang cukup sering dibandingkan dengan makan porsi besar, tapi hanya tiga kali sehari",
            "Perbanyak minum air putih",
            "Rajin mencuci tangan dengan sabun untuk mengurangi risiko penyebaran infeksi"
          ]
        },
        {
          "type": "h3",
          "text": "Bakteri yang Menetap di Dalam Tubuh"
        },
        {
          "type": "p",
          "text": "Beberapa orang yang telah pulih dan sudah tidak menunjukkan gejala-gejala tifus, tetap dapat menderita bakteri Salmonella typhii di dalam saluran usus selama bertahun-tahun. Sekitar lima persen penderita tifus yang tidak menjalani pengobatan yang cukup tetapi kemudian bisa pulih, akan terus membawa bakteri ini di dalam tubuhnya. Tanpa disadari, para pembawa (carrier) bakteri tifoid bisa menularkannya pada orang lain melalui tinja. Untuk beberapa profesi, carrier ini mendapat perhatian khusus. Orang-orang dengan profesi tertentu, disarankan untuk memastikan bahwa tubuhnya tidak memiliki bakteri Salmonella typhii sebelum melakukan pekerjaannya.\n\nProfesi yang berisiko ini, antara lain:"
        },
        {
          "type": "ul",
          "items": [
            "Profesi yang berhubungan dengan pengolahan dan penyiapan makanan",
            "Perawat yang sering berhadapan atau mengurus orang yang rentan sakit",
            "Pengasuh balita atau perawat lansia."
          ]
        },
        {
          "type": "h3",
          "text": "Pengobatan Tambahan saat Tifus Kambuh"
        },
        {
          "type": "p",
          "text": "Sebagian orang dapat mengalami gejala-gejala tifus yang kambuh seminggu setelah berakhirnya pengobatan antibiotik. Untuk kondisi ini, biasanya dokter akan kembali meresepkan antibiotik, meski gejala-gejala yang dirasakan tidak separah sebelumnya.\n\nJika setelah menjalani pengobatan ternyata hasil tes pada feses atau tinja ditemukan masih adanya bakteri Salmonella typhii, pasien akan kembali disarankan untuk mengonsumsi antibiotik selama 28 hari untuk mematikan bakteri, sekaligus mengurangi risiko pasien menjadi carrier. Selama diagnosis masih menyatakan adanya infeksi, sebaiknya hindari aktivitas mengolah, memasak, dan menyajikan makanan baik untuk diri sendiri, maupun orang lain. Selain itu, pastikan juga untuk rutin mencuci tangan setelah dari kamar mandi."
        },
        {
          "type": "h3",
          "text": "Pencegahan Tifus"
        },
        {
          "type": "p",
          "text": "Vaksinasi tifus di Indonesia termasuk dalam jadwal imunisasi anak. Vaksinasi ini sangat dianjurkan bagi anak berusia dua tahun dan diberikan kembali tiap tiga tahun sekali. Pemberian vaksin idealnya diberikan satu bulan sebelum berkunjung ke tempat yang merupakan daerah endemik tifus.\n\nBeberapa reaksi dan efek samping yang mungkin muncul setelah pemberian vaksin tifus, yaitu nyeri, kemerahan, bengkak di sekeliling area suntikan, mual, pusing, sakit perut, atau diare.\n\nMeski demikian, pemberian vaksin tifoid tidak menjamin 100 persen kebal terhadap bakteri penyebab tifus. Risiko terserang tifoid tetap ada, meski gejala-gejala yang terjadi tidak separah gejala pada orang yang belum memperoleh vaksin sama sekali."
        },
        {
          "type": "h3",
          "text": "Langkah Pencegahan selain Vaksin"
        },
        {
          "type": "p",
          "text": "Di negara-negara berkembang, bakteri tifus dapat tumbuh subur seiring meningkatnya tingkat resistensi bakteri terhadap antibiotik untuk mengobati tifus. Ini mengakibatkan beberapa antibiotik sudah tidak mampu melawan penyakit ini. Oleh sebab itu, perlu penyusunan dan penyuluhan mengenai daftar obat-obatan yang sudah tidak efektif dalam menangani tifus agar pasien mendapatkan pengobatan yang tepat.\n\nUntuk mencegah tifus, pemberian vaksin tifus perlu disertai dengan perbaikan sanitasi, ketersediaan air bersih, serta penerapan pola hidup sehat sejak dini.\n\nPerhatikan hal-hal berikut ini agar terhindar dari risiko penularan tifus:"
        },
        {
          "type": "ul",
          "items": [
            "Cuci tangan sebelum dan sesudah mengolah makanan dan minuman, serta setelah buang air kecil atau besar, maupun usai membersihkan kotoran, misalnya saat mencuci popok bayi.",
            "Jika ingin bepergian ke tempat yang memiliki kasus penyebaran tifus, sebaiknya pastikan air yang akan diminum sudah direbus sampai matang.",
            "Jika harus membeli minuman, sebaiknya beli air minum dalam kemasan.",
            "Kurangi membeli jajanan secara sembarangan di pinggir jalan, karena mudah sekali terpapar bakteri.",
            "Hindari mengonsumsi es batu yang bukan dibuat sendiri.",
            "Hindari mengonsumsi buah dan sayuran mentah, kecuali terlebih dahulu dicuci dengan air bersih dan kulitnya dikupas.",
            "Batasi konsumsi jenis-jenis makanan boga-bahari (seafood), terutama yang masih mentah, karena tingkat kesegarannya sulit diketahui secara pasti.",
            "Sebaiknya gunakan air matang untuk menggosok gigi atau berkumur, terutama jika sedang berada di tempat yang belum dijamin kebersihannya.",
            "Bersihkan kamar mandi secara teratur. Hindari bertukar barang pribadi, seperti handuk, seprai, dan peralatan mandi. Cuci benda-benda tersebut secara terpisah di dalam air hangat.",
            "Hindari konsumsi susu yang tidak dipasteurisasi (bukan susu kemasan).",
            "Konsumsi antibiotik yang diresepkan oleh dokter dan ikutilah petunjuk pemakaian yang telah diberikan. Pengobatan antibiotik harus dilakukan hingga periode pengobatan berakhir untuk mencegah resistensi obat."
          ]
        }
      ]
    },
    "vaccineMr": {
      "fig": "Ilustrasi vaksin Measles dan Rubella",
      "tags": "#MR",
      "title": "MR",
      "blocks": [
        {
          "type": "p",
          "text": "Vaksin MR adalah jenis imunisasi yang berfungsi untuk melindungi tubuh dari dua penyakit sekaligus — campak (Measles) dan campak Jerman (Rubella). Sejatinya, vaksin MR merupakan bagian dari vaksin MMR (Measles, Mumps, Rubella), tapi di Indonesia vaksin Mumps sengaja dipisahkan dari keduanya. Hal ini dilakukan karena penyakit Mumps alias gondongan sudah jarang ditemui di kalangan masyarakat Indonesia.\n\nSementara itu, campak (baik itu campak “biasa” maupun rubella campak Jerman) masih sangat sering terjadi pada anak-anak. Campak Jerman juga membutuhkan perhatian ekstra apabila penderitanya adalah ibu hamil. Pada wanita yang masih hamil muda, rubella dapat menyebabkan keguguran, kematian bayi dalam kandungan, hingga kelainan bawaan pada bayi.Maka, vaksin MR perlu diberikan pada anak untuk mencegah kedua penyakit ini, juga untuk mencegah penyebarannya kepada anak-anak lain."
        },
        {
          "type": "h3",
          "text": "Siapa saja yang perlu menerima vaksin MR?"
        },
        {
          "type": "p",
          "text": "Vaksin MR diberikan pada semua anak usia 9 bulan sampai dengan kurang dari 15 tahun selama masa kampanye vaksinasi MR. Nantinya, tenaga kesehatan akan menyuntikan vaksin pada bagian otot lengan atas atau paha anak.\n\nBagi anak yang sebelumnya sudah melakukan vaksinasi campak, vaksinasi MR ini tetap perlu diberikan. Fungsinya agar si kecil juga mendapatkan kekebalan terhadap rubella. Selain untuk anak, vaksin ini juga direkomendasikan pada wanita yang ingin merencanakan kehamilan."
        },
        {
          "type": "h3",
          "text": "Apakah vaksinasi MR aman?"
        },
        {
          "type": "p",
          "text": "Berdasarkan rilis Kementerian Kesehatan RI, vaksin MR yang digunakan di Indonesia sudah mendapat rekomendasi dari Badan Kesehatan Dunia (WHO) dan izin edar dari Badan POM. Jadi, vaksinasi MR aman dilakukan. Vaksin ini pun nyatanya telah digunakan di lebih dari 141 negara dunia."
        },
        {
          "type": "h3",
          "text": "Adakah efek samping vaksin rubella dan campak (vaksin MR) yang mungkin terjadi setelahnya?"
        },
        {
          "type": "p",
          "text": "Umumnya vaksin MR tidak memiliki efek samping yang berarti. Sekalipun ada, efek samping yang ditimbulkan cenderung umum dan ringan, seperti demam, ruam kulit, atau nyeri di bagian kulit bekas suntikan. Ini merupakan reaksi yang normal dan akan menghilang dalam waktu 2-3 hari."
        },
        {
          "type": "figure",
          "src": "/img/disease/mr02.png",
          "caption": "Ilustrasi vaksinasi MR pada anak"
        },
        {
          "type": "h3",
          "text": "Beberapa faktor risiko penyakit tifus, di antaranya:"
        },
        {
          "type": "p",
          "text": "Dalam kasus yang sangat jarang terjadi, seseorang anak juga bisa mengalami reaksi alergi sebagai efek samping vaksin rubella dan campak. Imunisasi atau vaksinasi adalah suatu tindakan pemberian zat yang berasal dari kuman, baik yang sudah mati ataupun yang dilemahkan.\n\nDiharapkan dengan pemberian vaksin ini, sistem pertahanan tubuh mengenali kuman tersebut, sehingga tubuh bisa mengatasinya apabila suatu saat terinfeksi. Pada beberapa anak yang lebih sensitif, mungkin mereka akan menampakkan reaksi alergi berat dari cairan yang terkandung dalam vaksin tersebut.\n\nDalam dunia medis, kondisi ini disebut dengan anafilaksis. Namun, jika kondisi ini segera ditangani, anak akan segera membaik. Itu sebabnya, meskipun aman, Anda lebih baik berkonsultasi terlebih dahulu ke dokter untuk menghindari risiko reaksi alergi sebagai efek samping vaksin rubella dan campak.\n\nTidak benar bahwa kelumpuhan dan/atau autisme bisa muncul sebagai efek samping vaksin rubella-campak (vaksin MR), maupun jenis imunisasi lainnya. Dugaan imunisasi menyebabkan autisme dan kelumpuhan sudah dipatahkan oleh begitu banyak pakar kesehatan dunia. Perlu diluruskan, sampai saat ini belum ada bukti medis nyata yang mampu membuktikan jika imunisasi bisa menyebabkan kedua kondisi tersebut.\n\nDalam segelintir kasus, munculnya kelumpuhan atau autisme setelah imunisasi hanyalah kebetulan semata. Dan jika benar ini yang terjadi, dokter mampu menemukan penyebab asli penyakit yang diderita pasien lewat berbagai tes laboratorium. Dapat dipastikan bahwa vaksinasi bukanlah salah satu penyebab autisme maupun kelumpuhan pada anak. Tidak semua orang bisa menerima vaksin MR."
        }
      ]
    }
  },
  "en": {
    "vaccineCampak": {
      "fig": "Illustration of measles in adults",
      "tags": "#Measles #Rubeola",
      "title": "Measles Immunization (Rubeola)",
      "blocks": [
        {
          "type": "p",
          "text": "Rubeola, commonly known as measles, is a highly contagious viral infection. Before measles immunization became widely available, measles was one of the leading endemic diseases responsible for a high number of deaths each year.\n\nMeasles is caused by a virus belonging to the Paramyxovirus family. It is usually transmitted through direct contact with an infected person or through airborne respiratory droplets. The virus initially infects the respiratory tract before spreading throughout the body."
        },
        {
          "type": "h3",
          "text": "How common is measles?"
        },
        {
          "type": "p",
          "text": "Measles most commonly affects children. However, adults can also become infected, particularly if they did not have measles or were not vaccinated during childhood.\n\nYou can reduce your risk of infection by minimizing known risk factors. Please consult your doctor for further information."
        },
        {
          "type": "h3",
          "text": "Signs and Symptoms"
        },
        {
          "type": "p",
          "text": "The symptoms of measles usually appear one to two weeks after infection.\n\nThe earliest symptoms typically include:"
        },
        {
          "type": "ul",
          "items": [
            "High fever, which may reach 40°C",
            "Red and watery eyes",
            "Runny nose",
            "Snezing",
            "Dry cough",
            "Sensitivity to light",
            "Fatigue",
            "Loss of appetite"
          ]
        },
        {
          "type": "p",
          "text": "Two to three days after these initial symptoms appear, small grayish-white spots (Koplik spots) may develop inside the mouth and throat.\n\nThis is followed by a reddish-brown skin rash, which usually begins around the ears, then spreads to the face, neck, and eventually the rest of the body."
        },
        {
          "type": "p",
          "text": "The rash generally appears about four days after the onset of the initial symptoms and may last for five to six days. The high fever usually begins to subside by the third day after the rash appears.\n\nThere may be other signs and symptoms not listed above. If you have any concerns or suspect symptoms of measles, please consult your doctor promptly."
        },
        {
          "type": "figure",
          "src": "/img/disease/campak02.png",
          "caption": "Illustration of measles in children"
        }
      ]
    },
    "vaccineYellowFever": {
      "fig": "Illustration of Aedes Aegypti mosquito",
      "tags": "#YellowFever",
      "title": "Yellow Fever",
      "blocks": [
        {
          "type": "p",
          "text": "Yellow fever is a viral disease transmitted by infected mosquitoes. It is characterized by a high fever and yellowing of the skin and eyes (jaundice) caused by liver dysfunction.\n\nYellow fever is commonly found in parts of Africa, South America, Central America, and the Caribbean. The disease can affect both residents living in endemic areas and travelers visiting these regions."
        },
        {
          "type": "h3",
          "text": "Causes of Yellow Fever"
        },
        {
          "type": "p",
          "text": "Yellow fever is caused by the Yellow Fever virus, a member of the Flavivirus genus, and is primarily transmitted by the Aedes aegypti mosquito.\n\nThis mosquito commonly breeds in areas close to human habitation, particularly in clean, stagnant water. After biting an infected human or monkey, the mosquito carries the virus, which multiplies in its salivary glands. When the mosquito bites another person, the virus enters the bloodstream and spreads throughout the body.\n\nAedes aegypti mosquitoes are most active from dusk until dawn, making this the period when transmission is most likely to occur."
        },
        {
          "type": "h3",
          "text": "Symptoms of Yellow Fever"
        },
        {
          "type": "p",
          "text": "The course of yellow fever is divided into three phases:"
        },
        {
          "type": "richOl",
          "items": [
            {
              "title": "Incubation Phase",
              "body": "During the incubation period, the virus is present in the body but does not cause any signs or symptoms. This phase usually lasts 1 to 3 days after infection."
            },
            {
              "title": "Acute Phase",
              "body": "The acute phase generally begins 3 to 4 days after infection and may last 3 to 4 days. Common symptoms include:",
              "items": [
                "Fever",
                "Headache",
                "Redness of the eyes, face, or tongue",
                "Sensitivity to light",
                "Loss of appetite",
                "Muscle pain",
                "Nausea and vomiting"
              ]
            },
            {
              "title": "Toxic Phase",
              "body": "For most people, the symptoms resolve after the acute phase. However, some patients may progress to a more severe stage known as the toxic phase, usually after 24 hours without symptoms.\n\nDuring the toxic phase, symptoms return and become more severe. These may include:",
              "items": [
                "Yellowing of the skin and the whites of the eyes (jaundice)",
                "Slow heart rate",
                "Abdominal pain",
                "Vomiting, sometimes with blood",
                "Bleeding from the nose, gums, or eyes",
                "Decreased urine output and kidney failure",
                "Liver failure",
                "Impaired brain function, including delirium, seizures, and coma"
              ]
            }
          ]
        },
        {
          "type": "figure",
          "src": "/img/disease/demamkuning02.png",
          "caption": "Illustration of yellow fever in children"
        },
        {
          "type": "h3",
          "text": "Diagnosis"
        },
        {
          "type": "p",
          "text": "Yellow fever can be difficult to diagnose because its symptoms often resemble those of other infectious diseases, such as malaria, typhoid fever, and dengue fever.\n\nTo establish a diagnosis, your doctor may:"
        },
        {
          "type": "ul",
          "items": [
            "Review your symptoms, travel history, and previous medical history",
            "Perform a comprehensive physical examination, including measurement of your body temperature and blood pressure",
            "Recommend blood tests to detect antibodies produced in response to the virus"
          ]
        },
        {
          "type": "p",
          "text": "Seek medical attention immediately if you experience symptoms of yellow fever, especially after traveling to countries where the disease is endemic, including regions of Africa, Latin America, and the Caribbean."
        },
        {
          "type": "h3",
          "text": "Treatment"
        },
        {
          "type": "p",
          "text": "There is currently no specific antiviral treatment for yellow fever. In most cases, the body's immune system fights the infection naturally. Treatment focuses on relieving symptoms and supporting vital organ function.\n\nSupportive treatment may include:"
        },
        {
          "type": "ul",
          "items": [
            "Oxygen therapy",
            "Fever and pain relief medications, such as paracetamol (acetaminophen)",
            "Intravenous (IV) fluids to maintain blood pressure",
            "Blood transfusions for severe bleeding or anemia",
            "Dialysis if kidney failure develops",
            "Treatment of secondary infections, such as bacterial infections"
          ]
        },
        {
          "type": "h3",
          "text": "Complications"
        },
        {
          "type": "p",
          "text": "Possible complications during the toxic phase include:"
        },
        {
          "type": "ul",
          "items": [
            "Bleeding",
            "Myocarditis (inflammation of the heart muscle)",
            "Pulmonary edema (fluid accumulation in the lungs)",
            "Hepatorenal syndrome",
            "Encephalitis (inflammation of the brain)",
            "Secondary bacterial infections"
          ]
        },
        {
          "type": "h3",
          "text": "Prevention"
        },
        {
          "type": "richOl",
          "items": [
            {
              "title": "Yellow Fever Vaccination",
              "body": "Vaccination is the most effective way to prevent yellow fever, particularly for individuals traveling to high-risk areas in Africa, Latin America, and the Caribbean.\n\nConsult your doctor about receiving the vaccine at least 3 to 4 weeks before departure. Some countries require travelers to present an International Certificate of Vaccination before entry.\n\nA single dose of the yellow fever vaccine provides protection for at least 10 years. Side effects are generally mild and may include headache, mild fever, muscle aches, fatigue, and pain at the injection site.\n\nThe vaccine is generally recommended for individuals 9 months to 60 years of age.\n\nSpecial consideration is required before vaccination for:",
              "items": [
                "Infants younger than 9 months",
                "Individuals with a severe allergy to egg protein",
                "People with severely weakened immune systems, including those with HIV/AIDS",
                "Pregnant women",
                "Adults over 60 years of age",
                "Individuals who have previously had yellow fever"
              ]
            },
            {
              "title": "Protection Against Mosquito Bites",
              "body": "In addition to vaccination, reducing exposure to mosquito bites can significantly lower the risk of yellow fever.\n\nWe recommend the following preventive measures:",
              "items": [
                "Wear long-sleeved shirts and long trousers.",
                "Limit outdoor activities, especially from late afternoon until dawn.",
                "Stay in accommodations equipped with window screens and air conditioning.",
                "If air conditioning or screened windows are unavailable, sleep under a mosquito net.",
                "Apply mosquito repellent according to the manufacturer's instructions. For infants and children, use products specifically formulated for their age group.",
                "Natural repellents, such as eucalyptus oil, may also help reduce mosquito bites."
              ]
            }
          ]
        },
        {
          "type": "p",
          "text": "Please consult your doctor if you fall into any of the categories above and are planning to receive the yellow fever vaccine."
        }
      ]
    },
    "vaccineInfluenza": {
      "fig": "Illustration of influenza in adults",
      "tags": "#Influenza",
      "title": "Influenza",
      "blocks": [
        {
          "type": "p",
          "text": "Influenza, commonly known as the flu, is a viral infection of the respiratory tract. It usually develops suddenly and lasts for approximately 7 to 10 days. Most cases resolve on their own, while others may require treatment with over-the-counter medications, natural remedies, or prescription medicines.\n\nMost people recover completely from influenza. However, older adults, young children, and individuals with weakened immune systems may experience more severe symptoms and are at greater risk of developing serious complications, which can occasionally be fatal.\n\nOther types of influenza include Swine Flu (H1N1) and Avian Influenza (H5N1 and H7N9).\n\nEach year, seasonal influenza affects approximately 10% to 15% of the population, resulting in an estimated 250,000 to 500,000 cases. In June 2009, a new strain of Influenza A (H1N1) caused a global influenza pandemic."
        },
        {
          "type": "h3",
          "text": "Transmission"
        },
        {
          "type": "p",
          "text": "Influenza is primarily spread through respiratory droplets released when an infected person coughs or sneezes.\n\nThese droplets may settle on frequently touched surfaces such as doorknobs, telephones, and computer keyboards. An infected person may also cough or sneeze into their hands before touching objects, contaminating those surfaces. If a healthy person touches a contaminated object and then unknowingly touches their eyes, nose, or mouth, the virus can enter the body and cause infection."
        },
        {
          "type": "h3",
          "text": "Signs and Symptoms"
        },
        {
          "type": "p",
          "text": "Influenza symptoms usually develop suddenly and begin 24 to 48 hours after exposure to the virus. The most severe symptoms and fever generally last 3 to 5 days.\n\nCommon signs and symptoms include:"
        },
        {
          "type": "ul",
          "items": [
            "High fever (above 38°C)",
            "Chills and muscle aches",
            "Extreme weakness or fatigue",
            "Headache",
            "Eye pain",
            "Cough and sneezing",
            "Sore throat",
            "Runny nose",
            "Abdominal pain, particularly in children",
            "Cough and fatigue that may persist for up to 6 weeks"
          ]
        },
        {
          "type": "p",
          "text": "There may be other signs and symptoms not listed above. If you have any concerns about influenza symptoms, please consult your doctor."
        },
        {
          "type": "figure",
          "src": "/img/disease/influenza02.png",
          "caption": "Illustration of influenza in children"
        },
        {
          "type": "h3",
          "text": "When Should I See a Doctor?"
        },
        {
          "type": "p",
          "text": "Most people with influenza can recover at home and do not require medical attention.\n\nHowever, if you develop influenza symptoms and are at risk of complications, you should seek medical care promptly. Taking antiviral medication within the first 48 hours after symptoms begin may shorten the duration of illness and help prevent more serious complications."
        },
        {
          "type": "h3",
          "text": "Causes"
        },
        {
          "type": "p",
          "text": "Influenza is caused by the influenza virus, which is classified into Types A, B, and C. Type A is the most common.\n\nThe virus spreads when a person inhales respiratory droplets from an infected individual, such as those produced during coughing or sneezing, or by touching contaminated surfaces and then touching the eyes, nose, or mouth.\n\nCertain strains of influenza may also be transmitted through contact with infected animals or by consuming contaminated animal products."
        },
        {
          "type": "h3",
          "text": "Risk Factors"
        },
        {
          "type": "p",
          "text": "Several factors may increase the risk of developing influenza, including:"
        },
        {
          "type": "ul",
          "items": [
            "Age – Seasonal influenza is more common in young children and older adults.",
            "Living environment – People living in shared facilities, such as nursing homes or military barracks, have a higher risk of infection.",
            "Weakened immune system – Cancer treatment, anti-rejection medications, corticosteroids, HIV/AIDS, and other conditions that suppress the immune system can increase the risk of influenza and its complications.",
            "Chronic medical conditions – Diseases such as asthma, diabetes, and heart disease increase the likelihood of influenza-related complications.",
            "Pregnancy – Pregnant women, particularly during the second and third trimesters, are at greater risk of complications.",
            "Obesity – Individuals with a Body Mass Index (BMI) of 40 or higher have an increased risk of severe influenza complications."
          ]
        },
        {
          "type": "h3",
          "text": "Treatment"
        },
        {
          "type": "p",
          "text": "The information provided is not a substitute for professional medical advice. Always consult your doctor.\n\nTreatment is aimed at relieving symptoms and supporting recovery. Your doctor may recommend pain relievers and fever-reducing medications such as paracetamol (acetaminophen) or ibuprofen, cough, cold, or decongestant medications to relieve symptoms.\n\nAspirin should not be given to children under 16 years of age, as it significantly increases the risk of Reye's syndrome.\n\nInhaling warm steam may help relieve nasal congestion and loosen mucus. You may also increase your fluid intake by drinking plenty of water to help thin nasal secretions and prevent dehydration.\n\nAntibiotics are not effective against influenza, as influenza is caused by a virus rather than bacteria."
        }
      ]
    },
    "vaccineMeningitis": {
      "fig": "Illustration of meningitis in women",
      "tags": "#Meningitis",
      "title": "Meningococcal Vaccination",
      "blocks": [
        {
          "type": "p",
          "text": "Meningococcal vaccination is administered to help the body develop immunity against meningococcal meningitis, an infection of the protective membranes surrounding the brain and spinal cord caused by the bacterium Neisseria meningitidis.\n\nThis vaccine is recommended for individuals traveling to regions where meningococcal disease is endemic. For those performing Hajj or Umrah pilgrimages, meningococcal vaccination is mandatory and is one of the requirements for obtaining a visa from the Embassy of the Kingdom of Saudi Arabia.\n\nThe protection provided by the vaccine is valid for two years."
        },
        {
          "type": "h3",
          "text": "Meningococcal Vaccination Before Umrah or Hajj"
        },
        {
          "type": "p",
          "text": "In preparation for Umrah or Hajj, the Meningococcal ACW135Y vaccine is available at Port Health Offices (Kantor Kesehatan Pelabuhan/KKP) throughout Indonesia.\n\nAfter receiving the vaccination, pilgrims are issued an International Certificate of Vaccination (ICV), which is required when applying for a visa.\n\nThe vaccine administered is Menveo ACW135Y Meningococcal Vaccine, which has been approved by the Indonesian Food and Drug Authority (Badan POM) and has been certified Halal by the Indonesian Ulema Council (Majelis Ulama Indonesia/MUI).\n\nMeningococcal vaccination is a mandatory requirement for all Hajj and Umrah pilgrims in accordance with the regulations established by the Government of Saudi Arabia. To ensure optimal protection, the vaccine should be administered at least two weeks before departure.\n\nThe purpose of vaccination is to protect pilgrims against meningococcal meningitis for up to three years."
        },
        {
          "type": "h3",
          "text": "Preventing Transmission"
        },
        {
          "type": "p",
          "text": "In addition to protecting individual pilgrims, vaccination also helps prevent the spread of meningococcal disease among pilgrims from around the world and reduces the risk of transmitting the infection to family members after returning home.\n\nMeningococcal meningitis is transmitted through respiratory droplets and secretions from the nose and throat when an infected person coughs or sneezes. The disease attacks the protective membranes surrounding the brain and spinal cord (meninges) and can lead to permanent disability or even death if left untreated."
        },
        {
          "type": "h3",
          "text": "Why Are Women Asked About Their Last Menstrual Period?"
        },
        {
          "type": "p",
          "text": "Women are routinely asked about the first day of their last menstrual period before receiving the meningococcal vaccine to determine whether there is a possibility of pregnancy.\n\nIf pregnancy cannot be ruled out, an hCG (Human Chorionic Gonadotropin) test may be performed before vaccination. This examination is available in the laboratory.\n\nMeningococcal vaccination is not recommended during pregnancy, as it may pose risks to the developing fetus."
        },
        {
          "type": "h3",
          "text": "Who Should Not Receive the Vaccine?"
        },
        {
          "type": "p",
          "text": "Besides pregnant women, this vaccine is generally not recommended for:"
        },
        {
          "type": "ul",
          "items": [
            "Infants younger than 2 months of age.",
            "Individuals who have contraindications as determined by their healthcare provider."
          ]
        },
        {
          "type": "p",
          "text": "For adults and children over 5 years of age, a single dose provides protection against meningococcal disease for approximately 5 years.\n\nFor children under 5 years of age, protection generally lasts 2 to 3 years. Infants and children aged 2 months to 3 years require a second dose three months after the first vaccination."
        },
        {
          "type": "h3",
          "text": "What Are the Possible Side Effects?"
        },
        {
          "type": "p",
          "text": "Serious side effects following meningococcal vaccination are very rare.\n\nApproximately 10% of vaccinated individuals may experience pain or redness at the injection site, which usually resolves within 1 to 2 days. Children may occasionally develop a mild fever after vaccination."
        },
        {
          "type": "figure",
          "src": "/img/disease/meningitis02.png",
          "caption": "Illustration of meningitis in men"
        },
        {
          "type": "h3",
          "text": "Meningococcal Vaccination During Pregnancy"
        },
        {
          "type": "p",
          "text": "If you are pregnant, it is important to be cautious when considering any vaccination. Many cases of viral and bacterial meningitis can be prevented through immunization. If you are unsure whether your vaccinations are up to date, consult your doctor.\n\nAvailable vaccines include:"
        },
        {
          "type": "ul",
          "items": [
            "MMR Vaccine (Measles, Mumps, and Rubella): The first dose is recommended at 12 months of age, followed by a booster between 5 and 7 years of age.",
            "Pneumococcal Conjugate Vaccine (PCV): For infants under one year of age, the vaccine is administered every two months. For children over two years of age, a single dose is generally sufficient.",
            "DTaP/IPV/Hib Vaccine: Provides protection against Haemophilus influenzae type b (Hib), diphtheria, pertussis (whooping cough), tetanus, and poliovirus."
          ]
        },
        {
          "type": "p",
          "text": "Although the meningococcal vaccine is not included in Indonesia's routine childhood immunization schedule, it is available in Indonesia.\n\nPlease consult your doctor if you wish to receive any of these vaccines."
        },
        {
          "type": "h3",
          "text": "Meningococcal Vaccination for Travel"
        },
        {
          "type": "p",
          "text": "The bacterium Neisseria meningitidis (meningococcus) is relatively uncommon in Indonesia. As a result, many Indonesians do not have natural immunity against this bacterium.\n\nVaccination is strongly recommended for individuals traveling to areas where meningococcal disease is more prevalent, particularly Saudi Arabia and several countries in Africa.\n\nIndividuals planning to perform Umrah are required to receive the meningococcal vaccine before departure to reduce the risk of contracting meningococcal disease."
        },
        {
          "type": "h3",
          "text": "Traveling to High-Risk Areas"
        },
        {
          "type": "p",
          "text": "Vaccination against Meningococcal Groups A, C, Y, and W135 is strongly recommended for anyone traveling to high-risk regions, especially if you plan to:"
        },
        {
          "type": "ul",
          "items": [
            "Stay with local residents in densely populated areas while performing Hajj or Umrah in Saudi Arabia.",
            "Work in Hajj-related activities, including seasonal employment or overseas work assignments in Saudi Arabia.",
            "Stay for more than one month as a long-term traveler or visitor."
          ]
        },
        {
          "type": "h3",
          "text": "Meningococcal Vaccination for Infants"
        },
        {
          "type": "p",
          "text": "For infants between 2 months and 2 years of age, the initial vaccine dose should be followed by a second dose three months later.\n\nThe meningococcal vaccine is not recommended for infants younger than 2 months.\n\nFor children under 5 years of age, the vaccine provides protection for approximately 2 to 3 years. For adults and children 5 years of age and older, a single dose provides protection for approximately 5 years.\n\nProtection against Meningococcal Groups A, C, Y, and W135 requires the Meningococcal ACYW135 vaccine."
        },
        {
          "type": "h3",
          "text": "Side Effects of the Meningococcal Vaccine"
        },
        {
          "type": "p",
          "text": "The vaccine should ideally be administered 2 to 4 weeks before travel.\n\nApproximately 1 in 10 people receiving the Meningococcal ACWY vaccine may experience mild pain, redness, or a rash at the injection site. These side effects usually resolve within 1 to 2 days.\n\nSerious adverse reactions are extremely rare. Mild fever may occur after vaccination and is more commonly observed in children than in adults.\n\nMeningococcal disease is caused by the bacterium Neisseria meningitidis. It is transmitted from person to person through respiratory droplets and saliva, with an incubation period of approximately 3 to 4 days.\n\nMeningococcal disease should not be underestimated, as it can lead to severe complications and even death.\n\nAnother infectious disease that pilgrims should be aware of while in the Holy Land is influenza. Unlike the common cold, influenza presents with more severe symptoms and is caused exclusively by the influenza virus.\n\nThe influenza viruses that most commonly infect humans are Influenza A and Influenza B. Examples of Influenza A strains include H1N1 and H3N2, while Influenza B strains include Victoria and Yamagata.\n\nLike meningococcal disease, influenza can also be life-threatening. According to the Centers for Disease Control and Prevention (CDC), seasonal influenza causes an estimated 291,000 to 646,000 deaths worldwide each year.\n\nAccording to Dr. Iris Rengganis, Sp.PD, an Allergy and Immunology Specialist from the Department of Internal Medicine, Faculty of Medicine, Universitas Indonesia – Cipto Mangunkusumo Hospital (FKUI-RSCM), travelers should prepare themselves before visiting another country by understanding the risk of infectious diseases that may be prevalent at their destination."
        },
        {
          "type": "quote",
          "text": "Every country has its own endemic diseases. Travelers should familiarize themselves with the health risks of the country they plan to visit. For example, the risk of contracting meningococcal disease is high in Saudi Arabia, while typhoid fever and hepatitis are more common in Indonesia. (Jakarta, February 14, 2013)",
          "author": "Dr. Iris Rengganis, Sp.PD",
          "role": "Allergy and Immunology Specialist, Department of Internal Medicine, Faculty of Medicine, Universitas Indonesia – Cipto Mangunkusumo Hospital (FKUI-RSCM)",
          "image": "/img/facility/iris.png"
        },
        {
          "type": "p",
          "text": "Vaccination is considered one of the most important primary preventive measures for international travelers.\n\n\"Several countries require visitors to receive certain vaccinations before entering their territory,\" she explained.\n\nDiseases that can be prevented through vaccination include meningococcal disease, influenza, typhoid fever, yellow fever, tetanus, and hepatitis.\n\nWhen receiving vaccinations, several important factors should be considered. Vaccines should be potent, capable of stimulating the immune system to produce adequate antibodies, safe for recipients, and compliant with international standards established by the World Health Organization (WHO).\n\nDr. Iris also recommends receiving vaccinations 2 weeks to 1 month before travel to allow sufficient time for protective antibodies to develop.\n\nWhile at the destination, travelers are advised to maintain healthy habits, such as washing their hands before eating and after using public restrooms, maintaining good physical health through a balanced diet and regular exercise, choosing food appropriate to their dietary habits, and bringing suitable clothing for the climate of the destination country."
        },
        {
          "type": "h3",
          "text": "Benefits of Meningococcal Vaccination"
        },
        {
          "type": "p",
          "text": "Vaccines contain antigens, substances that stimulate the body's immune system to produce protective antibodies.\n\nThese antibodies help defend the body by destroying bacteria that invade the immune system.\n\nMeningococcal vaccination has an effectiveness rate of approximately 85% to 90% in preventing meningococcal disease.\n\nHowever, because the vaccine does not protect against every strain of bacteria that can cause meningitis, vaccinated individuals may still develop meningitis caused by strains not covered by the vaccine.\n\nEven so, receiving the meningococcal vaccine significantly reduces the risk of contracting meningococcal disease and its potentially serious complications."
        }
      ]
    },
    "vaccineMmr": {
      "fig": "Illustration of MMR vaccine",
      "tags": "#MMR",
      "title": "MMR Vaccination",
      "blocks": [
        {
          "type": "p",
          "text": "MMR is a combination vaccine that protects against three highly contagious viral diseases: Measles, Mumps, and Rubella. These infections most commonly affect children during their early years of life, as their immune systems are not yet fully developed. However, adults with weakened immune systems are also at risk of contracting one or more of these diseases, particularly if they were not vaccinated during childhood."
        },
        {
          "type": "h3",
          "text": "Measles"
        },
        {
          "type": "p",
          "text": "Measles is a highly contagious viral infection that affects the respiratory system. The virus spreads easily through respiratory droplets released when an infected person coughs or sneezes. It can also be transmitted through direct contact with bodily fluids or by sharing personal items such as eating utensils or drinking glasses.\n\nCommon symptoms of measles include:"
        },
        {
          "type": "ul",
          "items": [
            "Red skin rash",
            "Cough",
            "Runny nose",
            "Fever",
            "White spots inside the mouth (Koplik spots)"
          ]
        },
        {
          "type": "p",
          "text": "Severe measles infection can lead to complications such as pneumonia, ear infections, and brain damage. Another serious complication is encephalitis (inflammation of the brain), which may cause seizures, especially in children."
        },
        {
          "type": "h3",
          "text": "Mumps"
        },
        {
          "type": "p",
          "text": "Mumps, also known as parotitis, is a contagious viral infection that affects the salivary glands. Although anyone can become infected, the disease most commonly occurs in children between 2 and 12 years of age.\n\nThe virus spreads through saliva when an infected person coughs or sneezes. It can also be transmitted through direct contact or by sharing personal items with an infected individual.\n\nThe most recognizable symptom of mumps is swelling of the salivary glands, causing the cheeks and jaw area to appear enlarged.\n\nCommon symptoms include:"
        },
        {
          "type": "ul",
          "items": [
            "Fever",
            "Headache",
            "Swollen salivary glands",
            "Muscle pain",
            "Pain while chewing or swallowing",
            "Pain in the face or cheeks",
            "Sore throat"
          ]
        },
        {
          "type": "p",
          "text": "In some cases, the mumps virus may also cause inflammation of the testicles, ovaries, pancreas, or the meninges, the membranes surrounding the brain and spinal cord. Other possible complications include hearing loss and meningitis."
        },
        {
          "type": "h3",
          "text": "Rubella (German Measles)"
        },
        {
          "type": "p",
          "text": "Rubella, commonly known as German measles, is a viral infection caused by the rubella virus. It is characterized by a red or pink skin rash and swelling of the lymph nodes behind the ears and in the neck.\n\nThe signs and symptoms of rubella are often mild, especially in children, making the disease difficult to recognize. Symptoms usually develop 2 to 3 weeks after exposure to the virus.\n\nCommon symptoms include:"
        },
        {
          "type": "ul",
          "items": [
            "Fever",
            "Headache",
            "Nasal congestion or runny nose",
            "Red, inflamed eyes",
            "A fine pink rash that begins on the face and quickly spreads to the body, arms, and legs before fading in the same order",
            "Joint pain, particularly in women"
          ]
        },
        {
          "type": "p",
          "text": "Anyone can contract rubella. In most children and adults, the disease is mild, self-limiting, and rarely causes serious complications.\n\nHowever, rubella infection during pregnancy, especially during the first four months, can be extremely dangerous. It may cause congenital birth defects, miscarriage, or stillbirth."
        },
        {
          "type": "figure",
          "src": "/img/disease/mmr02.png",
          "caption": "Illustration of MMR vaccination in children"
        },
        {
          "type": "h3",
          "text": "Who Should Receive the MMR Vaccine?"
        },
        {
          "type": "p",
          "text": "Everyone should receive the MMR vaccine at least once in their lifetime.\n\nIn Indonesia, the Measles and Rubella (MR) vaccine is administered separately from the mumps vaccine because mumps has become less common. However, this should not be considered a reason to forgo protection against all three diseases."
        },
        {
          "type": "h3",
          "text": "Children and Infants"
        },
        {
          "type": "p",
          "text": "According to the Indonesian Ministry of Health, the MMR immunization is recommended for children beginning at 9 months of age and up to before 15 years of age.\n\nThe vaccine is also included in the routine immunization schedule, with additional doses administered at 18 months of age and again in Grade 1 of elementary school (approximately 6–7 years of age) or upon school entry, free of charge.\n\nChildren aged 6–11 months who plan to travel internationally should receive at least one dose of the MMR vaccine before departure. They should then receive the recommended subsequent dose according to the national immunization schedule."
        },
        {
          "type": "h3",
          "text": "Adults"
        },
        {
          "type": "p",
          "text": "According to the Centers for Disease Control and Prevention (CDC), adults aged 18 years or older, or those born after 1956, who have never received the MMR vaccine should receive two doses.\n\nAdults who can provide evidence of previous MMR vaccination or laboratory-confirmed immunity generally require only one catch-up dose, if indicated.\n\nIndividuals aged 12 months or older who have received at least one dose of the MMR vaccine but are considered at increased risk during a mumps outbreak should receive an additional dose. Each dose should be administered at least 28 days after the previous dose."
        },
        {
          "type": "h3",
          "text": "Who Should Not Receive the MMR Vaccine?"
        },
        {
          "type": "p",
          "text": "According to the Centers for Disease Control and Prevention (CDC), certain individuals should not receive the MMR vaccine. Although they may not be vaccinated themselves, they can still be protected through herd immunity when people around them are fully immunized.\n\nThe MMR vaccine is generally not recommended for individuals who:"
        },
        {
          "type": "ul",
          "items": [
            "Have experienced a severe or life-threatening allergic reaction to neomycin or any component of the vaccine.",
            "Have had a serious allergic reaction after a previous dose of the MMR or MMRV (Measles, Mumps, Rubella, and Varicella) vaccine.",
            "Are undergoing cancer treatment or receiving medications that significantly weaken the immune system.",
            "Have HIV/AIDS or other disorders affecting the immune system.",
            "Are taking medications that suppress the immune system, such as corticosteroids.",
            "Have active tuberculosis (TB)."
          ]
        },
        {
          "type": "p",
          "text": "Vaccination may also need to be postponed if you:"
        },
        {
          "type": "ul",
          "items": [
            "Have a moderate or severe illness.",
            "Are pregnant or planning to become pregnant.",
            "Have recently received a blood transfusion or have a medical condition that increases the risk of bleeding or bruising.",
            "Have received another vaccine within the previous four weeks."
          ]
        }
      ]
    },
    "vaccineTyphoid": {
      "fig": "Illustration of typhoid in adults",
      "tags": "#Typhoid",
      "title": "Typhoid Fever",
      "blocks": [
        {
          "type": "p",
          "text": "Typhoid fever is a bacterial infection caused by Salmonella Typhi. It is commonly transmitted through the consumption of food or water contaminated with feces containing the bacteria. In rare cases, typhoid fever may also be transmitted through exposure to urine from an infected person."
        },
        {
          "type": "h3",
          "text": "Typhoid in Indonesia"
        },
        {
          "type": "p",
          "text": "Approximately 100,000 people in Indonesia are affected by typhoid fever each year, making it an endemic disease and a significant public health concern.\n\nPoor sanitation and limited access to clean water are considered the primary factors contributing to the spread of typhoid. Children are particularly vulnerable because their immune systems are not yet fully developed.\n\nIf left untreated, typhoid fever can be life-threatening. It is estimated that one in five untreated patients may die from the disease. Typhoid can also lead to serious complications if not treated promptly.\n\nTreatment primarily involves antibiotic therapy. Depending on the severity of the infection, patients may be treated either at home or in the hospital."
        },
        {
          "type": "h3",
          "text": "Typhoid Vaccination"
        },
        {
          "type": "p",
          "text": "In Indonesia, typhoid vaccination is recommended by the government but is not included in the mandatory national immunization program.\n\nThe vaccine is recommended for children over two years of age and should be administered every three years.\n\nLike other vaccines, the typhoid vaccine does not provide 100% protection against infection. Vaccinated individuals may still develop typhoid fever; however, the illness is generally milder than in those who have not been vaccinated.\n\nTyphoid vaccination is also highly recommended for individuals planning to work or travel to areas where typhoid fever is common.\n\nIn addition to vaccination, preventive measures include practicing good food and water hygiene, such as avoiding food sold in open environments where it may be easily contaminated."
        },
        {
          "type": "h3",
          "text": "Symptoms of Typhoid Fever"
        },
        {
          "type": "p",
          "text": "Common symptoms of typhoid fever include:"
        },
        {
          "type": "ul",
          "items": [
            "Fever that gradually increases each day and may reach 39–40°C, often becoming higher at night",
            "Muscle aches",
            "Headache",
            "General malaise",
            "Enlargement of the liver and spleen",
            "Fatigue and weakness",
            "Excessive sweating",
            "Dry cough",
            "Weight loss",
            "Abdominal pain",
            "Loss of appetite",
            "Diarrhea in children, while adults are more likely to experience constipation",
            "Small pink-colored spots on the skin (rose spots)",
            "Confusion or disorientation"
          ]
        },
        {
          "type": "p",
          "text": "Typhoid fever typically progresses through several stages."
        },
        {
          "type": "richOl",
          "items": [
            {
              "title": "Week 1",
              "body": "Early symptoms commonly include:",
              "items": [
                "Fever that gradually rises to 39–40°C",
                "Headache",
                "Fatigue and general discomfort",
                "Dry cough"
              ]
            },
            {
              "title": "Week 2",
              "body": "Without proper treatment, symptoms may worsen and include:",
              "items": [
                "Persistent high fever, especially at night, accompanied by a slow heart rate",
                "Rose-colored spots on the chest and abdomen",
                "Delirium",
                "Abdominal pain",
                "Severe diarrhea or constipation",
                "Greenish-colored stools",
                "Abdominal bloating caused by enlargement of the liver and gallbladder"
              ]
            },
            {
              "title": "Week 3",
              "body": "By the end of the third week, the fever may begin to decrease. However, if left untreated, serious complications may occur, including:",
              "items": [
                "Intestinal bleeding",
                "Intestinal perforation"
              ]
            },
            {
              "title": "Week 4",
              "body": "The fever gradually subsides, but prompt medical treatment remains essential to prevent life-threatening complications.\n\nIn some cases, symptoms may recur approximately two weeks after the fever has resolved.\n\nConsult your doctor immediately if you experience a persistent high fever accompanied by any of the symptoms listed above.\n\nPlease note that even individuals who have received the typhoid vaccine may still develop typhoid fever, although the illness is usually less severe. Medical evaluation is particularly recommended if symptoms develop after traveling to an area where typhoid fever is endemic."
            }
          ]
        },
        {
          "type": "figure",
          "src": "/img/disease/tifoid02.png",
          "caption": "Illustration of typhoid fever in children"
        },
        {
          "type": "h3",
          "text": "Causes of Typhoid Fever"
        },
        {
          "type": "p",
          "text": "Typhoid fever is caused by the bacterium Salmonella Typhi, which enters the body through contaminated food or water and multiplies within the digestive tract.\n\nAs the bacteria multiply, symptoms such as fever, abdominal pain, constipation, or diarrhea begin to develop.\n\nRisk factors include:"
        },
        {
          "type": "ul",
          "items": [
            "Poor sanitation and inadequate access to clean water.",
            "Drinking water contaminated with human waste containing Salmonella Typhi.",
            "Consuming food handled by infected individuals who do not practice proper hand hygiene.",
            "Eating vegetables fertilized with contaminated human waste.",
            "Consuming contaminated dairy products.",
            "Using toilet facilities contaminated with Salmonella Typhi.",
            "Engaging in oral sexual contact with a carrier of Salmonella Typhi."
          ]
        },
        {
          "type": "p",
          "text": "If left untreated, the bacteria may enter the bloodstream and spread throughout the body. Once the infection extends beyond the digestive system, it can damage organs and tissues, potentially leading to serious complications such as internal bleeding or intestinal perforation."
        },
        {
          "type": "h3",
          "text": "Treatment for Typhoid Fever"
        },
        {
          "type": "p",
          "text": "Antibiotic therapy is the most effective treatment for typhoid fever and should be started as early as possible. Commonly prescribed antibiotics include azithromycin, ciprofloxacin, and ceftriaxone.\n\nTreatment may be provided either in the hospital or at home, depending on the severity of the infection and the patient's overall condition."
        },
        {
          "type": "h3",
          "text": "Hospital Treatment"
        },
        {
          "type": "p",
          "text": "In hospitalized patients, antibiotics are typically administered by injection. If necessary, fluids and nutrients are provided intravenously to prevent dehydration and maintain adequate nutrition.\n\nPatients usually continue antibiotic treatment until laboratory tests confirm that the Salmonella Typhi bacteria have been eliminated.\n\nIntravenous (IV) fluids may be required for patients experiencing persistent vomiting or severe diarrhea to replace lost fluids and prevent dehydration.\n\nChildren with typhoid fever may also be admitted to the hospital as a precautionary measure.\n\nAlthough uncommon, surgery may be necessary if life-threatening complications occur, such as gastrointestinal bleeding or intestinal perforation.\n\nMost patients begin to improve within 3 to 5 days after receiving appropriate treatment. However, complete recovery may take several weeks following the initial infection."
        },
        {
          "type": "h3",
          "text": "Home Treatment"
        },
        {
          "type": "p",
          "text": "Patients diagnosed during the early stages of typhoid fever are generally treated at home with oral antibiotics for 1 to 2 weeks.\n\nAlthough symptoms often improve within 2 to 3 days after starting antibiotics, it is important to complete the full course of treatment to ensure the bacteria are completely eliminated.\n\nIn recent years, antibiotic resistance has become an increasing concern, particularly in Southeast Asia. Certain strains of Salmonella Typhi have developed resistance to antibiotics such as chloramphenicol, ampicillin, and trimethoprim-sulfamethoxazole.\n\nIf your condition worsens while receiving treatment at home, seek medical attention immediately.\n\nIn a small number of cases, typhoid fever may recur after treatment."
        },
        {
          "type": "h3",
          "text": "Supporting Recovery at Home"
        },
        {
          "type": "p",
          "text": "To promote recovery and reduce the risk of relapse, patients are advised to:"
        },
        {
          "type": "ul",
          "items": [
            "Get plenty of rest.",
            "Eat regular meals in small, frequent portions.",
            "Drink plenty of fluids to stay hydrated.",
            "Wash hands thoroughly with soap and water to help prevent the spread of infection."
          ]
        },
        {
          "type": "h3",
          "text": "Chronic Carriers of Salmonella Typhi"
        },
        {
          "type": "p",
          "text": "Some individuals who have recovered from typhoid fever may continue to carry Salmonella Typhi bacteria in their intestines for many years without experiencing any symptoms.\n\nApproximately 5% of patients who do not receive adequate treatment may become chronic carriers, meaning they can unknowingly spread the bacteria to others through their feces.\n\nThis is particularly important for individuals working in professions where transmission poses a higher public health risk.\n\nOccupations requiring special attention include:"
        },
        {
          "type": "ul",
          "items": [
            "Food preparation and food service workers",
            "Nurses and other healthcare professionals caring for vulnerable patients",
            "Childcare providers and caregivers for older adults"
          ]
        },
        {
          "type": "p",
          "text": "Individuals working in these professions are advised to ensure they are free from Salmonella Typhi before returning to work."
        },
        {
          "type": "h3",
          "text": "Additional Treatment for Recurrent Typhoid"
        },
        {
          "type": "p",
          "text": "Some patients may experience a recurrence of symptoms approximately one week after completing antibiotic treatment.\n\nIf this occurs, a doctor may prescribe another course of antibiotics, although the recurrent illness is often milder than the initial infection.\n\nIf follow-up stool testing still detects Salmonella Typhi, patients may be advised to continue antibiotic treatment for 28 days to eliminate the bacteria completely and reduce the risk of becoming a chronic carrier.\n\nWhile infection is still present, patients should avoid handling, preparing, or serving food for themselves or others.\n\nFrequent handwashing after using the toilet is also essential to prevent transmission."
        },
        {
          "type": "h3",
          "text": "Prevention of Typhoid Fever"
        },
        {
          "type": "p",
          "text": "Typhoid vaccination is included in Indonesia's recommended childhood immunization schedule.\n\nThe vaccine is recommended for children from two years of age and should be repeated every three years.\n\nFor travelers visiting areas where typhoid fever is endemic, vaccination is ideally administered at least one month before departure.\n\nCommon side effects following typhoid vaccination may include pain, redness, or swelling at the injection site, nausea, dizziness, abdominal discomfort, or diarrhea.\n\nAlthough the vaccine significantly reduces the risk of infection, it does not provide complete protection. Vaccinated individuals may still develop typhoid fever, but symptoms are generally less severe than in unvaccinated individuals."
        },
        {
          "type": "h3",
          "text": "Preventing Typhoid Beyond Vaccination"
        },
        {
          "type": "p",
          "text": "In many developing countries, increasing antibiotic resistance has made typhoid fever more difficult to treat. As a result, preventive measures remain essential.\n\nVaccination should be accompanied by improved sanitation, access to safe drinking water, and healthy hygiene practices.\n\nTo reduce your risk of typhoid fever:"
        },
        {
          "type": "ul",
          "items": [
            "Wash your hands thoroughly before preparing food, before eating, after using the toilet, and after cleaning children's diapers or handling waste.",
            "Drink only boiled or properly treated water, especially when traveling to areas where typhoid fever is common.",
            "Choose bottled drinking water whenever safe water is unavailable.",
            "Avoid purchasing food from unhygienic street vendors.",
            "Avoid consuming ice unless you are certain it was made from safe drinking water.",
            "Wash and peel raw fruits and vegetables before eating them.",
            "Limit consumption of raw or undercooked seafood.",
            "Use clean or boiled water for brushing your teeth and rinsing your mouth when traveling.",
            "Keep bathrooms clean and avoid sharing personal items such as towels, bed linens, and toiletries.",
            "Avoid consuming unpasteurized milk or dairy products.",
            "Take antibiotics only as prescribed by your doctor and always complete the full course of treatment to help prevent antibiotic resistance."
          ]
        }
      ]
    },
    "vaccineMr": {
      "fig": "Illustration of Measles and Rubella vaccine",
      "tags": "#MR",
      "title": "MR Vaccine",
      "blocks": [
        {
          "type": "p",
          "text": "The MR vaccine is an immunization that provides protection against two infectious diseases: measles and rubella (German measles).\n\nThe MR vaccine is actually part of the MMR vaccine (Measles, Mumps, and Rubella). In Indonesia, however, the mumps component is administered separately because mumps has become relatively uncommon in the country.\n\nMeanwhile, both measles and rubella continue to occur frequently, particularly among children. Rubella also requires special attention during pregnancy, as infection in early pregnancy may lead to miscarriage, stillbirth, or congenital abnormalities in the baby.\n\nFor this reason, MR vaccination is recommended for children to protect them against both diseases and to help prevent transmission within the community."
        },
        {
          "type": "h3",
          "text": "Who Should Receive the MR Vaccine?"
        },
        {
          "type": "p",
          "text": "The MR vaccine is recommended for all children from 9 months up to under 15 years of age during the national MR immunization program.\n\nThe vaccine is administered by a healthcare professional through an injection into the upper arm or thigh.\n\nChildren who have previously received a measles vaccine should still receive the MR vaccine to provide additional protection against rubella.\n\nIn addition to children, the MR vaccine is also recommended for women who are planning a pregnancy."
        },
        {
          "type": "h3",
          "text": "Is the MR Vaccine Safe?"
        },
        {
          "type": "p",
          "text": "According to the Indonesian Ministry of Health, the MR vaccine used in Indonesia has been recommended by the World Health Organization (WHO) and approved by the Indonesian Food and Drug Authority (BPOM).\n\nThe vaccine has also been used safely in more than 141 countries worldwide."
        },
        {
          "type": "h3",
          "text": "Are There Any Side Effects?"
        },
        {
          "type": "p",
          "text": "Most people experience no significant side effects after receiving the MR vaccine.\n\nWhen side effects do occur, they are generally mild and temporary, such as mild fever, skin rash, or pain, redness, or swelling at the injection site.\n\nThese reactions are normal and usually resolve within 2 to 3 days."
        },
        {
          "type": "figure",
          "src": "/img/disease/mr02.png",
          "caption": "Illustration of MR vaccination in children"
        },
        {
          "type": "h3",
          "text": "Rare Allergic Reactions"
        },
        {
          "type": "p",
          "text": "In very rare cases, a child may experience an allergic reaction after receiving the MR vaccine.\n\nVaccination works by introducing weakened or inactivated components of disease-causing organisms, allowing the immune system to recognize them and develop protection against future infection.\n\nSome individuals who are particularly sensitive to vaccine components may experience a severe allergic reaction known as anaphylaxis. Although extremely rare, this condition requires immediate medical attention and is generally treatable when managed promptly.\n\nFor this reason, parents are encouraged to consult a doctor before vaccination, especially if their child has a history of severe allergies."
        },
        {
          "type": "h3",
          "text": "Does the MR Vaccine Cause Autism or Paralysis?"
        },
        {
          "type": "p",
          "text": "No.\n\nThere is no scientific evidence that the MR vaccine, or any other routine childhood vaccine, causes autism or paralysis.\n\nClaims linking vaccination to autism or paralysis have been thoroughly investigated and disproven by health experts and scientific studies worldwide.\n\nIn rare situations where autism or paralysis is diagnosed after vaccination, the timing is purely coincidental. Through appropriate medical evaluation and laboratory testing, healthcare providers are able to identify the actual underlying cause of the condition.\n\nVaccination is not considered a cause of autism or paralysis."
        },
        {
          "type": "h3",
          "text": "Who Should Not Receive the MR Vaccine?"
        },
        {
          "type": "p",
          "text": "Although the MR vaccine is safe for most individuals, not everyone is eligible to receive it. Individuals with certain medical conditions or specific contraindications should consult a healthcare professional before vaccination to determine whether the vaccine is appropriate for them."
        }
      ]
    }
  }
};

const created = [];
for (const [locale, namespaces] of Object.entries(locales)) {
  for (const [namespace, data] of Object.entries(namespaces)) {
    created.push(writeLocale(locale, namespace, data));
  }
}
console.log(`Created ${created.length} locale files:`);
created.forEach((file) => console.log(`  ${file}`));
