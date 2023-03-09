import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
