import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components Home
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Treatments from "./pages/Treatments/Treatments";
import Contact from "./pages/Contact/Contact";
import Appointment from "./pages/Appointment/Appointment";
import Profile from "./pages/Profile/Profile";

// Layouts
import MainLayout from "./layouts/MainLayout";
import ToastContainers from "./components/Toast/ToastContainer";

// Loader
import Loader, { LoaderWithImage } from "./components/Loader/Loader";
import TreatmentsPage from "./pages/Treatments/TreatmentsPage";
import BlogSPage from "./pages/Blog/BlogSPage";
import { useEffect, useState } from "react";

export default function App() {
  // Show loader until session is fetched
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadComplete = () => setLoading(false);
    const timer = setTimeout(handleLoadComplete, 2000); // Simulate loading time

    return () => clearTimeout(timer); // Cleanup
  }, []);

  if (loading) {
    <div className="flex justify-center items-center h-full">
      <LoaderWithImage />
    </div>;
  }
  // Main routes for logged-in users
  const mainRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/treatments", element: <Treatments /> },
    { path: "/treatments/:treatmentId", element: <TreatmentsPage /> },
    { path: "/contact", element: <Contact /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blog/:blogId", element: <BlogSPage /> },
    { path: "/appointment", element: <Appointment /> },
    { path: "/profile/:id", element: <Profile /> },
  ];

  // Function to render routes with the specified layout
  const renderRoutes = (layout, routes) => (
    <Route path={layout.path} element={layout.component}>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Route>
  );

  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes({ path: "", component: <MainLayout /> }, mainRoutes)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainers />
    </BrowserRouter>
  );
}
