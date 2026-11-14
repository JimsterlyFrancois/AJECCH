import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

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
  ["Jeunesse & formation", "Encourager le développement des capacités, l’apprentissage et la prise de responsabilité."],
  ["Fraternité & vie spirituelle", "Faire vivre un cadre de rencontre, de partage et de croissance dans la foi."],
  ["Engagement communautaire", "Soutenir les initiatives utiles qui rapprochent les jeunes de leur communauté."]
];

export default function Home() {
  return (
    <main className="ajecch-home">
      <SiteHeader active="/" />

      <section className="hero-nature" id="accueil">
        <div className="hero-nature-image" aria-hidden="true" />
        <div className="hero-nature-shade" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="container hero-nature-content">
          <div className="hero-glass-panel" data-reveal>
            <span className="hero-overline"><i /> ASSOCIATION DES JEUNES CHRÉTIENS DU CAP-HAÏTIEN</span>
            <p className="hero-kicker">FOI · FRATERNITÉ · ENGAGEMENT</p>
            <h1>Une jeunesse unie.<br /><em>Une espérance en action.</em></h1>
            <p className="hero-description">
              L’AJECCH rassemble des jeunes chrétiens qui souhaitent grandir dans la foi,
              cultiver la fraternité et contribuer positivement à leur communauté.
            </p>
            <div className="hero-buttons">
              <a className="button button-gold" href="#actions">Découvrir nos actions <span>↗</span></a>
              <a className="button button-glass" href="#mission">Notre mission</a>
            </div>
            <div className="hero-location"><span /> CAP-HAÏTIEN, HAÏTI</div>
          </div>
          <div className="hero-bottomline">
            <span>UNE COMMUNAUTÉ DE JEUNES EN CHEMIN</span>
            <a href="#mission">DÉCOUVRIR <b>↓</b></a>
          </div>
        </div>
        <div className="hero-photo-note">Paysage côtier haïtien · Photo d’ambiance</div>
      </section>

      <section className="section-shell mission-section" id="mission">
        <div className="container">
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
                <div className="card-topline"><span>{pillar.number}</span><span className="pillar-icon">{pillar.icon}</span></div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <span className="card-bottom-mark" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell actions-section" id="actions">
        <div className="container">
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
            <figure className="nature-feature" data-reveal>
              <img
                src="https://images.unsplash.com/photo-1743776469194-464913c8d604?auto=format&fit=crop&fm=jpg&ixid=NHwxMjA3fDA%3D&ixlib=rb-4.1.0&q=60&w=3000"
                alt="Lumière naturelle traversant une végétation tropicale"
                loading="lazy"
                decoding="async"
              />
              <div className="nature-feature-overlay">
                <span>UNE DYNAMIQUE COLLECTIVE</span>
                <strong>Grandir, transmettre<br />et agir ensemble.</strong>
              </div>
              <figcaption>Visuel naturel d’ambiance · Les photographies des activités AJECCH seront ajoutées après validation.</figcaption>
            </figure>
            <div className="action-side">
              <div className="glass-card action-intro-card" data-reveal>
                <span className="section-kicker">NOS DOMAINES D’ACTION</span>
                <h3>Une jeunesse qui choisit de contribuer.</h3>
                <p>Ces axes présentent les orientations éditoriales du site. Les programmes et résultats seront détaillés à partir des informations confirmées par l’association.</p>
              </div>
              <div className="action-list">
                {actionAreas.map(([title, description], index) => (
                  <article className="action-list-item" key={title} data-reveal>
                    <span>0{index + 1}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                    <b>↗</b>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="impact-strip glass-card" data-reveal>
            <div>
              <span className="section-kicker">NOTRE ENGAGEMENT DE TRANSPARENCE</span>
              <h3>Un impact qui se raconte avec des faits.</h3>
              <p>Les chiffres de participation, les bénéficiaires et les résultats seront publiés lorsqu’ils auront été documentés et validés.</p>
            </div>
            <a className="text-link" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Suivre les publications officielles <span>↗</span></a>
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
            <a className="event-link" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer" aria-label="Consulter les informations officielles de l'événement">↗</a>
          </article>
          <p className="agenda-footnote">Les informations de cet agenda sont susceptibles d’être complétées par les communications officielles de l’AJECCH.</p>
        </div>
      </section>

      <section className="section-shell voices-section" id="vie-associative">
        <div className="container voices-grid">
          <div className="voices-copy" data-reveal>
            <span className="section-kicker">04 / PAROLES & VIE ASSOCIATIVE</span>
            <h2>Une association se construit<br /><em>avec celles et ceux qui la vivent.</em></h2>
            <p>
              Les témoignages des membres et bénévoles ont leur place ici. Ils seront publiés
              avec l’accord des personnes concernées, sans citations inventées ni paroles attribuées.
            </p>
            <a className="text-link" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Découvrir la communauté sur Facebook <span>↗</span></a>
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
              <span className="voice-card-foot">LES MOMENTS QUI NOUS RASSEMBLENT</span>
              <h3>La vie de l’association en images.</h3>
              <p>Une galerie de photographies authentiques sera intégrée dès réception des visuels officiels.</p>
              <a href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Voir la page AJECCH ↗</a>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-backdrop" aria-hidden="true" />
        <div className="container contact-container">
          <div className="contact-glass-panel" data-reveal>
            <span className="section-kicker">05 / PRENONS CONTACT</span>
            <h2>Une idée, une envie de servir,<br /><em>un pas à faire ensemble.</em></h2>
            <p>Vous souhaitez rejoindre l’AJECCH, en savoir plus sur ses initiatives ou proposer un appui ? Écrivez à l’association par sa page officielle.</p>
            <div className="hero-buttons">
              <a className="button button-gold" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Contacter AJECCH <span>↗</span></a>
              <a className="button button-glass" href="/a-propos">Mieux nous connaître</a>
            </div>
            <span className="contact-life-indicator"><i /> PAGE OFFICIELLE DE L’ASSOCIATION</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
