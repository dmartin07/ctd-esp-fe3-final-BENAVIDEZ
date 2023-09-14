import React from "react";
import { useState } from "react";
import ContactErrorMessage from "../Components/ContactErrorMessage";
import ContactSuccessMessage from "../Components/ContactSuccessMessage";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [mostrarError, setMostrarError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameEsValido = validarName(name);
    const emailEsValido = validarEmail(email);

    if (!nameEsValido || !emailEsValido) {
      setMostrarError(true);
      setMostrarCard(false);
    } else {
      setMostrarError(false);
      setMostrarCard(true);
    }
  };

  const validarName = (name) => {
    const sinEspaciosAlComienzo = name.trimLeft();

    if (sinEspaciosAlComienzo.length > 5) {
      return true;
    } else {
      return false;
    }
  };

  const validarEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return regex.test(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" value="Send" />
      </form>

      {mostrarError && <ContactErrorMessage />}
      {mostrarCard && <ContactSuccessMessage name={name} />}
    </div>
  );
};

export default Form;
