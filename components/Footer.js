import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-div">
        <p className="footer-p">© 2022 Omar Alkahdery </p>
        <Link href="https://omaralkahdery.vercel.app/">
          <a>Portfolio</a>
        </Link>
        <Link href="https://www.linkedin.com/in/omar-alkahdery/">
          <a>Linkedin</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
