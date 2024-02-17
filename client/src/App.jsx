import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./components/AddProduct";
import { AuthProvider } from "./store/auth";
import Vendors from "./pages/Vendors";
import AddVendor from "./components/AddVendor";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add-product" element={<AddProduct />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/vendors/add-vendor" element={<AddVendor />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
