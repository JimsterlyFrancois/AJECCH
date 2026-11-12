import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function NotFound() {
  return <><SiteHeader /><main className="page-hero not-found"><div className="container"><div className="section-kicker">ERREUR 404</div><h1>Cette page est <em>introuvable.</em></h1><p>Le lien utilisé n’existe pas ou la page a été déplacée.</p><a className="button button-gold" href="/">Retour à l’accueil <span>→</span></a></div></main><SiteFooter /></>;
}