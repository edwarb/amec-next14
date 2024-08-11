import { useState, useEffect } from 'react';
import { CONTENT_FACILITY } from '../constants/ConstIntroFacility';
import classNames from '../../../shared/utils/classNames';

export default function Facility() {
  const [currentFacilityIndex, setCurrentFacilityIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        setCurrentFacilityIndex((prevIndex) =>
          prevIndex + 3 >= CONTENT_FACILITY.length ? 0 : prevIndex + 3,
        );
      }, 1000); // Animation duration should match the CSS animation duration
    }, 8000); // 5 seconds display time + 1 second animation time

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24 sm:pt-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Pelayanan Klinik
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Layanan Medis Terbaik untuk Semua Kebutuhan Kesehatan Anda
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Tim profesional kami siap membantu Anda dengan berbagai layanan medis
          yang komprehensif. Pastikan Anda dan keluarga mendapatkan perawatan
          optimal yang Anda butuhkan di Amalia Medical Center.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {CONTENT_FACILITY.slice(
            currentFacilityIndex,
            currentFacilityIndex + 3,
          ).map((facility, index) => (
            <div
              key={facility.title}
              className={classNames(
                index === 1 ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                index === 0 ? "lg:rounded-r-none" : "",
                index === 2 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10",
              )}
            >
              <div
                className={classNames(
                  "transition-opacity duration-1000 ease-in-out",
                  animate ? "opacity-0" : "opacity-100",
                )}
              >
                <img
                  src={facility.imgSrc}
                  alt={facility.title}
                  className="h-48 w-full rounded-lg object-cover"
                />
                <h3
                  id={facility.title}
                  className="mt-4 text-lg font-semibold leading-8 text-gray-900"
                >
                  {facility.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {facility.content}
                </p>
              </div>
              <a
                href={facility.href}
                aria-describedby={facility.title}
                className="mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 text-green-600 ring-1 ring-inset ring-green-200 hover:bg-green-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Lihat Layanan
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
