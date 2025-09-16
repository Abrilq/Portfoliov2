import React, { type JSX, useState } from "react";
import FadeContent from 'app/welcome/FadeContent'
import { useNavigate } from "react-router-dom";
import TiltedCard from 'app/welcome/TiltedCard';
import TextPressure from 'app/welcome/TextPressure';

export default function ResumePage(): JSX.Element {
  const navigate = useNavigate();
  const [tooltipText, setTooltipText] = useState("Copy Email");

  const handleCopyEmail = (e: React.MouseEvent) => {
    navigator.clipboard.writeText('legaspi.johnclarence@dyci.edu.ph')
      .then(() => {
        setTooltipText("Email copied to clipboard!");
        setTimeout(() => setTooltipText("Copy Email"), 2000);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <FadeContent blur={true} duration={500} easing="ease-in-out" initialOpacity={0}>

      <main className="min-h-screen bg-slate-950 text-gray-900 px-6 py-12">
        {/* Back Button */}
        <div className="absolute left-5 top-5 sm:left-10 ">
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

        {/* Header Section */}
        <section className="w-full text-center mb-12 relative px-4 sm:px-6">
          <div className="flex justify-center mt-10 mb-6">
            <TextPressure
              text="Connect with me!"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <div className="flex justify-center mb-8">
            <hr className="w-60 sm:w-80 border-t-2 border-gray-600" />
          </div>
        </section>

        <section className="p-8 sm:m-none lg:m-20">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center items-center">

                <a href="https://ph.jobstreet.com/profile/johnclarence-legaspi-9F07RgSBL9">
                <TiltedCard
                imageSrc="/images/links/jobstreet.png"
                altText=""
                captionText="Jobstreet Profile"
                containerHeight="250px"
                containerWidth="250px"
                imageHeight="250px"
                imageWidth="250px"
                rotateAmplitude={20}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <p className="font-bold tracking-wider bg-white/30 backdrop-blur-md text-black border-y border-gray-500 py-2 px-4 rounded-xl">
                    Jobstreet
                    </p>
                }
                />
                </a>

                <a href="https://www.linkedin.com/in/john-clarence-legaspi-89b08934b/">
                <TiltedCard
                imageSrc="/images/links/linkedin.png"
                altText=""
                captionText="LinkedIn Profile"
                containerHeight="250px"
                containerWidth="250px"
                imageHeight="250px"
                imageWidth="250px"
                rotateAmplitude={20}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <p className="font-bold tracking-wider bg-white/30 backdrop-blur-md text-black border-y border-gray-500 py-2 px-4 rounded-xl">
                    LinkedIn
                    </p>
                }
                />
                </a>

                <a href="https://github.com/Abrilq">
                <TiltedCard
                imageSrc="/images/links/github-square.png"
                altText=""
                captionText="GitHub Profile"
                containerHeight="250px"
                containerWidth="250px"
                imageHeight="250px"
                imageWidth="250px"
                rotateAmplitude={20}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <p className="font-bold tracking-wider bg-white/30 backdrop-blur-md text-black border-y border-gray-500 py-2 px-4 rounded-xl">
                    GitHub
                    </p>
                }
                />
                </a>

                <a href="https://www.facebook.com/your-facebook-profile">
                <TiltedCard
                imageSrc="/images/links/facebook-squareblue.png"
                altText=""
                captionText="Facebook Profile"
                containerHeight="250px"
                containerWidth="250px"
                imageHeight="250px"
                imageWidth="250px"
                rotateAmplitude={20}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                    <p className="font-bold tracking-wider bg-white/30 backdrop-blur-md text-black border-y border-gray-500 py-2 px-4 rounded-xl">
                    Facebook
                    </p>
                }
                />
                </a>

                <button onClick={handleCopyEmail}>
                  <TiltedCard
                    imageSrc="/images/links/email-square.png"
                    altText=""
                    captionText={tooltipText}
                    containerHeight="250px"
                    containerWidth="250px"
                    imageHeight="250px"
                    imageWidth="250px"
                    rotateAmplitude={20}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="font-bold tracking-wider bg-white/30 backdrop-blur-md text-black border-y border-gray-500 py-2 px-4 rounded-xl">
                        {tooltipText}
                      </p>
                    }
                  />
                </button>
            </div>

          <footer className="relative w-full text-center py-6 text-gray-500 text-sm mt-10">
            © {new Date().getFullYear()} John Clarence A. Legaspi
          </footer>
        </section>
      </main>
    </FadeContent>
  );
}