// src/App.jsx
import BiodataDiri from './components/BiodataDiri';

function App() {
  return (
    <div className="app-container">
      {/* Langsung tampilkan Biodata, gak perlu pindah halaman */}
      <BiodataDiri />
    </div>
  );
}

export default App;