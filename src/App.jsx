import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard'
 import aboutus from './aboutus'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama / Root (Menggunakan fragment kosong sebagai placeholder) */}
        <Route path="/" element={<Dashboard></Dashboard>} />
<Route path="/aboutus" element={<aboutus></aboutus>} />

        {/* Nanti jika ada halaman baru, daftarkan di bawah ini. Contoh: */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}