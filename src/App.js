import React, { useEffect } from "react";
import "./App.css";

import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import AppRoute from "./AppRoute";
import { ThemeSettings, Sidebar, Navbar } from "./components/index";

import { useStateContext } from "./store/ContextProvider";
const App = () => {
  const {
    activeMenu,
    setThemeSettings,
    themeSettings,
    currentColor,
    currentMode,
  } = useStateContext();
  return (
    <div className={`${currentMode === "Dark" ? "dark" : ""} `}>
      <div className={` toolTip__box`}>
        <div className="toolTip__content">
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="toolTip__btn"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="sidebar__active">
            {" "}
            <Sidebar />
          </div>
        ) : (
          <div className="sidebar__disable">
            <Sidebar />
          </div>
        )}

        <div
          className={
            activeMenu ? "active-menu__enable" : "active-menu__disable"
          }
        >
          <div className="navbar">
            <Navbar />
          </div>

          {themeSettings && <ThemeSettings />}
          <AppRoute />
        </div>
      </div>
    </div>
  );
};

export default App;
