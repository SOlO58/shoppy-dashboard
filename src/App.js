import React, { useEffect } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {
  Ecommerce,
  Orders,
  Employees,
  Customers,
  Calendar,
  Kanban,
  Editor,
  ColorPicker,
  Line,
  Area,
  Bar,
  ThemeSettings,
  Sidebar,
  Navbar,
} from "./components/index";

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

          <Routes>
            {/* dashboard */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* pages */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* APPPS */}
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/color-picker" element={<ColorPicker />} />

            {/* CHARTS */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
