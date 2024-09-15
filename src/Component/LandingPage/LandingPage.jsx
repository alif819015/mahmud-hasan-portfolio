import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./LandingPage.css";
import SectionContainer from "../SectionContainer/SectionContainer";

const LandingPage = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    breakpoints: {
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 }, // 1 slide on small screens
      },
      "(min-width: 641px) and (max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 }, // 2 slides on medium screens
      },
      "(min-width: 1025px)": {
        slides: { perView: 3, spacing: 15 }, // 3 slides on large screens
      },
    },
    slides: {
      perView: 3, // Default
      spacing: 15,
    },
  });

  return (
    <SectionContainer>
      <div className="text-white">
        <h3
          id="landingPage"
          className="uppercase text-2xl sm:text-3xl font-semibold my-10 sm:my-20 text-center"
        >
          Lan<span className="text-[#da08a2]">d</span>ing
          <span className="text-[#da08a2]"> P</span>
          age
        </h3>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className="mb-8 w-full sm:w-[380px]">
              <div className="box box11 mb-4 h-[300px] sm:h-[400px]"></div>
              <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800">
                <h3 className="text-lg sm:text-xl font-bold">
                  Agency Landing Page
                </h3>
                <p>
                  <span className="font-semibold">Technology:</span> VS Code |
                  ReactJS | Vercel | Tailwindcss
                </p>
                <div className="flex justify-center gap-4 sm:gap-8 mt-4 mb-6">
                  <a
                    href="https://agency-landinga-page-1.vercel.app/"
                    className="text-center"
                  >
                    <button className="border-[1px] rounded-md px-3 py-1 md:py-2 text-[14px] md:text-[18px] sm:btn-md btn-outline btn-secondary">
                      Live Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/alif819015/agency_landinga_page_1"
                    className="text-center"
                  >
                    <button className="border-[1px] rounded-md px-3 py-1 md:py-2 text-[14px] md:text-[18px] sm:btn-md btn-outline btn-secondary">
                      Client
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="mb-8 w-full sm:w-[380px]">
              <div className="box box33 mb-4 h-[300px] sm:h-[400px]"></div>
              <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800">
                <h3 className="text-lg sm:text-xl font-bold">Brokers-LP</h3>
                <p>
                  <span className="font-semibold">Technology:</span> VS Code |
                  ReactJS | Vercel | Tailwindcss
                </p>
                <div className="flex justify-center gap-4 sm:gap-8 mt-4 mb-6">
                  <a
                    href="https://brokers-lp.vercel.app/"
                    className="text-center"
                  >
                    <button className="border-[1px] rounded-md px-3 py-1 md:py-2 text-[14px] md:text-[18px] sm:btn-md btn-outline btn-secondary">
                      Live Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/shahid1105/Brokers-LP/tree/mahmudhasan"
                    className="text-center"
                  >
                    <button className="border-[1px] rounded-md px-3 py-1 md:py-2 text-[14px] md:text-[18px] sm:btn-md btn-outline btn-secondary">
                      Client
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="mb-8 w-full sm:w-[380px]">
              <div className="box box22 mb-4 h-[300px] sm:h-[400px]"></div>
              <div className="bgRadius py-2 px-5 bg-gradient-to-b from-black to-gray-800">
                <h3 className="text-lg sm:text-xl font-bold">Green-Bank-LP</h3>
                <p>
                  <span className="font-semibold">Technology:</span> VS Code |
                  ReactJS | Vercel | Tailwindcss
                </p>
                <div className="flex justify-center gap-4 sm:gap-8 mt-4 mb-6">
                  <a
                    href="https://green-bank-lp.vercel.app/"
                    className="text-center"
                  >
                    <button className="border-[1px] rounded-md px-3 py-1 md:py-2 text-[14px] md:text-[18px] sm:btn-md btn-outline btn-secondary">
                      Live Site
                    </button>
                  </a>
                  <a
                    href="https://github.com/thamidtuhin74/GreenBank-LP/tree/mahmudhasan"
                    className="text-center"
                  >
                    <button className="border-[1px] rounded-md px-3 py-1 md:py-2 text-[14px] md:text-[18px] sm:btn-md btn-outline btn-secondary">
                      Client
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default LandingPage;

