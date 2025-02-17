import { Outlet } from "react-router-dom";
import Footer from "../components/layouts/Footer/Footer";
import Navbar from "../components/layouts/Navbar/Navbar";
import Marque from "../components/ui/marque";
// import Loader from "../components/Loader/Loader";
function MainLayout() {
  return (
    <div className="w-screen">
      <Navbar />
      <Marque />
      {/* <div className="sticky rounded-full h-12 w-12 top-[510px] left-[1280px] z-50 bg-red-800 text-center p-4 hover:cursor-pointer">
        K
      </div>
      <span> */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
