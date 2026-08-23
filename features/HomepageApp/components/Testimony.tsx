import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next/pages";

type Testimonial = {
  name: string;
  job: string;
  text: string;
};

export default function Testimony() {
  const { t } = useTranslation("common");
  const testimonials = t("home_testimonials", {
    returnObjects: true,
  }) as Testimonial[];
  const testimonialCount = Array.isArray(testimonials)
    ? testimonials.length
    : 0;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (testimonialCount === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonialCount - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonialCount]);

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
        <Image
          className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
          src="/img/testimoni/testimony-bg.webp"
          alt=""
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
        <div
          className="absolute -left-80 -top-56 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="relative mx-auto h-60 max-w-2xl lg:mx-0">
          {testimonials.map((testimoni, index) => (
            <div
              key={testimoni.name}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
            >
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                  <p>
                    <i>
                      {'"'}
                      {testimoni.text}
                      {'"'}
                    </i>
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">{testimoni.name}</div>
                  <div className="mt-1">{testimoni.job}</div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
