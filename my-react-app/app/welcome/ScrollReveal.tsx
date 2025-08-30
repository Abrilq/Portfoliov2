import React, { useEffect, useRef, useMemo } from "react";
import type { ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  stagger?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 10, // Increased blur strength
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
  stagger = 0.2, // Reduced default stagger for smoother animation
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const children = el.children;

    // Create the blur animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: "top bottom-=20%",
        end: "center center",
        scrub: false,
      },
    });

    // Initial state with blur
    gsap.set(children, {
      opacity: baseOpacity,
      y: 50,
      rotate: baseRotation,
      filter: `blur(${blurStrength}px)`,
    });

    // Animation sequence
    tl.to(children, {
      opacity: 1,
      y: 0,
      rotate: 0,
      filter: "blur(0px)",
      duration: 1,
      stagger: stagger,
      ease: "power2.out",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [baseOpacity, baseRotation, blurStrength, scrollContainerRef, stagger]);

  return (
    <div
      ref={containerRef}
      className={`my-5 ${containerClassName}`}
      style={{ willChange: "filter" }} // Optimize performance for filter animations
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
