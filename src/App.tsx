import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FrontendLayout from "./components/layouts/FrontendLayout";
import AdminAuthLayout from "./components/layouts/AdminAuthLayout";
import Dashboard from "./pages/auth/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="auth" element={<AdminAuthLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
