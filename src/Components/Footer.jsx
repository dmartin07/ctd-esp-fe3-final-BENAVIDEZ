import React from "react";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";

const Footer = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <footer className={state.theme}>
      <div className="logoDH">
        <p>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" />
      </div>
      <div className="iconosRedes">
        <img src="/images/ico-facebook.png" alt="ico-facebook" />
        <img src="/images/ico-instagram.png" alt="ico-instagram" />
        <img src="/images/ico-tiktok.png" alt="ico-tiktok" />
        <img src="/images/ico-whatsapp.png" alt="ico-whatsapp" />
      </div>
    </footer>
  );
};

export default Footer;
