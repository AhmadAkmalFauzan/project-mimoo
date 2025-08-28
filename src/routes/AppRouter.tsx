import { BrowserRouter, Route, Routes } from "react-router";
import Mimo from "@/pages/mimo";
import Catalog from "@/pages/catalog";
import About from "@/pages/about";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mimo />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
