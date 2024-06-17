import { useState, useEffect } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Main() {
  const [currentDate, setCurrentDate] = useState<string>('');
  const [minDate, setMinDate] = useState<string>('');
  const [isOtherVaccineChecked, setIsOtherVaccineChecked] = useState<boolean>(false);
  const [otherVaccine, setOtherVaccine] = useState<string>('');
  const [vaccinePurpose, setVaccinePurpose] = useState<string>('');
  const [otherPurpose, setOtherPurpose] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('id-ID', options) || '';
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0] || ''; // Format tanggal menjadi yyyy-mm-dd
    setMinDate(formattedDate);
  }, []);

  const handleOtherVaccineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherVaccine(e.target.value);
    if (!isOtherVaccineChecked) {
      setIsOtherVaccineChecked(true);
    }
  };

  const handleOtherVaccineCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOtherVaccineChecked(e.target.checked);
    if (!e.target.checked) {
      setOtherVaccine('');
    }
  };

  const handlePurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVaccinePurpose(e.target.value);
    if (e.target.value !== 'lain-lain') {
      setOtherPurpose('');
    }
  };

  const handleOtherPurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherPurpose(e.target.value);
    if (vaccinePurpose !== 'lain-lain') {
      setVaccinePurpose('lain-lain');
    }
  };

  return (
    <div className="isolated relative pt-14">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
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
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Mudahkan Pendaftaran Anda
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Amalia Medical Center menyediakan layanan pendaftaran online yang cepat dan mudah. Daftar sekarang untuk mendapatkan pelayanan kesehatan terbaik dengan penuh kenyamanan dan profesionalisme.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <form>
          <div className="space-y-12 sm:space-y-16">
            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Data Vaksinasi</h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                Berikan informasi tentang rencana vaksinasi Anda.
              </p>

              <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Tanggal Permohonan
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-600 sm:max-w-xs">
                      <input
                        type="text"
                        name="tanggal-permohonan"
                        id="tanggal-permohonan"
                        value={currentDate}
                        readOnly
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                        otomatis terisi, menunjukan tanggal dibuatnya permohonan ini.
                      </p>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Rencana Keberangkatan
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="date"
                      id="departure-date"
                      name="departure-date"
                      className="block w-full max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      min={minDate}
                    />
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Pilih tanggal keberangkatan ke luar negeri.
                    </p>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:py-6">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Tanggal Kunjungan ke Amalia Medical Center
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="date"
                      id="check-date"
                      name="check-date"
                      className="block w-full max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      min={minDate}
                    />
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      Pilih tanggal periksa yang Anda rencanakan.
                    </p>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Jenis Vaksinasi
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <div className="max-w-lg grid grid-cols-2 gap-4">
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="campak"
                            name="campak"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="campak" className="font-medium text-gray-900">
                            Campak
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="meningitis"
                            name="meningitis"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="meningitis" className="font-medium text-gray-900">
                            Meningitis Meningokokus
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="polio"
                            name="polio"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="polio" className="font-medium text-gray-900">
                            Polio OPV
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="vaksinmr"
                            name="vaksinmr"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="vaksinmr" className="font-medium text-gray-900">
                            Vaksin MR
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="influenza"
                            name="influenza"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="influenza" className="font-medium text-gray-900">
                            Influenza
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="mmr"
                            name="mmr"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="mmr" className="font-medium text-gray-900">
                            MMR
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="tifoid"
                            name="tifoid"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="tifoid" className="font-medium text-gray-900">
                            Tifoid
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="yellowfever"
                            name="yellowfever"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="yellowfever" className="font-medium text-gray-900">
                            Yellow Fever
                          </label>
                        </div>
                      </div>
                      <div className="relative flex gap-x-3">
                        <div className="flex h-6 items-center">
                          <input
                            id="vaksin-lain"
                            name="vaksin-lain"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                            checked={isOtherVaccineChecked}
                            onChange={handleOtherVaccineCheckboxChange}
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label htmlFor="vaksin-lain" className="font-medium text-gray-900">
                            Vaksin Lainnya
                          </label>
                        </div>
                      </div>
                      {isOtherVaccineChecked && (
                        <div className="col-span-2 mt-2">
                          <input
                            type="text"
                            name="other-vaccine"
                            id="other-vaccine"
                            value={otherVaccine}
                            onChange={handleOtherVaccineChange}
                            onClick={() => setIsOtherVaccineChecked(true)}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Tujuan Vaksinasi
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <div className="max-w-lg space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="umroh"
                          name="vaccine-purpose"
                          type="radio"
                          value="umroh"
                          checked={vaccinePurpose === 'umroh'}
                          onChange={handlePurposeChange}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label htmlFor="umroh" className="block text-sm font-medium leading-6 text-gray-900">
                          Umroh
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="bekerja"
                          name="vaccine-purpose"
                          type="radio"
                          value="bekerja"
                          checked={vaccinePurpose === 'bekerja'}
                          onChange={handlePurposeChange}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label htmlFor="bekerja" className="block text-sm font-medium leading-6 text-gray-900">
                          Bekerja di Luar Negeri
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="lain-lain"
                          name="vaccine-purpose"
                          type="radio"
                          value="lain-lain"
                          checked={vaccinePurpose === 'lain-lain'}
                          onChange={handlePurposeChange}
                          className="h-4 w-4 border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <label htmlFor="lain-lain" className="block text-sm font-medium leading-6 text-gray-900">
                          Perjalanan Lainnya
                        </label>
                      </div>
                      {vaccinePurpose === 'lain-lain' && (
                        <div className="mt-2">
                          <input
                            type="text"
                            name="other-purpose"
                            id="other-purpose"
                            value={otherPurpose}
                            onChange={handleOtherPurposeChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-base font-semibold leading-7 text-gray-900">Data Diri</h2>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                Jangan berikan password atau pin pada siapapun.
              </p>

              <div className="mt-10 space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Jenis Identitas
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <select
                      id="jenis-identitas"
                      name="jenis-identitas"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>KTP</option>
                      <option>Passport</option>
                    </select>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Nomor Identitas / Passport
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="nomor-identitas"
                      id="nomor-identitas"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Nama Pasien
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Jenis Kelamin
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <select
                      id="jenis-kelamin"
                      name="jenis-kelamin"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Tempat Lahir
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="tempat-lahir"
                      id="tempat-lahir"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Tanggal Lahir
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="date"
                      id="check-date"
                      name="check-date"
                      className="block w-full max-w-xs rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Alamat
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="alamat"
                      id="alamat"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-md sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Telepon
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="phone"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Email
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Nama Travel
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="nama-travel"
                      id="nama-travel"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Nama Yang Merekomendasikan
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="nama-rekomendasi"
                      id="nama-rekomendasi"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
                  <label className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                    Foto Identitas
                  </label>
                  <div className="mt-2 sm:col-span-2 sm:mt-0">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600">
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
