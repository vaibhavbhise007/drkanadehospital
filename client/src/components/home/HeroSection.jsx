import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import drimage from "../../assets/dr.png";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BlurText from "../ui/BlurText";
import ErrorBoundary from "../error/ErrorBoundary";
import backgroundImg from "../../assets/landingpageimg.jpg";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative text-black py-20 rounded overflow-hidden pt-36 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})`, opacity: 0.9 }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Text Section */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } md:text-left tracking-wider md:tracking-normal w-full md:w-1/2`}
        >
          <ErrorBoundary>
            <BlurText
              text="Dr. Kanade Hospital & Harmony Laser Clinic"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold flex justify-center md:justify-start"
            />
          </ErrorBoundary>

          {/* Mobile Image */}
          <div className="md:hidden flex justify-center mb-6">
            <div className="flex justify-center w-full max-w-xs md:max-w-md lg:max-w-lg">
              <img
                src={drimage}
                alt="Doctor"
                className="max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px] w-auto"
              />
            </div>
          </div>

          {/* Text Description */}
          <p className="text-lg sm:text-xl md:text-lg lg:text-xl my-6 leading-relaxed">
            Experience advanced cosmetic gynecology and men's health treatments
            with minimal recovery time at Dr. Kanade Hospital.
          </p>

          {/* Button */}
          <Button
            onClick={() => {
              window.location.href = "tel:+91 9420636736";
            }}
            className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white px-6 py-3 text-lg rounded shadow-lg transition-transform transform hover:scale-105 mb-4 md:mb-2"
          >
            Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Image Section (Desktop) */}
        <div className="hidden md:block w-full mt-5 md:w-1/2">
          <img
            src={drimage}
            alt="Doctor"
            className="w-full h-auto max-w-[350px] mx-auto"
          />
        </div>
      </div>

      {/* Divider Line */}
      <div className=" bottom-20 left-8 right-8 h-[2px] bg-black"></div>
    </section>
  );
}
