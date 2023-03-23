import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

import Header from "./Header";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";
import CategoryPage from "./pages/CategoryPage";

import "./App.css";
import ScrollToTop from "@components/ScrollToTop";

const App = () => {
  return (
    <>
      <HashRouter basename="/kts-hw-3">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/categories" element={<CategoryPage/>}/>
          <Route path="*" element={<Navigate to="/products" replace />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
