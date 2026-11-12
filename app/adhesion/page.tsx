import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { MembershipFormPreview } from "@/components/registration-forms";

export default function AdhesionPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-kicker">REJOINDRE L’AJECCH</div>
            <h1>Votre engagement <em>commence ici.</em></h1>
            <p>Découvrez la démarche de demande d’adhésion et manifestez votre intérêt à participer à la vie de l’association.</p>
            <div className="breadcrumb"><a href="/">Accueil</a><span>/</span>Adhésion</div>
          </div>
        </section>
        <section className="section-pad">
          <div className="container membership-layout">
            <div className="membership-intro">
              <div className="section-kicker">PARTICIPER À LA VIE ASSOCIATIVE</div>
              <h2>Construire ensemble, <em>dans la foi et le service.</em></h2>
              <p>Cette page présente le futur parcours de demande d’adhésion. Les conditions, les critères d’éligibilité, les éventuelles cotisations et les étapes de validation devront être confirmés par les responsables de l’AJECCH.</p>
              <div className="membership-step"><span>01</span><div><strong>Exprimer son intérêt</strong><p>Compléter les informations de contact.</p></div></div>
              <div className="membership-step"><span>02</span><div><strong>Étude de la demande</strong><p>Les responsables examineront la demande selon les règles officielles.</p></div></div>
              <div className="membership-step"><span>03</span><div><strong>Confirmation</strong><p>Le candidat recevra une réponse par un canal officiel communiqué par l’association.</p></div></div>
            </div>
            <MembershipFormPreview />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}