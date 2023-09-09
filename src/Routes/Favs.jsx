import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map((dentista) => (
            <Card
              key={dentista.id}
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
            />
          ))
        ) : (
          <p>No hay dentistas favoritos.</p>
        )}
      </div>
    </>
  );
};

export default Favs;