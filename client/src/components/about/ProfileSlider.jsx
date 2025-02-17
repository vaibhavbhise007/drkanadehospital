import React from "react";
import Slider from "react-slick";
import Img1 from "../../assets/WhyWeStandOut/AdvancedTechnologyImg.webp";
import Img2 from "../../assets/WhyWeStandOut/PatientCentricApproach.webp";
import Img3 from "../../assets/WhyWeStandOut/DoctorImg.webp";

function ProfileSlider() {
  const slickSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
  };

  const features = [
    {
      title: "Best Doctors",
      description:
        "Our dedicated team of skilled healthcare professionals stays current on the latest medical advancements and utilizes cutting-edge technologies to ensure the highest quality care for our patients.",
      iconClass: "top-[-60px] left-1/2 transform -translate-x-1/2",
      image: Img3,
    },
    {
      title: "Advanced Technology",
      description:
        "Our commitment to technological advancement ensures that we are always at the forefront of medical innovative technology, which allows us to provide more accurate diagnoses, more effective treatments, and a more personalized patient experience.",
      iconClass: "top-[-60px] left-1/2 transform -translate-x-1/2",
      image: Img1,
    },
    {
      title: "Patient-Centric Approach",
      description:
        "Committed to patient-centered care, we tailor our approach to individual needs, emphasizing open communication and collaboration between patients and healthcare providers for optimal health outcomes.",
      iconClass: "top-[-60px] left-1/2 transform -translate-x-1/2",
      image: Img2,
    },
  ];

  return (
    <>
      {/* Desktop & Tablet View */}
      <div className="bg-white p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black">Why We Stand Out?</h1>
          <div className="w-40 border-t-4 border-orange-950 mx-auto mt-2"></div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 p-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-3xl h-80 p-6 pt-20 group hover:scale-105 transition-all duration-300 bg-gray-200 cursor-default"
            >
              <h1 className="text-center text-black font-bold text-lg sm:text-xl">
                {feature.title}
              </h1>
              <p className="text-center text-md pt-4 text-black font-serif">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View - Slider */}
        <div className="lg:hidden ">
          <Slider {...slickSettings}>
            {features.map((feature, index) => (
              <div key={index} className="pt-8 ">
                <div className="flex justify-center">
                  <div className="relative bg-gray-200 rounded-3xl p-6 pb-6 pt-20 w-full max-w-[90%] mx-auto">
                    
                    <h1 className="text-center text-black font-bold text-lg sm:text-xl">
                      {feature.title}
                    </h1>
                    <p className="text-center text-md pt-4 text-black font-serif">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ProfileSlider;
