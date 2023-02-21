import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {

  useEffect(() => {
    const goods = async () => {
      const result = await axios({
        method: 'get',
        url: 'https://api.escuelajs.co/api/v1/products'
      });
    //  eslint-disable-next-line no-console 
      console.log('result', result);
    }
    const products  = async () => {
      const result = await axios({
        method: 'get',
        url: 'https://api.escuelajs.co/api/v1/products/{id}'
      });
  //  eslint-disable-next-line no-console 
      console.log('result', result);
    }
    
    goods();
    products();
  }, []);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route/>
        <Route/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
