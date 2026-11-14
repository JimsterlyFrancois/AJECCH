import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getPublishedPosts, getSiteMedia } from "@/lib/public-content";

const pillars = [
  {
    number: "01",
    icon: "✧",
    title: "Foi vivante",
    text: "Faire de la foi une source d’espérance, de discernement et de cohérence dans la vie quotidienne."
  },
  {
    number: "02",
    icon: "⌁",
    title: "Fraternité & accueil",
    text: "Créer des liens sincères, accueillir chacun avec respect et faire grandir l’esprit d’entraide."
  },
  {
    number: "03",
    icon: "↗",
    title: "Action sociale & jeunesse",
    text: "Encourager les jeunes à mettre leurs talents, leurs idées et leur énergie au service du bien commun."
  }
];

const actionAreas = [
  {
    number: "01",
    title: "Jeunesse & formation",
    text: "Encourager le développement des capacités, l’apprentissage et la prise de responsabilité."
  },
  {
    number: "02",
    title: "Fraternité & vie spirituelle",
    text: "Faire vivre un cadre de rencontre, de partage et de croissance dans la foi."
  },
  {
    number: "03",
    title: "Engagement communautaire",
    text: "Soutenir les initiatives utiles qui rapprochent les jeunes de leur communauté."
  }
];

export const dynamic = "force-dynamic";

export default async function Home() {
  const [media, posts] = await Promise.all([getSiteMedia(), getPublishedPosts()]);
  const events = posts.filter((post) => post.category === "event");
  const logoUrl = media["brand.logo"] ?? null;

  return (
    <main className="ajecch-home">
      <SiteHeader active="/" logoUrl={logoUrl} />

      <section className="hero-nature" id="accueil">
        <div className="hero-nature-image" aria-hidden="true" style={{ backgroundImage: media["home.hero"] ? `url("${media["home.hero"]}")` : "none" }} />
        <div className="hero-nature-shade" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="container hero-nature-content">
          <div className="hero-glass-panel" data-reveal>
            <span className="hero-overline">
              ASSOCIATION DES JEUNES CHRÉTIENS DU CAP-HAÏTIEN · FOI · FRATERNITÉ · ENGAGEMENT
            </span>
            <h1>Une jeunesse unie.<br /><em>Une espérance en action.</em></h1>
            <p className="hero-description">
              L’AJECCH rassemble des jeunes chrétiens qui souhaitent grandir dans la foi,
              cultiver la fraternité et contribuer positivement à leur communauté.
            </p>
            <div className="hero-buttons">
              <a className="button button-gold" href="#actions">Découvrir nos actions <span>↗</span></a>
              <a className="button button-glass" href="#mission">Notre mission</a>
            </div>
          </div>
          <div className="hero-bottomline">
            <span>CAP-HAÏTIEN, HAÏTI · UNE COMMUNAUTÉ DE JEUNES EN CHEMIN</span>
            <a className="discover-link" href="#mission">DÉCOUVRIR <b>↓</b></a>
          </div>
        </div>
        <div className="hero-photo-note">Littoral de Labadie · Nord d’Haïti · Photo d’ambiance</div>
      </section>

      <section className="section-shell foundation-actions-section" id="mission">
        <div className="container">
          <div className="foundation-floor">
            <div className="section-intro" data-reveal>
              <span className="section-kicker">01 / NOTRE FONDEMENT</span>
              <h2>La foi nous rassemble.<br /><em>Le service nous met en mouvement.</em></h2>
              <p>
                L’AJECCH se veut un espace de rencontre et d’engagement où la jeunesse peut
                faire grandir ses convictions, ses relations et son sens des responsabilités.
              </p>
            </div>
            <div className="pillar-grid">
              {pillars.map((pillar) => (
                <article className="glass-card pillar-card" key={pillar.number} data-reveal>
                  <div className="card-topline">
                    <span>{pillar.number}</span>
                    <span className="pillar-icon">{pillar.icon}</span>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                  <span className="card-bottom-mark" />
                </article>
              ))}
            </div>
          </div>

          <div className="foundation-connector" aria-hidden="true"><span /></div>

          <div className="actions-floor" id="actions">
            <div className="section-heading-wide" data-reveal>
              <div>
                <span className="section-kicker">02 / ENGAGEMENT SUR LE TERRAIN</span>
                <h2>Des convictions qui prennent<br /><em>racine dans la vie réelle.</em></h2>
              </div>
              <p>
                L’engagement se construit dans la durée : par la rencontre, l’apprentissage,
                l’entraide et des initiatives pensées avec la communauté.
              </p>
            </div>

            <div className="action-feature-grid">
              <div className="action-visual-column">
                <figure className="nature-feature" data-reveal>
                  {media["home.actions"] ? (
                    <img src={media["home.actions"]} alt="Visuel des actions AJECCH" loading="lazy" decoding="async" />
                  ) : (
                    <div className="public-image-empty">Aucune image publiée pour cet emplacement</div>
                  )}
                  <div className="nature-feature-overlay">
                    <span>UNE DYNAMIQUE COLLECTIVE</span>
                    <strong>Grandir, transmettre<br />et agir ensemble.</strong>
                  </div>
                  <figcaption>Visuel d’ambiance · Photographies officielles AJECCH à venir</figcaption>
                </figure>

                <aside className="impact-strip glass-card" data-reveal>
                  <span className="section-kicker">NOTRE ENGAGEMENT DE TRANSPARENCE</span>
                  <h3>Un impact qui se raconte avec des faits.</h3>
                  <p>Les chiffres et résultats seront publiés une fois documentés et validés.</p>
                  <a className="text-link" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">
                    Suivre les publications officielles <span>↗</span>
                  </a>
                </aside>
              </div>

              <div className="action-side">
                <div className="action-side-heading" data-reveal>
                  <span className="section-kicker">NOS DOMAINES D’ACTION</span>
                  <h3>Trois chemins pour servir la communauté.</h3>
                </div>
                <div className="action-list">
                  {actionAreas.map((area) => (
                    <article className="glass-card action-domain-card" key={area.number} data-reveal>
                      <span className="domain-number">{area.number}</span>
                      <div className="domain-copy">
                        <h3>{area.title}</h3>
                        <p>{area.text}</p>
                      </div>
                      <a
                        className="domain-arrow"
                        href="https://www.facebook.com/AJECCH"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Suivre les actualités AJECCH : ${area.title}`}
                      >↗</a>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell agenda-section" id="evenements">
        <div className="container">
          <div className="section-heading-wide agenda-heading" data-reveal>
            <div>
              <span className="section-kicker">03 / AGENDA</span>
              <h2>Les prochains rendez-vous<br /><em>de la communauté.</em></h2>
            </div>
            <p>Retrouvez ici les dates annoncées et les informations pratiques confirmées par l’association.</p>
          </div>
          <article className="agenda-event glass-card" data-reveal>
            <div className="event-date">
              <span>05 — 14</span>
              <strong>FÉV.</strong>
              <small>2027</small>
            </div>
            <div className="event-details">
              <span className="event-status"><i /> RENDEZ-VOUS ANNONCÉ</span>
              <h3>#REFLEXE GÉNIE</h3>
              <p>1ère édition · Cap-Haïtien</p>
              <small>Les horaires, le lieu précis et les modalités de participation seront communiqués par l’association.</small>
            </div>
            <a
              className="event-link"
              href="https://www.facebook.com/AJECCH"
              target="_blank"
              rel="noreferrer"
              aria-label="Consulter les informations officielles de l'événement"
            >↗</a>
          </article>
          <p className="agenda-footnote">Les informations de cet agenda seront complétées selon les communications officielles de l’AJECCH.</p>
        </div>
      </section>

      <section className="section-shell voices-section" id="vie-associative">
        <div className="container">
          <div className="voices-heading" data-reveal>
            <div>
              <span className="section-kicker">04 / PAROLES & VIE ASSOCIATIVE</span>
              <h2>Une association se construit<br /><em>avec celles et ceux qui la vivent.</em></h2>
            </div>
            <a className="text-link" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">
              Découvrir la communauté sur Facebook <span>↗</span>
            </a>
          </div>
          <div className="voice-cards">
            <article className="glass-card voice-card voice-card-main" data-reveal>
              <span className="voice-quote-mark">“</span>
              <span className="section-kicker">LA PAROLE AUX MEMBRES</span>
              <h3>Des expériences vécues, racontées avec authenticité.</h3>
              <p>Les premières paroles seront ajoutées après collecte et validation par leurs auteurs.</p>
              <span className="voice-card-foot">TÉMOIGNAGES À VENIR</span>
            </article>
            <article className="glass-card voice-card voice-card-secondary" data-reveal>
              <div className="gallery-preview" role="img" aria-label="Photographie de la vie associative AJECCH" style={{ backgroundImage: media["home.gallery"] ? `url("${media["home.gallery"]}")` : "none" }} />
              <div className="gallery-copy">
                <span className="voice-card-foot">VISUELS OFFICIELS EN COURS D’INTÉGRATION</span>
                <h3>Les moments qui nous rassemblent.</h3>
                <a href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Voir la page AJECCH ↗</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-backdrop" aria-hidden="true" style={{ backgroundImage: media["home.contact"] ? `url("${media["home.contact"]}")` : "none" }} />
        <div className="contact-container container">
          <div className="contact-glass-panel" data-reveal>
            <span className="section-kicker">05 / PRENONS CONTACT</span>
            <h2>Une idée, une envie de servir,<br /><em>un pas à faire ensemble.</em></h2>
            <p>
              Vous souhaitez rejoindre l’AJECCH, en savoir plus sur ses initiatives ou proposer un appui ?
              Écrivez à l’association par sa page officielle.
            </p>
            <div className="hero-buttons">
              <a className="button button-gold" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">
                Contacter AJECCH <span>↗</span>
              </a>
              <a className="button button-glass" href="/a-propos">Mieux nous connaître</a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter logoUrl={logoUrl} />
    </main>
  );
}
