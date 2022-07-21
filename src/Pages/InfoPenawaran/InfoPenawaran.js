import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import CardPenawar from "../../Components/CardPenawar/CardPenawar";
import CardPembeli from "../../Components/CardPembeli/CardPembeli";
import ModalStatus from "../../Components/ModalStatus/ModalStatus";
import ModalTerima from "../../Components/ModalTerima/ModalTerima";
import NavbarPlain from "../../Components/Navbar/NavbarPlain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./InfoPenawaran.module.css";
import requestAPI from "../../requestMethod";

function InfoPenawaran(props) {
  const [bid, setBid] = useState(null);
  const [id, setId] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

    const getBids = async () => {
      const res = await requestAPI().get(`/bids/user/${params.userId}`);
      setBid(res.data.data);
    };

  useEffect(() => {
    getBids();
  }, []);

  console.log(id);

  return (
    <div>
      <NavbarPlain title="Info Penawar" />
      {bid && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row justify-content-center">
                <div className={`${style["back-button"]} col-lg-1 mt-4`} onClick={ () => {
                navigate(-1)
              }}>
                    <FontAwesomeIcon
                      icon="fa-arrow-left"
                      className={`${style["fa-arrow-left"]}`}
                    />
                </div>
                <div className="col-lg-9">
                  <CardPembeli props={bid.buyer} />
                  <p className="fw-semibold my-4">Daftar Produk yang Ditawar</p>
                  {/* <div className='card rounded-4'> */}
                  {bid.bids.map((a) => (
                    <CardPenawar
                      key={a.id}
                      bid={a}
                      buyer={bid.buyer}
                      setId={setId}
                      getBids={getBids}
                    />
                  ))}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InfoPenawaran;
