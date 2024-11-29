import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import SimpleCalculatorSample from "./samples/SimpleCalculatorSample";
import DifferentDevicesLayoutSample from "./samples/DifferentDevicesLayoutSample.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/simple-calculator"
          element={
            <SimpleCalculatorSample
              title="Simple Calculator"
              path="/simple-calculator"
            />
          }
        />
        <Route
          path="/simple-calculator-responsive"
          element={
            <DifferentDevicesLayoutSample
              title="Simple Calculator Responsive"
              path="/simple-calculator-responsive"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
