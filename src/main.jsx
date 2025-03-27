import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// imports for react router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

import RootLayout from "./RootLayout";
import Home from "./Pages/Home";
import ServiceDetails from "./Pages/ServiceDetails";
import AboutPage from "./Pages/AboutPage";

// create router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/services/:id" element={<ServiceDetails />} />
      <Route path="/about" element={<AboutPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
