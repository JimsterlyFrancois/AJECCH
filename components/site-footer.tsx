const footerLinks = [
  { href: "/#mission", label: "Notre mission" },
  { href: "/#actions", label: "Nos actions" },
  { href: "/#evenements", label: "Événements" },
  { href: "/a-propos", label: "À propos" },
  { href: "/actualites", label: "Actualités" }
];

export default function SiteFooter({ logoUrl }: { logoUrl?: string | null }) {
  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a className="brand footer-brand" href="/" aria-label="AJECCH, accueil">
            <span className="brand-mark brand-mark-image">
              {logoUrl ? (
                <img src={logoUrl} alt="Logo officiel de l’AJECCH" />
              ) : (
                <span aria-hidden="true">A<span>J</span></span>
              )}>
            </span>
            <span className="brand-copy">
              <strong>AJECCH</strong>
              <small>JEUNES CHRÉTIENS · CAP-HAÏTIEN</small>
            </span>
          </a>
          <p className="footer-description">
            Une jeunesse rassemblée par la foi, ouverte à la fraternité et engagée au service de sa communauté.
          </p>
          <a className="footer-social-link" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">
            Suivre la page officielle <span>↗</span>
          </a>
        </div>
        <div className="footer-link-column">
          <span className="footer-label">EXPLORER</span>
          {footerLinks.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </div>
        <div className="footer-verse-column glass-card">
          <span className="footer-label">UN REPÈRE</span>
          <blockquote>« Que tout se fasse avec amour. »</blockquote>
          <span className="verse-reference">1 Corinthiens 16:14</span>
          <p>Cap-Haïtien · Haïti</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 AJECCH. Tous droits réservés.</span>
        <span className="photo-credit">
          Visuels d’ambiance :
          <a href="https://www.pexels.com/photo/drone-shot-of-coastal-area-8868160/" target="_blank" rel="noreferrer"> Kenrick Baksh / Pexels</a>
          <span> · </span>
          <a href="https://www.pexels.com/photo/sunlight-in-tropical-forest-17772875/" target="_blank" rel="noreferrer">Pexels</a>
        </span>
        <a href="#accueil">RETOUR EN HAUT ↑</a>
      </div>
    </footer>
  );
}
