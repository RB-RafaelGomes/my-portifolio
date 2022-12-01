import React from "react";
import menupng from '../../public/icons8-menu-arredondado-100.png'
import './style.css'

export default function Header() {
  return (
    <div className="Header">
      <div>
        <a href="/">Pt-br</a>
      </div>
      <div>
        <a href="/">contato</a>
      </div>
      <div>
        <a href="/"><img className="btn" src={menupng} alt=""></img></a>
      </div>
    </div>
  );
}
