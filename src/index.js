import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Profile from "./pages/Profile";
import Map from "./pages/Map";
import Onboarding from "./pages/Onboarding";
import Scene01 from "./pages/scenes/Scene01";
import Capture from "./pages/Capture";
import GameOver from "./pages/GameOver";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/map",
    element: <Map />,
  },
  {
    path: "/instructions",
    element: <Instructions />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/capture",
    element: <Capture />,
  },
  {
    path: "/scene_01",
    element: <Scene01 />,
  },

  {
    path: "/game_over",
    element: <GameOver />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
