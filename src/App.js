import "./main.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import InfoAkun from "./Pages/InfoAkun/InfoAkun";
import FormProduk from "./Pages/FormProduk/FormProduk";
import PreviewProduk from "./Pages/PreviewProduk/PreviewProduk";
import InfoPenawaran from "./Pages/InfoPenawaran/InfoPenawaran";
import DetailProduk from "./Pages/DetailProduk/DetailProduk";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import DaftarJual from "./Pages/DaftarJual/DaftarJual";
import Homepage from "./Pages/Homepage/Homepage";
import { useSelector } from "react-redux";

const App = () => {
  const product = useSelector((state) => state.product.data);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          {/* ALL */}
          <Route path="homepage" element={<Homepage />} />
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
          <Route path="detail-produk" element={<DetailProduk />} />
          <Route path="daftar-jual" element={<DaftarJual />} />
          <Route path="info-penawaran" element={<InfoPenawaran />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
