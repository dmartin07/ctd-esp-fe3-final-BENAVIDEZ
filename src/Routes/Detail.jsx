import React from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const dentista = state.data.find((d) => d.id === parseInt(id));

  if (!dentista) {
    return <p>Dentista no encontrado.</p>;
  }

  return (
    <>
      <h1>Detail dentist {dentista.id}</h1>
      <p>Name: {dentista.name}</p>
      <p>Email: {dentista.email}</p>
      <p>Phone: {dentista.phone}</p>
      <p>Website: {dentista.website}</p>
    </>
  );
};

export default Detail;