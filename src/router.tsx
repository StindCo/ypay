import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./Features/Auth/Login";
import Dashboard from "./Features/Dashboard/Dashboard";
import Main from "./Features/Ypay/Main";
import PatternLayout from "./Features/Patterns/PatternLayout";
import Colis243 from "./Features/Colis243/Colis243";
import ProjectLayout from "./Features/Profil/ProjectLayout";
import Ypay from "./Features/Ypay/Ypay";
import NewOrder from "./Features/Ypay/NewOrder";
import NewColis from "./Features/Clients/NewColis";
import Client from "./Features/Clients/Client";

const router: any = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />

      <Route path="/home" element={<Dashboard />}>
        <Route path="orders" element={<Ypay />} />
        <Route path="new_orders" element={<NewOrder />} />
        <Route path="colis243" element={<Colis243 />} />
        <Route path="clients" element={<Client />} />
        <Route path="new_colis" element={<NewColis />} />
        <Route
          path=""
          element={
            <React.Suspense fallback={<>...</>}>
              <Main />
            </React.Suspense>
          }
        />
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
