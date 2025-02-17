import React, { useState, useEffect, useRef } from "react";
import img from "../../assets/intro.jpg";

export default function Introduction() {
  // const [isVisible, setIsVisible] = useState(false);
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) {
  //       setIsVisible(true);
  //     }
  //   });

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  return (
    <div className="w-screen">
      <section
        // ref={sectionRef}
        className=" relative text-black py-20"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative">
              <img
                src={img}
                alt="Modern hospital facility"
                className="rounded-lg shadow-xl w-full h-auto max-h-[620px] object-cover"
              />
            </div>

            {/* Text Section */}
            <div className={`transition-all duration-700 transform `}>
              <h1 className="text-2xl font-bold mb-6">
                Welcome To Dr. Kanade Hospital and Laparoscopy Center
              </h1>
              <p className="text-lg font-serif mb-8">
                Dr. Kanade Hospital, situated on Nagar-Manmad Road, Rahata
                (Shirdi), Ahmednagar, is a distinguished multispecialty
                healthcare center renowned for its advanced medical treatments
                and state-of-the-art facilities. The hospital is equipped with
                cutting-edge technology, including a Canada-made photonics laser
                system, and is committed to delivering minimally invasive
                procedures that ensure reduced discomfort and expedited
                recovery.
              </p>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Harmony Laser Clinic
              </h3>
              <p className="text-lg font-serif mb-8">
                The Harmony Laser Clinic, a specialized division of the
                hospital,offers expertise in cosmetic gynecology and andrology,
                addressing a wide range of medical needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
