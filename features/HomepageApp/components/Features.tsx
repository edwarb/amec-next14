import {
    ShieldCheckIcon,
    GlobeAsiaAustraliaIcon,
    AcademicCapIcon,
    CurrencyDollarIcon,
    HeartIcon,
    MegaphoneIcon,
  } from '@heroicons/react/24/outline';
  
  const features = [
    {
      name: 'Pelayanan Ramah',
      description: 'Kami memberikan perhatian penuh terhadap keamanan dan kenyamanan pasien',
      icon: HeartIcon,
    },
    {
      name: 'Bertaraf International',
      description: 'Amalia Medical Center sudah sejak lama dikenal dan dipercaya oleh kedutaaan berbagai negara dan juga perusahaan multinasional',
      icon: GlobeAsiaAustraliaIcon,
    },
    {
      name: 'Biaya Terjangkau',
      description: 'Kini Anda tidak perlu lagi khawatir tabungan akan habis, pastikan keluarga anda tetap sehat',
      icon: CurrencyDollarIcon,
    },
    {
      name: 'Bersertifikasi',
      description: 'ISO sistem manajemen mutu pelayanan kesehatan. ISO sistem manajemen lingkungan / limbah. ISO sistem managemen peralatan kesehatan',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Tenaga Profesional',
      description: 'Tenaga ahli kami sangat bertanggung jawab dan siap membantu setiap saat',
      icon: AcademicCapIcon,
    },
    {
      name: 'Melayani Vaksinasi ICV',
      description: 'Buku kuning resmi KKP tersedia bagi anda yang ingin vaksinasi/imunisasi untuk kebutuhan perjalanan internasional',
      icon: MegaphoneIcon,
    },
  ];
  
  export default function Features() {
    return (
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">Pelayanan lengkap</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Semua yang anda butuhkan untuk kesehatan keluarga
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kami menyediakan berbagai layanan medis yang komprehensif, mulai dari konsultasi umum hingga spesialis, vaksinasi, dan
            pemeriksaan kesehatan menyeluruh. Dengan dukungan tenaga medis profesional dan fasilitas modern, kami berkomitmen untuk menjaga kesehatan Anda dan keluarga.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }
  