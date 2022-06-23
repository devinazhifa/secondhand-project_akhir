import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Info_akun from './Pages/Info Akun/Info_akun';
import Info_produk from './Pages/Info Produk/Info_produk';
import Info_penawaran from './Pages/Info Penawaran/Info_penawaran';
import Detail_produk from './Pages/Detail Produk/Detail_produk';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register';
import DaftarJual from './Pages/Daftar Jual/DaftarJual';
import Homepage from './Pages/Homepage/Homepage';

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
            <Route path="login" element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='homepage' element={<Homepage />} />
            <Route path="info-akun" element={<Info_akun />} />
            <Route path="info-produk" element={<Info_produk />} />
            <Route path="detail-produk" element={<Detail_produk />} />
            <Route path='daftar-jual' element={<DaftarJual/>} />
            <Route path="info-penawaran" element={<Info_penawaran />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;