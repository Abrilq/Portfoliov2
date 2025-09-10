import React, { type JSX } from "react";
import FadeContent from 'app/welcome/FadeContent'
import { useNavigate } from "react-router-dom";
import TiltedCard from 'app/welcome/TiltedCard';

export default function ResumePage(): JSX.Element {
  const navigate = useNavigate();
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

        <section className="p-8 sm:m-none lg:m-20">
            <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-1">

                <TiltedCard
                imageSrc="/images/psd/dycguide.png"
                altText=""
                captionText="Email"
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
                    Email
                    </p>
                }
                />
                <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
                <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
                <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
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
            </div>
        </section>
      </main>
    </FadeContent>
  );
}
