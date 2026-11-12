const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/activites", label: "Activités" },
  { href: "/actualites", label: "Actualités" },
  { href: "/galerie", label: "Galerie" },
  { href: "/adhesion", label: "Adhésion" },
  { href: "/notifications", label: "Notifications" }
];

export default function SiteHeader({ active = "" }: { active?: string }) {
  return (
    <>
      <div className="topline"><div className="container topline-inner"><span>Association des Jeunes Chrétiens du Cap-Haïtien</span><span className="topline-note">Foi · Unité · Engagement</span></div></div>
      <header className="site-header"><div className="container nav-wrap">
        <a className="brand" href="/" aria-label="AJECCH, accueil"><span className="brand-mark">A<span>J</span></span><span className="brand-copy"><strong>AJECCH</strong><small>JEUNES CHRÉTIENS · CAP-HAÏTIEN</small></span></a>
        <nav className="main-nav" aria-label="Navigation principale">
          {links.map((link) => <a key={link.href} className={active === link.href ? "active" : ""} href={link.href}>{link.label}</a>)}
          <a href="/#valeurs">Nos valeurs</a><a href="/#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/adhesion">Rejoindre AJECCH <span>↗</span></a>
      </div></header>
    </>
  );
}