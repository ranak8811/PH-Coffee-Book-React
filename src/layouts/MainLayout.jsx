import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
const MainLayout = () => {
  return (
    <div>
      <div className="h-16">
        {/* Navbar */}
        <Navbar></Navbar>
      </div>

      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto px-12">
        {/* Dynamic Section */}
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;
