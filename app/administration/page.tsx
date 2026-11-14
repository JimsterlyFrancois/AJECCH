import { redirect } from "next/navigation";
import { getAjecchAdmin } from "@/lib/admin-auth";
import AdminConsole from "./admin-console";
import BootstrapForm from "./bootstrap-form";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Administration | AJECCH",
  robots: { index: false, follow: false }
};

export default async function AdministrationPage() {
  const { supabase, claims, admin } = await getAjecchAdmin();

  if (!claims) redirect("/administration/connexion");
  if (admin) return <AdminConsole admin={admin} />;

  const { data: canBootstrap } = await supabase.rpc("ajecch_setup_available");
  return (
    <main className="admin-auth-page">
      <section className="admin-auth-card">
        <a className="admin-auth-brand" href="/">AJECCH <span>· INITIALISATION</span></a>
        {canBootstrap ? (
          <>
            <p className="admin-eyebrow">CONFIGURATION INITIALE</p>
            <h1>Activer le premier Super Admin</h1>
            <p className="admin-auth-description">Ce code unique permet au compte connecté de prendre le premier siège Super Admin. Il devient inutilisable dès sa validation.</p>
            <BootstrapForm />
          </>
        ) : (
          <>
            <p className="admin-eyebrow">ACCÈS NON AUTORISÉ</p>
            <h1>Aucun rôle actif</h1>
            <p className="admin-auth-description">Ce compte n’est pas autorisé à gérer le site. Demandez à un Super Admin de vous attribuer un rôle.</p>
            <form action="/administration/deconnexion" method="post"><button className="admin-secondary-button" type="submit">Se déconnecter</button></form>
          </>
        )}
      </section>
    </main>
  );
}
