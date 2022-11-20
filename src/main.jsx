import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Welcome from "./components/Welcome/Welcome";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/mysterybox",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
