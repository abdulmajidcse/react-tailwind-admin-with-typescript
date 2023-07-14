import { useEffect, useState } from "react";
import Footer from "../auth/footer/Footer";
import Sidebar from "../auth/sidebar/Sidebar";
import Header from "../auth/header/Header";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  const [sidebarMenuOpenIs, setSidebarMenuOpenIs] = useState<boolean>(true);

  const sidebarMenuClose = () => setSidebarMenuOpenIs(false);
  const toggleSidebarMenu = () =>
    setSidebarMenuOpenIs((prevState) => !prevState);

  // change sidebarMenuOpenIs value when screen width will change
  const matchMediaForSidebar = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      // in lg screen
      setSidebarMenuOpenIs(true);
    } else {
      // in less than lg screen
      setSidebarMenuOpenIs(false);
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

  return (
    <>
      <div className="dark:bg-slate-800 dark:highlight-white/5 dark:text-slate-400 min-h-screen">
        <Header onToggleSidebar={toggleSidebarMenu} />

        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 bg-slate-50 dark:bg-inherit">
          <Sidebar show={sidebarMenuOpenIs} onClose={sidebarMenuClose} />
          <div
            className={`transition-all duration-300 ${
              sidebarMenuOpenIs ? "lg:pl-[17rem]" : ""
            }`}
          >
            <main className="pt-5 min-h-[calc(100vh-13rem)]">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
