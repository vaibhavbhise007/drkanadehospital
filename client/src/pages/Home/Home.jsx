import HeroSection from "../../components/home/HeroSection";
import OurSpecialists from "../../components/home/OurSpecialists";
import Introduction from "../../components/home/Introduction";
import CampSection from "../../components/home/CampSection";
import MedicalDepartment from "../../components/home/MedicalDepartment";
import MedicalEmergency from "../../components/home/MedicalEmergency";
import OurServices from "../../components/home/OurServices";
import FacilitiesSection from "../../components/home/FacilitiesSection";
import Hero2 from "../../components/home/hero2";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <CampSection />
      <MedicalDepartment />
      <MedicalEmergency />
      <OurServices />
      <FacilitiesSection />
      <OurSpecialists />
    </div>
  );
}
