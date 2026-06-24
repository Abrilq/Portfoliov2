import React, { type JSX } from "react";
import FadeContent from 'app/welcome/FadeContent'
import { useNavigate } from "react-router-dom";
import PixelBlast from 'app/welcome/PixelBlast';
import Carousel from 'app/welcome/Carousel'
import FuzzyText from 'app/components/FuzzyText';

export default function CertificationPage(): JSX.Element {
  const navigate = useNavigate();
  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={0}>

      <main className="min-h-screen bg-slate-950 text-gray-900 relative">
        <div className="max-w-full mx-auto bg-none shadow-lg relative">

          {/* PixelBlast Background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <PixelBlast
              variant="square"
              pixelSize={5}
              color="#0200BC"
              patternScale={3}
              patternDensity={1.5}
              pixelSizeJitter={0.5}
            />
          </div>

          {/* Carousel and Back Button Layer */}
          <div className="relative w-full h-full z-10 flex flex-col items-center justify-center min-h-screen">
            {/* Back Button */}
            <div className="absolute left-5 top-5 sm:left-10 z-20">
              <button 
                onClick={() => navigate(-1)}
                className="cursor-pointer duration-200 hover:scale-125 active:scale-100" 
                title="Go Back"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" className="stroke-white">
                  <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
                </svg>
              </button>
            </div>

            {/* Header Section - moved above Carousel */}
            <section className="w-full text-center mt-10 relative px-4 sm:px-6">
              <div className="flex justify-center lg:mt-5 sm:mt-30 mb-5">  
                <FuzzyText 
                  baseIntensity={0.2}
                  hoverIntensity={0.5}
                  enableHover
                >
                  Certifications
                </FuzzyText>
              </div>
              <div className="flex justify-center">
                <hr className="w-60 sm:w-80 border-t-2 border-white" />
              </div>
            </section>

            {/* Carousel */}
            <div className="flex justify-center items-center flex-1 w-full lg:py-0 z-10">
              <Carousel
                baseWidth={300}
                autoplay={false}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={false}
                round={false}
              />
            </div>

            {/* Footer below the carousel */}
            <div className="w-full flex justify-center">
              <footer className="relative text-center py-6 text-gray-500 text-sm mt-4">
                © {new Date().getFullYear()} John Clarence A. Legaspi
              </footer>
            </div>
          </div>
        </div>
      </main>
    </FadeContent>
  );
}
