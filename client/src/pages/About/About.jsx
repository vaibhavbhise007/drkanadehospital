import { Target, Globe } from "lucide-react";
import backgroundImage1 from "../../assets/img1.jpg";
import backgroundImage2 from "../../assets/AboutsUsBackgroundImage.jpg";
import DoctorPhoto from "../../assets/DoctorPhoto.png";
import OurSpecialists from "../../components/home/OurSpecialists";
import ProfileSlider from "../../components/about/ProfileSlider";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo(0, 0); // Scroll to the top
    }
  }, [location]);
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="bg-white">
        <div className="bg-[rgb(107,71,55)]/15  py-16 relative">
          <div
            className="absolute opacity-70 inset-0 bg-cover -z-60"
            style={{ backgroundImage: `url(${backgroundImage1})` }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center text-black pt-10">
              <h1 className="text-3xl sm:text-4xl font-bold pt-14">
                About Dr. Kanade Hospital
              </h1>
              <p className="text-base sm:text-lg font-serif text-gray-600">
                Leading the way in advanced Laser surgery for piles, fistulas,
                fissures, varicose veins, and more.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute opacity-40 inset-0 bg-cover -z-60"
            style={{
              backgroundImage: `url(${backgroundImage2})`,
            }}
          ></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-[60%,40%] gap-8 items-center">
              <div className="z-40 pt-10 sm:pt-32 pb-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  About Dr. Datta Kanade
                </h2>
                <div className="w-24 h-1 bg-[rgb(107,71,55)] mb-6"></div>
                <p className="text-black text-lg font-serif mb-4">
                  Dr. Datta Kanade is a highly qualified medical professional
                  holding an MBBS degree and a DGO specialization. He is an
                  accomplished Gynaecologist with extensive experience in the
                  field of Cosmetic Gynaecology and Laparoscopic Surgery. His
                  expertise extends to being an Obstetrician as well as a
                  renowned specialist in NDVH (Non-Descent Vaginal Hysterectomy)
                  and vNOTE (Vaginal Natural Orifice Transluminal Endoscopic
                  Surgery) Hysterectomy techniques. With a dedication to
                  providing exceptional care, Dr. Kanade combines his surgical
                  precision with a compassionate approach to address the diverse
                  needs of his patients.
                </p>
                <button className="bg-[rgb(107,71,55)] text-white px-6 py-2 rounded-full shadow-lg hover:bg-red-700">
                  Read More
                </button>
              </div>

              <div className="pt-10 sm:pt-0 flex justify-center ">
                <img
                  src={DoctorPhoto}
                  alt="Dr. Datta Kanade"
                  className="z-40 rounded-lg bg-cover bg-gray-500 h-[450px] md:w-2/3 sm:w-1/2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center ">
            <div>
              <div className="flex">
                <Target className="h-10 w-10 text-[rgb(107,71,55)] mr-4" />
                <div>
                  <h2 className="text-2xl font-serif text-[rgb(107,71,55)] mb-6">
                    Our Vision
                  </h2>
                </div>
              </div>
              <p className="text-black text-lg font-serif mb-6">
                Excellence First and Always
              </p>

              <div className="flex">
                <Globe className="h-10 w-10 text-[rgb(107,71,55)] mr-4" />
                <div>
                  <h2 className="text-2xl font-serif text-[rgb(107,71,55)] mb-6">
                    Our Mission
                  </h2>
                </div>
              </div>
              <p className="text-black text-lg font-serif flex items-center">
                Compassionate Quality Healthcare
              </p>
            </div>
          </div>
        </div>

        <ProfileSlider />
      </div>
      <OurSpecialists />
    </>
  );
}
