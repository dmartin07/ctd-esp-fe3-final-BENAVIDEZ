import React from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";
import { useContext } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const changeTheme = () => {
    dispatch({ type: "ChangeTheme" });
  };

  return (
    <nav className={state.theme}>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={changeTheme}>
        {state.theme === "light" ? (
          <img src="/images/darkicon.ico" alt="darkicon" className="themeicon" />
        ) : (
          <img src="/images/lighticon.ico" alt="lighticon" className="themeicon  " />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
