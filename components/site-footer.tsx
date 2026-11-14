const footerLinks = [
  { href: "/#mission", label: "Notre mission" },
  { href: "/#actions", label: "Nos actions" },
  { href: "/#evenements", label: "Événements" },
  { href: "/a-propos", label: "À propos" },
  { href: "/actualites", label: "Actualités" }
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-main">
        <div className="footer-brand-column">
          <a className="brand footer-brand" href="/" aria-label="AJECCH, accueil">
            <span className="brand-mark brand-mark-image">
              <img
                src="https://scontent.fpap4-1.fna.fbcdn.net/v/t39.30808-6/764661311_122134184751148120_413651985315372038_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s206x206&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHETjiahjbkRYeddHrcEwLHV4av5SRKKtdXhq_lJEoq19H7ZI3RQAqrN3Ey-ZE_sFzWqboPlMltoL8hFy7wCfWQ&_nc_ohc=XCPsP9COi9gQ7kNvwFZVwVw&_nc_oc=Adpgl3kebf_oC_ZZTe_dMAgNxF8HTKao4NIu-VcJ1kML3mqnoghC_Pk-aMYMF_XBDcg&_nc_zt=23&_nc_ht=scontent.fpap4-1.fna&_nc_gid=VN9LKD53F7yH1QPdVCVNrw&_nc_ss=7b2a8&oh=00_AQTqDuJPU-XFBQk7bxejgT4G1CH76sbJM_Tonf35MT4BMw&oe=6AFDAD91"
                alt="Logo officiel de l’AJECCH"
              />
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
