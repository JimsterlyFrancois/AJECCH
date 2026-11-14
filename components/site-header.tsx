"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { id: "accueil", hash: "#accueil", label: "Accueil" },
  { id: "mission", hash: "#mission", label: "Mission" },
  { id: "actions", hash: "#actions", label: "Actions" },
  { id: "evenements", hash: "#evenements", label: "Événements" },
  { id: "contact", hash: "#contact", label: "Contact" }
];

export default function SiteHeader({ active = "" }: { active?: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    if (!isHome || !("IntersectionObserver" in window)) return;

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]?.target instanceof HTMLElement) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-28% 0px -62% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>Association des Jeunes Chrétiens du Cap-Haïtien</span>
          <span className="topline-note">Foi · Fraternité · Service</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="/" aria-label="AJECCH, accueil">
            <span className="brand-mark brand-mark-image">
              <img
                src="/ajecch-logo.webp"
                alt="Logo officiel de l’AJECCH"
                width={192}
                height={192}
                loading="eager"
                decoding="async"
              />
            </span>
            <span className="brand-copy">
              <strong>AJECCH</strong>
              <small>Association des Jeunes Chrétiens<br />du Cap-Haïtien</small>
            </span>
          </a>
          <nav className="main-nav" aria-label="Navigation principale">
            {links.map((link) => {
              const href = isHome ? link.hash : `/${link.hash}`;
              const isActive = isHome && activeSection === link.id;
              return (
                <a
                  key={link.id}
                  className={isActive ? "active" : ""}
                  href={href}
                  aria-current={isActive ? "location" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <a className="nav-cta" href={isHome ? "#contact" : "/#contact"}>Rejoindre <span>↗</span></a>
        </div>
      </header>
    </>
  );
}
