import React from "react";
import bg from "../../assets/texture.jpg";
import f1 from "../../assets/f1.jpg";
import f2 from "../../assets/f2.jpg";
import f3 from "../../assets/f3.jpg";
import f4 from "../../assets/f4.jpg";
import f5 from "../../assets/f5.jpg";
import f6 from "../../assets/f6.jpg";

function FacilitiesSection() {
  const facilities = [
    {
      img: f1,
      title: "Hospital Pharmacy",
      description:
        "24/7 pharmacy services with a wide range of medicines available for patients. " +
        "Well-stocked with essential and emergency medications. " +
        "Qualified pharmacists to guide patients on prescriptions and dosages.",
    },
    {
      img: f2,
      title: "Ample Parking Space",
      description:
        "Spacious and secure parking facility for visitors and staff. " +
        "Round-the-clock security and surveillance. " +
        "Designated spaces for emergency and special needs parking.",
    },
    {
      img: f3,
      title: "Emergency Response System",
      description:
        "Quick response emergency team available at all times for critical situations. " +
        "Advanced life-saving equipment to handle emergencies efficiently. " +
        "Trained professionals ensuring immediate medical assistance.",
    },
    {
      img: f4,
      title: "Cardiac Life Support Ambulances",
      description:
        "Fully equipped ambulances for cardiac emergencies and critical care transport. " +
        "Monitored by trained paramedics and cardiologists. " +
        "Advanced medical devices for real-time monitoring and first aid.",
    },
    {
      img: f5,
      title: "Pathology Lab Services",
      description:
        "State-of-the-art diagnostic lab services for accurate medical tests. " +
        "Fast and reliable test results with expert analysis. " +
        "Equipped with modern testing equipment for precise diagnosis.",
    },
    {
      img: f6,
      title: "Special Rooms & General Ward",
      description:
        "Comfortable and hygienic rooms with all necessary facilities for patients. " +
        "Private and semi-private rooms with personalized care. " +
        "Ensuring a stress-free and healing environment for all patients.",
    },
  ];

  return (
    <section className="relative px-4 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          opacity: 0.2,
        }}
      ></div>
      <div className="text-center py-4">
        <h1 className="text-4xl font-bold text-gray-900 py-4">
          Amenities In Kanade Hospital
        </h1>
        <p>
          Kanade Hospital, Rahata offers a variety of amenities to make your
          stay with us as easy and comfortable as possible. Right from using
          highly advanced medical equipment to delivering personalized care to
          patients, we leave no stone unturned to deliver you simply the best.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 px-8 pb-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="relative bg-white hover:shadow-xl p-6 flex flex-col lg:flex-row items-center sm:space-x-4 sm:space-y-0 border transition-transform transform hover:scale-105 group overflow-hidden"
          >
            {/* Image */}
            <img
              src={facility.img}
              alt={facility.title}
              className="w-full sm:w-60 h-34 object-cover sm:mb-0"
            />

            {/* Title */}
            <h2 className="text-lg font-bold text-black text-center sm:text-left mb-4 sm:mb-0">
              {facility.title}
            </h2>

            {/* Hover Slide-in Effect */}
            <div className="absolute top-0 left-[-100%] w-full h-full bg-black bg-opacity-80 text-white flex flex-col items-center justify-center text-center p-4 px-8 transition-all duration-500 group-hover:-left-10">
              <p className="text-lg font-semibold">{facility.title}</p>
              <p className="text-sm">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FacilitiesSection;
