import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header";
import ProductsPage from "./pages/ProductsPage";
import SomePage2 from "./pages/SomePage2";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/SomePage1" element={<ProductsPage />} />
          <Route path="/SomePage2/:id" element={<SomePage2 />} />
          <Route path="*" element={<Navigate to="/SomePage1" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
