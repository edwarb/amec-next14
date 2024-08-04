const sertifikat = [
  {
    id: 1,
    name: 'dr. Mona Khadijah',
    href: '#',
    imageSrc: '/img/facility/sertifikat01.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Novyta Hasan',
    href: '#',
    imageSrc: '/img/facility/sertifikat02.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Tuti Dina Widyastuti',
    href: '#',
    imageSrc: '/img/facility/sertifikat03.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Wiwin Agustin Am.Keb',
    href: '#',
    imageSrc: '/img/facility/sertifikat04.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Wiwin Agustin Am.Keb',
    href: '#',
    imageSrc: '/img/facility/sertifikat05.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'dr. Anna Ariane Sp.PD',
    href: '#',
    imageSrc: '/img/facility/sertifikat06.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'dr. An-Nisa Islam',
    href: '#',
    imageSrc: '/img/facility/sertifikat09.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 8,
    name: `dr. Na'imatul Mahanani Sp.PK`,
    href: '#',
    imageSrc: '/img/facility/sertifikat10.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 9,
    name: 'Ayu Nabilah',
    href: '#',
    imageSrc: '/img/facility/sertifikat17.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 10,
    name: 'Amalia Medical Center',
    href: '#',
    imageSrc: '/img/facility/sertifikat07.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 11,
    name: 'Amalia Medical Center',
    href: '#',
    imageSrc: '/img/facility/sertifikat08.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 12,
    name: 'Amalia Medical Center',
    href: '#',
    imageSrc: '/img/facility/sertifikat11.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 13,
    name: 'Amalia Medical Center',
    href: '#',
    imageSrc: '/img/facility/sertifikat12.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 14,
    name: 'Amalia Medical Center',
    href: '#',
    imageSrc: '/img/facility/sertifikat13.png',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 15,
    name: 'Amalia Medical Center',
    href: '#',
    imageSrc: '/img/facility/sertifikat14.png',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 16,
    name: 'Amalia Medical Center',
    href: '#',
    imageSrc: '/img/facility/sertifikat15.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 17,
    name: 'Amalia Medical Center',
    href: '#',
    imageSrc: '/img/facility/sertifikat16.png',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Sertifikat() {
  return (
    <div className="bg-white">
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
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center py-8">Galeri Sertifikat</h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {sertifikat.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-14 xl:aspect-w-10">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700 flex justify-center">{product.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}



