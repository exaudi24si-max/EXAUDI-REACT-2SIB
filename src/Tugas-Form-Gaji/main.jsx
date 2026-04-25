import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HitungGajiForm from "./HitungGajiForm"; 
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Background ditaruh di sini biar seluruh halaman Tugas-Form-Gaji jadi abu-abu */}
    <div className="min-h-screen bg-gray-100">
      <HitungGajiForm />
    </div>
  </StrictMode>
);