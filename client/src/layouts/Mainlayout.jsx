import { Outlet } from "react-router-dom";
import Footer from "../components/layouts/Footer/Footer";
import Navbar from "../components/layouts/Navbar/Navbar";
import Marque from "../components/ui/marque";
// import Loader from "../components/Loader/Loader";
function MainLayout() {
  return (
    <>
      <Navbar />
      <Marque />
      <span>
        <Outlet />
      </span>
      <Footer />
    </>
  );
}

export default MainLayout;
