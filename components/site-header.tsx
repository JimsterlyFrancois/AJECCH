const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/activites", label: "Activités" },
  { href: "/actualites", label: "Actualités" }
];

export default function SiteHeader({ active = "" }: { active?: string }) {
  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>Association des Jeunes Chrétiens du Cap-Haïtien</span>
          <span className="topline-note">Foi · Unité · Engagement</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="/" aria-label="AJECCH, accueil">
            <span className="brand-mark brand-mark-image"><img src="https://scontent.fpap4-1.fna.fbcdn.net/v/t39.30808-6/764661311_122134184751148120_413651985315372038_n.jpg?stp=c0.169.1536.1536a_dst-jpg_tt6&cstp=mx1536x1536&ctp=s206x206&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeHETjiahjbkRYeddHrcEwLHV4av5SRKKtdXhq_lJEoq19H7ZI3RQAqrN3Ey-ZE_sFzWqboPlMltoL8hFy7wCfWQ&_nc_ohc=XCPsP9COi9gQ7kNvwFZVwVw&_nc_oc=Adpgl3kebf_oC_ZZTe_dMAgNxF8HTKao4NIu-VcJ1kML3mqnoghC_Pk-aMYMF_XBDcg&_nc_zt=23&_nc_ht=scontent.fpap4-1.fna&_nc_gid=VN9LKD53F7yH1QPdVCVNrw&_nc_ss=7b2a8&oh=00_AQTqDuJPU-XFBQk7bxejgT4G1CH76sbJM_Tonf35MT4BMw&oe=6AFDAD91" alt="Logo officiel de l’AJECCH" /></span>
            <span className="brand-copy">
              <strong>AJECCH</strong>
              <small>JEUNES CHRÉTIENS · CAP-HAÏTIEN</small>
            </span>
          </a>
          <nav className="main-nav" aria-label="Navigation principale">
            {links.map((link) => (
              <a key={link.href} className={active === link.href ? "active" : ""} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="/#valeurs">Nos valeurs</a>
            <a href="/#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="/#rejoindre">Rejoindre AJECCH <span>↗</span></a>
        </div>
      </header>
    </>
  );
}