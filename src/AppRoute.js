import React from "react";
import { Route, Routes } from "react-router-dom";
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
} from "./components/index";

const AppRoute = () => {
  return (
    <Routes>
      {/* dashboard */}
      <Route path="/" element={<Ecommerce />} />
      <Route path="/ecommerce" element={<Ecommerce />} />

      {/* pages */}
      <Route path="/orders" element={<Orders />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/customers" element={<Customers />} />

      {/* APPPS */}
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/color-picker" element={<ColorPicker />} />

      {/* CHARTS */}
      <Route path="/line" element={<Line />} />
      <Route path="/area" element={<Area />} />
      <Route path="/bar" element={<Bar />} />
    </Routes>
  );
};

export default AppRoute;
