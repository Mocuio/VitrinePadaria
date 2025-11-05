import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from "../../assets/logos/LogoPadaria.png";
import Pao from "../../assets/Breads/Breads.png";
import { gsap } from "gsap";

const NavBar = () => {

  useEffect(() => {

gsap.fromTo(".logo", { x: -400 }, { x: 0,duration: 1.5, ease: "back"});
gsap.fromTo(".pao-imagem", { x: 400 }, { x: 0,duration: 1.5, ease: "power3.out"});
 gsap.fromTo(
    ".listInfo li",
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, ease: "elastic" }
  );
  }, []);

  return (
    <nav className="navbar">
      <img className='logo' src={logo} alt="Logo Padaria Pv" />
      <ul className='listInfo momo-trust-display-regular'>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/promocoes">Promoções</Link></li>
      </ul>
      <img className='pao-imagem' src={Pao} alt="Pães" />
    </nav>
  );
};

export default NavBar;
