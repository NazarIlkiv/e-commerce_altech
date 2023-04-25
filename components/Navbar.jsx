import React from "react";

import Link from "next/link";

import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <Link href="/">
        <img className="header-logo" src="./Altech_logo.svg" />
      </Link>
      <nav className="navbar-menu menu">
        <div className="menu-body">
          <ul className="menu-list">
            <li className="menu-item">
              <Link href="/products">
                <div className="menu-link">Головна</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/products">
                <div className="menu-link">Про нас</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/products">
                <div className="menu-link">Контакти</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      <button className="icon-menu">
        <span></span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
