import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { NewsletterFormPreview } from "@/components/registration-forms";

export default function NotificationsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-kicker">ACTUALITÉS ET ANNONCES</div>
            <h1>Gardons le <em>lien.</em></h1>
            <p>Un espace pour recevoir les informations importantes et les nouvelles activités de l’association.</p>
            <div className="breadcrumb"><a href="/">Accueil</a><span>/</span>Notifications</div>
          </div>
        </section>
        <section className="section-pad">
          <div className="container notification-layout">
            <div>
              <div className="section-kicker">COMMUNICATION AJECCH</div>
              <h2>Les informations utiles, <em>au bon moment.</em></h2>
              <p className="notification-copy">Le futur service pourra diffuser les annonces officielles, les dates d’activités, les publications et les informations destinées aux membres et sympathisants.</p>
              <ul className="notification-list">
                <li>Annonces et communications officielles</li>
                <li>Activités et rencontres à venir</li>
                <li>Actualités et initiatives communautaires</li>
              </ul>
            </div>
            <NewsletterFormPreview />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}