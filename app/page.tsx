const values = [
  {
    number: "01",
    title: "Foi",
    description:
      "Placer les valeurs chrétiennes au cœur de nos choix, de nos relations et de notre engagement."
  },
  {
    number: "02",
    title: "Solidarité",
    description:
      "Créer des liens fraternels et encourager l’entraide entre les jeunes et au sein de la communauté."
  },
  {
    number: "03",
    title: "Service",
    description:
      "Mettre les talents et l’énergie de la jeunesse au service du bien commun."
  }
];

const areas = [
  ["Jeunesse", "Encourager les jeunes à développer leurs capacités et à prendre leur place dans la société."],
  ["Foi & fraternité", "Faire grandir une communauté unie par les valeurs chrétiennes et le respect mutuel."],
  ["Engagement communautaire", "Favoriser les initiatives positives qui répondent aux besoins de la communauté."]
];

export default function Home() {
  return (
    <main>
      <div className="topline">
        <div className="container topline-inner">
          <span>Association des Jeunes Chrétiens du Cap-Haïtien</span>
          <span className="topline-note">Foi · Unité · Engagement</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#accueil" aria-label="AJECCH, accueil">
            <span className="brand-mark">A<span>J</span></span>
            <span className="brand-copy">
              <strong>AJECCH</strong>
              <small>JEUNES CHRÉTIENS · CAP-HAÏTIEN</small>
            </span>
          </a>
          <nav className="main-nav" aria-label="Navigation principale">
            <a className="active" href="#accueil">Accueil</a>
            <a href="/a-propos">À propos</a>
            <a href="/activites">Activités</a>
            <a href="#valeurs">Nos valeurs</a>
            <a href="/actualites">Actualités</a>
            <a href="/galerie">Galerie</a>
            <a href="/adhesion">Adhésion</a>
            <a href="/notifications">Notifications</a><a href="/galerie">Galerie</a><a href="/adhesion">Adhésion</a>
          </nav>
          <a className="nav-cta" href="/adhesion">Rejoindre AJECCH <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-shape hero-shape-one" />
        <div className="hero-shape hero-shape-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span /> UNE JEUNESSE, UNE COMMUNAUTÉ</div>
            <h1>Ensemble, faisons grandir <em>la foi</em> et l’engagement.</h1>
            <p className="hero-lead">
              L’AJECCH rassemble une jeunesse chrétienne appelée à vivre ses valeurs,
              à servir avec conviction et à contribuer positivement à sa communauté.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#apropos">Découvrir l’association <span>→</span></a>
              <a className="button button-outline" href="/adhesion">Nous rejoindre</a>
            </div>
            <div className="hero-footnote">
              <span className="gold-line" />
              <span>CAP-HAÏTIEN, HAÏTI</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration symbolique de la jeunesse et de la foi">
            <div className="visual-frame">
              <div className="visual-sun" />
              <div className="visual-cross"><span /><i /></div>
              <div className="visual-hill hill-back" />
              <div className="visual-hill hill-front" />
              <div className="visual-caption">
                <span>NOTRE CONVICTION</span>
                <strong>Une foi vivante.<br />Un engagement concret.</strong>
              </div>
            </div>
            <div className="visual-stamp"><span>AJECCH</span><b>✳</b><small>DEPUIS NOTRE COMMUNAUTÉ</small></div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>01 — QUI NOUS SOMMES</span>
          <span className="scroll-cue">DÉFILER POUR DÉCOUVRIR <b>↓</b></span>
        </div>
      </section>

      <section className="intro-section section-pad" id="apropos">
        <div className="container intro-grid">
          <div>
            <div className="section-kicker">01 / À PROPOS</div>
            <h2>Une association portée par <em>la jeunesse</em>.</h2>
          </div>
          <div className="intro-text">
            <p>
              L’Association des Jeunes Chrétiens du Cap-Haïtien (AJECCH) est présentée
              comme un cadre de rassemblement, de fraternité et d’action pour les jeunes
              qui souhaitent mettre leur foi et leurs compétences au service de la société.
            </p>
            <p className="muted">
              Cette présentation institutionnelle sera enrichie avec l’histoire officielle,
              les responsables, les dates et les informations validées par l’association.
            </p>
            <a className="text-link" href="#engagement">Explorer nos engagements <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="mission-band">
        <div className="container mission-grid">
          <div className="mission-label">NOTRE CAP</div>
          <div>
            <h2>Rassembler. Inspirer. Servir.</h2>
            <p>Faire de la jeunesse une force de foi, de solidarité et de transformation positive.</p>
          </div>
          <div className="mission-seal">A<span>J</span></div>
        </div>
      </section>

      <section className="section-pad values-section" id="valeurs">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">02 / CE QUI NOUS GUIDE</div>
              <h2>Nos valeurs, <em>notre fondation.</em></h2>
            </div>
            <p>Des repères qui donnent du sens à notre manière de nous rassembler et d’agir.</p>
          </div>
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value.number}>
                <span className="value-number">{value.number}</span>
                <div className="value-symbol">{value.number === "01" ? "✧" : value.number === "02" ? "⌘" : "↗"}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="engagement-section section-pad" id="engagement">
        <div className="container">
          <div className="section-heading engagement-heading">
            <div>
              <div className="section-kicker">03 / NOTRE ENGAGEMENT</div>
              <h2>La foi en action, <em>au quotidien.</em></h2>
            </div>
            <p>Des domaines d’action présentés à titre de premières orientations, à confirmer avec l’association.</p>
          </div>
          <div className="area-list">
            {areas.map(([title, description], index) => (
              <article className="area-row" key={title}>
                <span className="area-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="area-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="join-section" id="rejoindre">
        <div className="container join-inner">
          <div className="section-kicker">FAISONS ROUTE ENSEMBLE</div>
          <h2>Votre énergie a sa place<br />dans <em>notre communauté.</em></h2>
          <p>Vous souhaitez en savoir plus, participer ou soutenir une initiative ? Prenons contact.</p>
          <a className="button button-gold" href="/adhesion">Demander à rejoindre <span>→</span></a>
        </div>
      </section>

      <footer id="contact">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#accueil">
            <span className="brand-mark">A<span>J</span></span>
            <span className="brand-copy"><strong>AJECCH</strong><small>JEUNES CHRÉTIENS · CAP-HAÏTIEN</small></span>
          </a>
          <div className="footer-message">Une jeunesse unie par la foi,<br />engagée pour sa communauté.</div>
          <div className="footer-contact">
            <span>RESTONS EN CONTACT</span>
            <a href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Facebook AJECCH ↗</a>
            <a href="/galerie">Galerie ↗</a><a href="/adhesion">Adhésion ↗</a><a href="/notifications">Notifications ↗</a><a href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Contacter l’association ↗</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} AJECCH. Tous droits réservés.</span>
          <span>CAP-HAÏTIEN · HAÏTI</span>
          <a href="#accueil">RETOUR EN HAUT ↑</a>
        </div>
      </footer>
    </main>
  );
}