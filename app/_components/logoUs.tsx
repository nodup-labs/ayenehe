"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Logo {
  id: number;
  name: string;
  imageSrc: string;
}

const animation = { duration: 100000, easing: (t: number) => t };

const LogoUs = () => {
  const logos: Logo[] = [
    {
      id: 1,
      name: "Company 1",
      imageSrc: "/image/cube.png",
    },
    {
      id: 2,
      name: "Company 2",
      imageSrc: "/image/cube.png",
    },
    {
      id: 3,
      name: "Company 3",
      imageSrc: "/image/cube.png",
    },
    {
      id: 4,
      name: "Company 4",
      imageSrc: "/image/cube.png",
    },
    {
      id: 5,
      name: "Company 5",
      imageSrc: "/image/cube.png",
    },
    {
      id: 6,
      name: "Company 6",
      imageSrc: "/image/cube.png",
    },
    {
      id: 7,
      name: "Company 6",
      imageSrc: "/image/cube.png",
    },
    {
      id: 8,
      name: "Company 6",
      imageSrc: "/image/cube.png",
    },
  ];

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 6,
      spacing: 4,
    },
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 4 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 4 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 4 },
      },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <section className="py-12 md:py-12">
      <div className="">
        <div ref={sliderRef} className="keen-slider">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="keen-slider__slide group flex items-center justify-center bg-gray-50 rounded-lg transition-all duration-300 "
            >
              <div className="relative flex items-center justify-center">
                <img
                  src={logo.imageSrc}
                  alt={logo.name}
                  className="object-contain transition-all duration-300 group-hover:grayscale-0 grayscale opacity-30 group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .keen-slider {
          --slide-height: 200px;
          overflow: hidden;
          position: relative;
         

        .keen-slider__slide {
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .keen-slider__active {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default LogoUs;
