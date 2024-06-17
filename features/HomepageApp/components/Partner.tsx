const partnerLogos = [
    'AIW',
    'aqbal',
    'mega',
    'bantalPerkasaSejahtera',
    'bidartimur',
    'bumimas',
    'bumimascitramandiri',
    'citraputraindarab',
    'dharmakaryaraharja',
    'gamca',
    'karya',
    'maharani',
    'makro',
    'mitramed',
    'nurwiacahaya',
    'pancamega',
    'pitoe',
    'putratimur',
    'rihlah',
    'sentosa',
    'sriintan',
    'sumifin',
  ];
  
  export default function PartnerLogos() {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative mx-auto flex items-center overflow-hidden max-w-full">
          <div className="logos flex items-center animate-slide">
            {partnerLogos.map((logo) => (
              <img
                key={logo}
                className="max-h-12 w-auto mx-4 px-14"
                src={`img/partner/${logo}.png`}
                alt={`PT ${logo}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
            <span className="hidden md:inline">
              Amalia Medical Center telah memberikan pelayanan medical check-up & vaksinasi international sejak tahun 2000
            </span>
          </p>
        </div>
      </div>
    );
  }
  