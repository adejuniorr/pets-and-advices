import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Home } from "./Home";
import { LoginPage } from "./LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route path="home" element={<Home />}>
        {/* <Route index element={<UserProfilePage />} /> */}
        {/*<Route path="pets" element={<PetsPage />} /> */}
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
