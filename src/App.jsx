import Navigate from "./Components/Navigate";
import Users from "./Components/Users";
import ProductDetail from "./Components/ProductDetail";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate />} />
        <Route path="/users" element={<Users />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>


      <Footer />
    </>
  );
}

export default App;
