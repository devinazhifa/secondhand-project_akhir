import "./main.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InfoAkun from "./Pages/InfoAkun/InfoAkun";
import FormProduk from "./Pages/FormProduk/FormProduk";
import PreviewProduk from "./Pages/PreviewProduk/PreviewProduk";
import InfoPenawaran from "./Pages/InfoPenawaran/InfoPenawaran";
// import DetailProdukSeller from "./Pages/DetailProdukSeller/DetailProdukSeller";
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
import ProtectedRoute from "./Components/HOC/ProtectedRoute";
import UnprotectedRoute from "./Components/HOC/UnprotectedRoute";
import SearchResult from "./Components/SearchResult/SearchResult";
import VerifiedRoute from "./Components/HOC/VerifiedRoute";

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
          {/* ALL */}
          <Route path="/" element={<Homepage />} />
          <Route path="detail-produk/:slug" element={<DetailProdukBuyer />} />
          <Route path="logout" element={<Logout />} />

          {/* PUBLIC ONLY */}
          <Route path="/" element={<UnprotectedRoute />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          {/* PROTECTED */}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/" element={<VerifiedRoute />}>
              <Route path="form-produk" element={<FormProduk />} />
              <Route path="form-produk/:slug" element={<FormProduk />} />
              <Route path="daftar-jual" element={<DaftarJual />} />
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
            </Route>
            <Route path="info-akun" element={<InfoAkun />} />
            {/* <Route path="detail-produk-seller/:slug" element={<DetailProdukSeller />} /> */}
            {/* <Route path="detail-produk-buyer/:slug" element={<DetailProdukBuyer />} /> */}
            {/* <Route path="detail-produk" element={<DetailProduk />} /> */}
            <Route path="info-penawaran/:userId" element={<InfoPenawaran />} />
            <Route path="notifikasi" element={<LamanNotifikasi />} />
            <Route path="search-result" element={<SearchResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
