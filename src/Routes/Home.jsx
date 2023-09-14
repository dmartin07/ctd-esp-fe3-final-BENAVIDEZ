import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useContext(ContextGlobal);

  if (state.loading) {
    return <p>Cargando datos...</p>;
  }

  if (state.error) {
    return <p>Error al cargar los datos: {state.error.message}</p>;
  }

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data && state.data.length ? (
          state.data.map((dentista) => (
            <Card
              key={dentista.id}
              name={dentista.name}
              username={dentista.username}
              id={dentista.id}
            />
          ))
        ) : (
          <p>No hay datos disponibles.</p>
        )}
      </div>
    </main>
  );
};

export default Home;
