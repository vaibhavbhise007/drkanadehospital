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
  const [mainLoading, setMainLoading] = useState(true); // New loader for main page

  useEffect(() => {
    const handleLoadComplete = () => setLoading(false);
    const timer = setTimeout(handleLoadComplete, 2000); // Simulate loading time

    return () => clearTimeout(timer); // Cleanup
  }, []);

  useEffect(() => {
    const mainLoaderTimer = setTimeout(() => setMainLoading(false), 1000); // Show loader for 1 sec
    return () => clearTimeout(mainLoaderTimer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderWithImage />
      </div>
    );
  }

  if (mainLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
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
