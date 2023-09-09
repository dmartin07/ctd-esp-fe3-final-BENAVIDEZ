import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const currentFavs = JSON.parse(localStorage.getItem("favs")) || [];

    const yaEnFav = currentFavs.some((fav) => fav.id === id);

    if (!yaEnFav) {
      const newFav = { id, name, username };
      currentFavs.push(newFav);

      localStorage.setItem("favs", JSON.stringify(currentFavs));

      alert("Dentist added successfully");
    }
  };

  return (
    <div className="card">
      <img className="doctorIMG" src="/images/doctor.jpg" alt="doctor" />
      <h3>
        <Link to={`/dentist/${id}`}>{name}</Link>
      </h3>
      <p>
        Id: {id} - Username: {username}
      </p>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
