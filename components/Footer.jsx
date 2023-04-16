import React from "react";
import Link from "next/link";

import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p> Website created by Nazar Ilkiv | © 2023 </p>
      <p className="icons">
        <Link href="https://www.instagram.com/altech_ua/">
          <AiFillInstagram className="social-media" />
        </Link>
        <Link href="https://www.facebook.com/altech.com.ua">
          <AiFillFacebook className="social-media" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
