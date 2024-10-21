import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import OrdersPage from "./pages/orders/Orders";
import Layout from "./components/layout/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="ordenes" element={<OrdersPage />} />
      </Route>
    </Routes>
  );
};

export default App;
