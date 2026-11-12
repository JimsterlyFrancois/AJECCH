import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
  title: "Actualités | AJECCH",
  description: "Suivez les nouvelles et annonces de l'Association des Jeunes Chrétiens du Cap-Haïtien."
};

export default function NewsPage() {
  return (
    <>
      <SiteHeader active="/actualites" />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-kicker">RESTER INFORMÉ</div>
            <h1>Les nouvelles <em>d’AJECCH.</em></h1>
            <p>Retrouvez les annonces, les temps forts et les nouvelles de notre communauté.</p>
            <div className="breadcrumb"><a href="/">Accueil</a><span>/</span>Actualités</div>
          </div>
        </section>
        <section className="section-pad">
          <div className="container news-layout">
            <div className="news-main">
              <div className="section-kicker">LE FIL DE L’ASSOCIATION</div>
              <h2>Suivre nos <em>actualités.</em></h2>
              <p className="news-intro">Les publications officielles seront regroupées ici pour vous permettre de retrouver facilement les informations importantes.</p>
              <div className="empty-news"><span className="empty-news-icon">✳</span><h3>Les publications arrivent bientôt.</h3><p>La rubrique est prête. Les premières actualités seront ajoutées dès que les contenus auront été validés par l’association.</p><a className="button button-outline" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Voir la page Facebook <span>↗</span></a></div>
            </div>
            <aside className="news-aside"><div className="section-kicker">SUIVRE AJECCH</div><h3>Retrouvez aussi l’association sur Facebook.</h3><p>Consultez la page officielle pour les publications et annonces déjà partagées.</p><a className="text-link" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Ouvrir Facebook <span>↗</span></a><div className="aside-rule" /><span className="aside-small">INFORMATIONS OFFICIELLES</span><p>Les annonces publiées sur ce site seront vérifiées avant leur mise en ligne.</p></aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}