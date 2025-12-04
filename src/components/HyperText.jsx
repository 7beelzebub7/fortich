import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
);

const getRandomInt = (max) => Math.floor(Math.random() * max);

export function HyperText({
  children,
  className = "",
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
  ...props
}) {
  const [displayText, setDisplayText] = useState(children.split(""));
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationCount = useRef(0);
  const elementRef = useRef(null);

  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };

  // Start animation based on view or delay
  useEffect(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => setIsAnimating(true), delay);
      return () => clearTimeout(startTimeout);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsAnimating(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [delay, startOnView]);

  // Scramble animation
  useEffect(() => {
    if (!isAnimating) return;

    const maxIterations = children.length;
    const startTime = performance.now();
    let animationFrameId;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      iterationCount.current = progress * maxIterations;

      setDisplayText((currentText) =>
        currentText.map((letter, index) =>
          letter === " "
            ? letter
            : index <= iterationCount.current
            ? children[index]
            : characterSet[getRandomInt(characterSet.length)]
        )
      );

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [children, duration, isAnimating, characterSet]);

  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      ref={elementRef}
      className={`overflow-hidden py-2 text-4xl font-bold ${className}`}
      onMouseEnter={handleAnimationTrigger}
      {...props}
    >
      {displayText.map((letter, index) => (
        <span
          key={index}
          className={letter === " " ? "w-3 inline-block" : "font-mono"}
        >
          {letter.toUpperCase()}
        </span>
      ))}
    </MotionComponent>
  );
}
