"use client";
import { useState } from "react";

const links = [
  { href: "/furniture", label: "Furniture" },
  { href: "/custom", label: "Custom" },
  { href: "/art", label: "Art" },
  { href: "/studio", label: "Studio" },
  { href: "/visit", label: "Visit" },
];

export default function SiteHeader({ variant = "solid" }: { variant?: "overlay" | "solid" }) {
  const [open, setOpen] = useState(false);
  const logo = variant === "overlay" ? "/images/logo-white.png" : "/images/logo-black.png";
  return (
    <>
      <header className={`site-header ${variant === "solid" ? "site-header--solid" : ""}`}>
        <div className="wrap">
          <a className="brand" href="/" aria-label="Hawley Design Co. home">
            <img src={logo} alt="Hawley Design Co." />
          </a>
          <nav className="nav" aria-label="Primary">
            {links.map((l) => (<a key={l.href} href={l.href}>{l.label}</a>))}
          </nav>
          <a className="header-cta" href="/custom">Commission</a>
          <button className="nav-toggle" aria-expanded={open} onClick={() => setOpen(true)}>Menu</button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mm-top">
          <img src="/images/logo-black.png" alt="Hawley Design Co." />
          <button className="mm-close" onClick={() => setOpen(false)}>Close</button>
        </div>
        <nav aria-label="Mobile">
          {links.map((l) => (<a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>))}
          <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
        <a className="btn btn--solid mm-cta" href="/custom" onClick={() => setOpen(false)}>Commission a piece</a>
      </div>
    </>
  );
}
