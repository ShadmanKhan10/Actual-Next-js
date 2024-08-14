import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1 className="logo-name">Shadman</h1>
      </div>
      <div className="menu-lists">
        <Link className="link" href="/">
          <div className="menu-items">Home</div>
        </Link>
        <Link className="link" href="/about">
          <div className="menu-items">About</div>
        </Link>
        <Link className="link" href="/services">
          <div className="menu-items">Services</div>
        </Link>
        <Link className="link" href="/items">
          <div className="menu-items">Items</div>
        </Link>
        <Link className="link" href="/login">
          <div className="menu-items">Login</div>
        </Link>
        <Link className="link" href="/join">
          <div className="menu-items">Join</div>
        </Link>
      </div>
    </div>
  );
}
