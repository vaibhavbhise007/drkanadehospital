import React, { useState } from "react";

export default function Marque() {
  const [offers, setOffers] = useState([
    "🏥 Treatments Available: Endometriosis, Uterine Cancer, Tubal Recanalization, TOT, Laser Treatment for Piles",
    "🏥 Facilities Available: Hospital Pharmacy, Cardiac Life Support Ambulances, Emergency Response System, Pathology Lab Services, Special Rooms & General Ward",
    "📅 Book Your Appointment Online & Get Priority Check-in!",
  ]);

  return (
    <div className="fixed bg-orange-900 text-white py-2 overflow-hidden w-full top-20 z-50">
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span className="mx-5 font-bold">
            🏥 Welcome to Dr. Kanade Hospital and Harmony Laser Clinic |
          </span>
          {offers.map((offer, index) => (
            <span key={index} className="mx-5 font-semibold">
              {offer} |
            </span>
          ))}
          <span className="mx-5 font-bold">
            📞 Contact Us: +91 98765 43210 | 📍 Visit: www.anadehospital.com
          </span>
        </div>
        {/* Repeat the content for seamless scrolling */}
        <div className="marquee-content">
          <span className="mx-5 font-bold">
            🏥 Welcome to Dr. Kanade Hospital and Harmony Laser Clinic |
          </span>
          {offers.map((offer, index) => (
            <span key={index} className="mx-5 font-semibold">
              {offer} |
            </span>
          ))}
          <span className="mx-5 font-bold">
            📞 Contact Us: +91 98765 43210 | 📍 Visit: www.anadehospital.com
          </span>
        </div>
      </div>
    </div>
  );
}
