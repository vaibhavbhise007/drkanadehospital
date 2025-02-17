import { useState, useEffect, useRef } from "react";

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words", // 'words' or 'letters'
  direction = "top", // 'top' or 'bottom'
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = "ease-out",
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  const defaultFrom =
    direction === "top"
      ? "filter blur-md opacity-0 transform -translate-y-6"
      : "filter blur-md opacity-0 transform translate-y-6";

  const defaultTo = "filter blur-none opacity-100 transform translate-y-0";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <h1 ref={ref} className={`flex flex-wrap ${className}`}>
      {elements.map((el, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ${
            mounted && inView
              ? animationTo || defaultTo
              : animationFrom || defaultFrom
          }`}
          style={{
            transitionDelay: `${index * delay}ms`,
            transitionTimingFunction: easing,
          }}
        >
          {el === " " ? "\u00A0" : el}
          {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
        </span>
      ))}
    </h1>
  );
};

export default BlurText;
