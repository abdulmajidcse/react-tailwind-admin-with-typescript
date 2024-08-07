import { useEffect, useState } from "react";
import Footer from "../auth/footer/Footer";
import Sidebar from "../auth/sidebar/Sidebar";
import Header from "../auth/header/Header";
import { Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const location = useLocation();
  const [sidebarMenuOpenIs, setSidebarMenuOpenIs] = useState<boolean>(true);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  const sidebarMenuClose = () => setSidebarMenuOpenIs(false);
  const toggleSidebarMenu = () =>
    setSidebarMenuOpenIs((prevState) => !prevState);

  // change sidebarMenuOpenIs value when screen width will change
  const matchMediaForSidebar = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      // in lg screen
      setIsLargeScreen(true);
    } else {
      // in less than lg screen
      setIsLargeScreen(false);
    }
  };

  useEffect(() => {
    const windowWidthLg = window.matchMedia("(min-width: 1024px)");
    windowWidthLg.addEventListener("change", matchMediaForSidebar);
    matchMediaForSidebar(windowWidthLg);

    return () => {
      windowWidthLg.removeEventListener("change", matchMediaForSidebar);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      setSidebarMenuOpenIs(true);
    } else {
      sidebarMenuClose();
    }
  }, [location, isLargeScreen]);

  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-slate-400 min-h-screen">
        <Header onToggleSidebar={toggleSidebarMenu} />
        <Sidebar show={sidebarMenuOpenIs} onClose={sidebarMenuClose} />
        <div
          className={`transition-all duration-300 px-4 sm:px-6 md:px-8 pt-16 ${
            sidebarMenuOpenIs ? "lg:ml-[17rem]" : ""
          }`}
        >
          <main className="pt-5 min-h-[calc(100vh-13rem)]">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
