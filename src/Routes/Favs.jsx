import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  const favs = JSON.parse(localStorage.getItem("favs")) || [];

  return (
    <div className={state.theme}>
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
    </div>
  );
};

export default Favs;
