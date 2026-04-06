// src/App.jsx
import BiodataDiri from './components/BiodataDiri';
// import HitungGajiForm from './Tugas-Form-Gaji/HitungGajiForm';


function App() {
  return (
    <div className="app-container">
      {/* Langsung tampilkan Biodata, gak perlu pindah halaman */}
      <BiodataDiri />
      {/* <HitungGajiForm /> */}
    </div>
  );
}

export default App;