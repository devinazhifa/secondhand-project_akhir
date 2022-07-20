import "./main.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InfoAkun from "./Pages/InfoAkun/InfoAkun";
import FormProduk from "./Pages/FormProduk/FormProduk";
import PreviewProduk from "./Pages/PreviewProduk/PreviewProduk";
import InfoPenawaran from "./Pages/InfoPenawaran/InfoPenawaran";
import DetailProdukSeller from "./Pages/DetailProdukSeller/DetailProdukSeller";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import DaftarJual from "./Pages/DaftarJual/DaftarJual";
import Homepage from "./Pages/Homepage/Homepage";
import LamanNotifikasi from "./Pages/LamanNotifikasi/LamanNotifikasi";
import { useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/id";
import Logout from "./Pages/Logout/Logout";
import DetailProdukBuyer from "./Pages/DetailProdukBuyer/DetailProdukBuyer";

const App = () => {
  moment.locale("id");
  const product = useSelector((state) => state.product.data);
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
          <Route path="/" element={<Homepage />} />
          {/* ALL */}
          {/* <Route path="homepage" element={<Homepage />} /> */}
          <Route path="logout" element={<Logout />} />
          {/* PUBLIC ONLY */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* PROTECTED */}
          <Route path="info-akun" element={<InfoAkun />} />
          <Route path="form-produk" element={<FormProduk />} />
          <Route
            path="preview-produk"
            element={
              product ? (
                <PreviewProduk />
              ) : (
                <Navigate to="/form-produk" replace={true} />
              )
            }
          />
          <Route path="detail-produk-seller/:slug" element={<DetailProdukSeller />} />
          <Route path="detail-produk-buyer/:slug" element={<DetailProdukBuyer />} />

          <Route path="daftar-jual" element={<DaftarJual />} />
          <Route path="info-penawaran" element={<InfoPenawaran />} />
          <Route path="notifikasi" element={<LamanNotifikasi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
