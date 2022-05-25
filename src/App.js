import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductManagment from "./routs/productManagment";
import TopUpChange from "./routs/TopUpChange";
import Purchase from "./routs/Purchase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "자판기";
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductManagment />} />
        <Route path="/topup" element={<TopUpChange />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </Router>
  );
}

export default App;
