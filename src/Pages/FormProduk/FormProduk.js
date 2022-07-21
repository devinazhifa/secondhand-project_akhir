import React from "react";
import NavbarPlain from "../../Components/Navbar/NavbarPlain";
import FormProduk from "../../Components/FormProduk/FormProduk";

function InfoProduk() {
  return (
    <div>
      <NavbarPlain title="Lengkapi Detail Produk" />
      <FormProduk />
    </div>
  );
}

export default InfoProduk;
