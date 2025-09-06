import { useRef, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface FadeContentProps {
  children: ReactNode;
  blur?: boolean;
  duration?: number;
  easing?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  className?: string;
  inView?: boolean;
}

const FadeContent: React.FC<FadeContentProps> = ({
  children,
  blur = false,
  duration = 1000,
  easing = "ease-out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 1,
  className = "",
  inView: controlledInView,
}) => {
  const [autoInView, setAutoInView] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = controlledInView !== undefined ? controlledInView : autoInView;

  useEffect(() => {
    setIsFirstRender(false);
    if (controlledInView !== undefined) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAutoInView(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    
    return () => {
      observer.disconnect();
      setAutoInView(false);
    };
  }, [threshold, controlledInView]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isFirstRender ? initialOpacity : (inView ? 1 : initialOpacity),
        transition: `opacity ${duration}ms ${easing} ${delay}ms, filter ${duration}ms ${easing} ${delay}ms`,
        filter: blur ? (inView ? 'blur(0px)' : 'blur(8px)') : 'none',
      }}
    >
      {children}
    </div>
  );
};

export default FadeContent;
