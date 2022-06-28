import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InfoAkun from './Pages/InfoAkun/InfoAkun';
import InfoProduk from './Pages/InfoProduk/InfoProduk';
import InfoPenawaran from './Pages/InfoPenawaran/InfoPenawaran';
import DetailProduk from './Pages/DetailProduk/DetailProduk';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register';
import DaftarJual from './Pages/DaftarJual/DaftarJual';
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
<<<<<<< HEAD
            <Route path="info-akun" element={<Info_akun />} />
            <Route path="info-produk" element={<Info_produk />} />
            <Route path="detail-produk" element={<Detail_produk />} />
            <Route path='daftar-jual' element={<DaftarJual/>} />
            <Route path="info-penawaran" element={<Info_penawaran />} />
=======
            <Route path="info-akun" element={<InfoAkun />} />
            <Route path="info-produk" element={<InfoProduk />} />
            <Route path="detail-produk" element={<DetailProduk />} />
            <Route path='daftar-jual' element={<DaftarJual/>} />
            <Route path="info-penawaran" element={<InfoPenawaran />} />
>>>>>>> 2a56479 (update form product responsive deleteable)
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;