import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Welcome from "./components/Welcome/Welcome";
import { QueryClient, QueryClientProvider } from "react-query";
import Background from "./components/Background/Background";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Background />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/mysterybox" element={<App />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
