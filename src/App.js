import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Info_akun from './Components/Info Akun/Info_akun';
import Info_produk from './Components/Info Produk/Info_produk';
import Info_penawaran from './Components/Info Penawaran/Info_penawaran';
import Detail_produk from './Components/Detail Produk/Detail_produk';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
            <Route path="info-akun" element={<Info_akun />} />
            <Route path="info-produk" element={<Info_produk />} />
            <Route path="detail-produk" element={<Detail_produk />} />
            <Route path="info-penawaran" element={<Info_penawaran />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;