import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
  title: "Activités | AJECCH",
  description: "Les activités et initiatives de l'Association des Jeunes Chrétiens du Cap-Haïtien."
};

const categories = [
  { number: "01", title: "Rencontres & fraternité", text: "Des temps de rassemblement, d’échange et de communion pour renforcer les liens entre les jeunes." },
  { number: "02", title: "Formation & jeunesse", text: "Des initiatives pour encourager le développement personnel, les talents et le leadership responsable." },
  { number: "03", title: "Actions communautaires", text: "Des activités collectives tournées vers l’entraide et les besoins de la communauté." },
  { number: "04", title: "Foi & engagement", text: "Des moments et projets qui permettent de vivre les valeurs chrétiennes au quotidien." }
];

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader active="/activites" />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-kicker">PASSER DES VALEURS À L’ACTION</div>
            <h1>Nos <em>activités.</em></h1>
            <p>Des occasions de se rencontrer, d’apprendre, de servir et de construire ensemble.</p>
            <div className="breadcrumb"><a href="/">Accueil</a><span>/</span>Activités</div>
          </div>
        </section>
        <section className="section-pad">
          <div className="container">
            <div className="section-heading"><div><div className="section-kicker">NOS DOMAINES D’ACTION</div><h2>Des engagements qui <em>rassemblent.</em></h2></div><p>Les catégories ci-dessous constituent une première organisation éditoriale. Les activités précises seront publiées après confirmation.</p></div>
            <div className="activity-grid">
              {categories.map((item) => <article className="activity-card" key={item.number}><span>{item.number}</span><div className="activity-mark">✳</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
            <p className="editorial-note activity-note">Aucune date ni aucun événement n’est annoncé sur cette page pour le moment. Les prochaines activités seront ajoutées avec leurs informations vérifiées : date, lieu, horaires et modalités de participation.</p>
          </div>
        </section>
        <section className="join-section"><div className="container join-inner"><div className="section-kicker">PARTICIPER</div><h2>Une initiative en tête ?<br /><em>Construisons-la ensemble.</em></h2><p>Contactez l’association pour en savoir plus sur les activités et les possibilités de participation.</p><a className="button button-gold" href="/#contact">Contacter AJECCH <span>→</span></a></div></section>
      </main>
      <SiteFooter />
    </>
  );
}