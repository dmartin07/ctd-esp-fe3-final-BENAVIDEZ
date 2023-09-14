import React from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const dentista = state.data.find((d) => d.id === parseInt(id));

  if (!dentista) {
    return <p>Dentista no encontrado.</p>;
  }

  return (
    <div className={state.theme}>
      <h1>Detail dentist {dentista.id}</h1>
      <div className="detail">
        <h4>Name: {dentista.name}</h4>
        <h4>Email: {dentista.email}</h4>
        <h4>Phone: {dentista.phone}</h4>
        <h4>Website: {dentista.website}</h4>
      </div>
    </div>
  );
};

export default Detail;
