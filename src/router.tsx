import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./Features/Auth/Login";
import Dashboard from "./Features/Dashboard/Dashboard";
import DataTool from "./Features/Ypay/DataTool";
import PatternLayout from "./Features/Patterns/PatternLayout";
import Colis243 from "./Features/Colis243/Colis243";
import ProjectLayout from "./Features/Profil/ProjectLayout";
import Ypay from "./Features/Ypay/Ypay";
import NewOrder from "./Features/Ypay/NewOrder";

const router: any = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Dashboard />}>
        <Route path="orders" element={<Ypay />} />
        <Route path="new_orders" element={<NewOrder />} />
        <Route
          path=""
          element={
            <React.Suspense fallback={<>...</>}>
              <DataTool />
            </React.Suspense>
          }
        />
        <Route path="colis243" element={<Colis243 />} />
        <Route path="profil" element={<Colis243 />} />

        <Route
          path="ypay"
          element={
            <React.Suspense fallback={<>...</>}>
              <PatternLayout />
            </React.Suspense>
          }
        />

        <Route
          path="deces"
          element={
            <React.Suspense fallback={<>...</>}>
              <ProjectLayout />
            </React.Suspense>
          }
        />
      </Route>
    </>
  )
);

export default router;
