import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Checkout from "./components/Checkout.jsx/Checkout";
import { useParams } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/checkout/:setId",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
