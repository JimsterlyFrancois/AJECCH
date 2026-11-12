import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
  title: "À propos | AJECCH",
  description: "Découvrez l'Association des Jeunes Chrétiens du Cap-Haïtien."
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="/a-propos" />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-kicker">L’ASSOCIATION</div>
            <h1>Qui sommes-<em>nous ?</em></h1>
            <p>Une communauté de jeunes chrétiens réunis autour de la foi, de la fraternité et du service.</p>
            <div className="breadcrumb"><a href="/">Accueil</a><span>/</span>À propos</div>
          </div>
        </section>
        <section className="section-pad">
          <div className="container about-layout">
            <div>
              <div className="section-kicker">NOTRE IDENTITÉ</div>
              <h2>Une jeunesse qui choisit de <em>s’engager.</em></h2>
            </div>
            <div className="page-copy">
              <p>L’Association des Jeunes Chrétiens du Cap-Haïtien (AJECCH) se présente comme un cadre de rassemblement et d’action destiné aux jeunes chrétiens de la région du Cap-Haïtien.</p>
              <p>À travers la rencontre, le partage et les initiatives collectives, l’association souhaite encourager une jeunesse qui met ses convictions, ses talents et son énergie au service des autres.</p>
              <p className="editorial-note">La date de fondation, l’historique détaillé, la composition officielle et les textes statutaires seront ajoutés après validation par les responsables de l’AJECCH.</p>
            </div>
          </div>
        </section>
        <section className="mission-band">
          <div className="container mission-grid">
            <div className="mission-label">NOTRE MISSION</div>
            <div><h2>Rassembler. Inspirer. Servir.</h2><p>Favoriser une jeunesse chrétienne unie, responsable et engagée dans sa communauté.</p></div>
            <div className="mission-seal">A<span>J</span></div>
          </div>
        </section>
        <section className="section-pad">
          <div className="container">
            <div className="section-heading"><div><div className="section-kicker">NOTRE VISION</div><h2>Grandir ensemble, <em>agir durablement.</em></h2></div><p>Une vision qui place la dignité, la responsabilité et le potentiel des jeunes au cœur de l’action.</p></div>
            <div className="about-pillars">
              <article><span>01</span><h3>Une jeunesse formée</h3><p>Encourager l’apprentissage, les compétences et le sens des responsabilités.</p></article>
              <article><span>02</span><h3>Une communauté solidaire</h3><p>Développer l’entraide, le respect et la fraternité entre les membres.</p></article>
              <article><span>03</span><h3>Un service concret</h3><p>Soutenir des initiatives utiles et positives pour la collectivité.</p></article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}