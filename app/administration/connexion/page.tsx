import { Suspense } from "react";
import LoginForm from "./login-form";

export const metadata = {
  title: "Connexion administration | AJECCH",
  robots: { index: false, follow: false }
};

export default function AdminLoginPage() {
  return (
    <main className="admin-auth-page">
      <section className="admin-auth-card">
        <a className="admin-auth-brand" href="/">AJECCH <span>· ESPACE DE GESTION</span></a>
        <p className="admin-eyebrow">ACCÈS RÉSERVÉ</p>
        <h1>Administration</h1>
        <p className="admin-auth-description">Connectez-vous avec les identifiants qui vous ont été attribués par un Super Admin.</p>
        <Suspense fallback={<p>Chargement du formulaire…</p>}><LoginForm /></Suspense>
        <a className="admin-back-link" href="/">← Retour au site public</a>
      </section>
    </main>
  );
}
