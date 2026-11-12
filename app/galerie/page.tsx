import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const moments = [
  { number: "01", title: "Rencontres fraternelles", category: "COMMUNAUTÉ", tone: "gallery-blue", symbol: "✦" },
  { number: "02", title: "Temps de prière et de foi", category: "SPIRITUALITÉ", tone: "gallery-gold", symbol: "✧" },
  { number: "03", title: "Actions au service des autres", category: "ENGAGEMENT", tone: "gallery-navy", symbol: "＋" },
  { number: "04", title: "Jeunesse et partage", category: "JEUNESSE", tone: "gallery-light", symbol: "◇" },
  { number: "05", title: "Activités communautaires", category: "SOLIDARITÉ", tone: "gallery-blue", symbol: "⌁" },
  { number: "06", title: "Moments de célébration", category: "FRATERNITÉ", tone: "gallery-gold", symbol: "✳" }
];

export default function GaleriePage() {
  return (
    <>
      <SiteHeader active="/galerie" />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-kicker">LA VIE DE L’ASSOCIATION</div>
            <h1>Nos moments <em>en images.</em></h1>
            <p>Un espace destiné à partager les rencontres, les activités et les initiatives de la jeunesse AJECCH.</p>
            <div className="breadcrumb"><a href="/">Accueil</a><span>/</span>Galerie</div>
          </div>
        </section>
        <section className="section-pad">
          <div className="container">
            <div className="section-heading">
              <div><div className="section-kicker">GALERIE</div><h2>Des souvenirs, <em>une même vision.</em></h2></div>
              <p>Les visuels ci-dessous sont des emplacements graphiques provisoires. Les photographies réelles seront ajoutées après validation et autorisation de publication.</p>
            </div>
            <div className="gallery-grid">
              {moments.map((item) => (
                <article className="gallery-card" key={item.number}>
                  <div className={`gallery-art ${item.tone}`} aria-hidden="true">
                    <span className="gallery-art-number">{item.number}</span>
                    <span className="gallery-art-symbol">{item.symbol}</span>
                    <span className="gallery-art-label">AJECCH · CAP-HAÏTIEN</span>
                  </div>
                  <div className="gallery-card-copy"><span>{item.category}</span><h3>{item.title}</h3></div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}