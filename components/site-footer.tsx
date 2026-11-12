export default function SiteFooter() {
  return (
    <footer id="contact">
      <div className="container footer-main">
        <a className="brand footer-brand" href="/">
          <span className="brand-mark">A<span>J</span></span>
          <span className="brand-copy"><strong>AJECCH</strong><small>JEUNES CHRÉTIENS · CAP-HAÏTIEN</small></span>
        </a>
        <div className="footer-message">Une jeunesse unie par la foi,<br />engagée pour sa communauté.</div>
        <div className="footer-contact">
          <span>RESTONS EN CONTACT</span>
          <a href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Facebook AJECCH ↗</a>
          <a href="/galerie">Galerie ↗</a>
          <a href="/adhesion">Demande d’adhésion ↗</a>
          <a href="/notifications">Recevoir les actualités ↗</a>
          <a href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Contacter l’association ↗</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} AJECCH. Tous droits réservés.</span>
        <span>CAP-HAÏTIEN · HAÏTI</span>
        <a href="#">RETOUR EN HAUT ↑</a>
      </div>
    </footer>
  );
}