import './main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast, Zoom , Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfoAkun from './Pages/InfoAkun/InfoAkun';
import InfoProduk from './Pages/InfoProduk/InfoProduk';
import InfoPenawaran from './Pages/InfoPenawaran/InfoPenawaran';
import DetailProduk from './Pages/DetailProduk/DetailProduk';
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register';
import DaftarJual from './Pages/DaftarJual/DaftarJual';
import Homepage from './Pages/Homepage/Homepage';
import LamanNotifikasi from './Pages/LamanNotifikasi/LamanNotifikasi';
import DetailProdukBuyer from './Pages/DetailProdukBuyer/DetailProdukBuyer';

const App = () => {

  return (
    <div className="App">
            <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <BrowserRouter>
        <Routes>
          <Route path="/"/>
            <Route path="login" element={<Login />} />
            <Route path='register' element={<Register />} />

            <Route path='detail-produk-buyer/'>
              <Route index element={<Homepage/>} />
              <Route path=':slug' element={<DetailProdukBuyer />} />
            </Route>

            <Route path='homepage' element={<Homepage />} />
            <Route path="info-akun" element={<InfoAkun />} />
            <Route path="info-produk" element={<InfoProduk />} />
            <Route path="detail-produk" element={<DetailProduk />} />
            <Route path="detail-produk-buyer" element={<DetailProdukBuyer />} />
            <Route path='daftar-jual' element={<DaftarJual/>} />
            <Route path="info-penawaran" element={<InfoPenawaran />} />
            <Route path="notifikasi" element ={<LamanNotifikasi/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;