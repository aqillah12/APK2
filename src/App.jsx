import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama / Root (Menggunakan fragment kosong sebagai placeholder) */}
        <Route path="/" element={<Dashboard></Dashboard>} />

        {/* Nanti jika ada halaman baru, daftarkan di bawah ini. Contoh: */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}