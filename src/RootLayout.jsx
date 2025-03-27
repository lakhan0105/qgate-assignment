import React, { useState } from "react";
import { Outlet } from "react-router";
import BigNavbar from "./Components/BigNavbar";
import Sidebar from "./Components/Sidebar";

function RootLayout() {
  const [sidebarStatus, setSidebarStatus] = useState(false);

  // hideSidebar
  function hideSidebar() {
    setSidebarStatus(false);
  }

  function showSidebar() {
    setSidebarStatus(true);
  }

  return (
    <>
      <nav>
        <BigNavbar showSidebar={showSidebar} />

        {sidebarStatus && <Sidebar hideSidebar={hideSidebar} />}
      </nav>

      <Outlet />
    </>
  );
}

export default RootLayout;
