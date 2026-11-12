export function MembershipFormPreview() {
  return (
    <div className="registration-panel">
      <div className="form-status">APERÇU DU FORMULAIRE</div>
      <h2>Demande d’adhésion</h2>
      <p>Les informations demandées seront utilisées uniquement pour traiter une demande d’adhésion, après activation du système sécurisé.</p>
      <form>
        <div className="form-grid">
          <label>Nom<input name="nom" autoComplete="family-name" placeholder="Votre nom" /></label>
          <label>Prénom<input name="prenom" autoComplete="given-name" placeholder="Votre prénom" /></label>
          <label>Adresse e-mail<input name="email" type="email" autoComplete="email" placeholder="nom@exemple.com" /></label>
          <label>Téléphone<input name="telephone" type="tel" autoComplete="tel" placeholder="+509 ..." /></label>
          <label className="form-full">Ville / Commune<input name="ville" autoComplete="address-level2" placeholder="Votre commune" /></label>
          <label className="form-full">Pourquoi souhaitez-vous rejoindre l’AJECCH ?<textarea name="motivation" rows={4} placeholder="Quelques mots (facultatif)" /></label>
        </div>
        <p className="form-privacy">Aucune donnée n’est envoyée ni enregistrée depuis cette version de démonstration.</p>
        <button className="button button-gold" type="button" disabled>Envoi bientôt disponible</button>
      </form>
    </div>
  );
}

export function NewsletterFormPreview() {
  return (
    <div className="registration-panel newsletter-panel">
      <div className="form-status">RESTER INFORMÉ</div>
      <h2>Recevoir les nouvelles de l’AJECCH.</h2>
      <p>Un abonnement aux annonces, activités et actualités de l’association.</p>
      <form>
        <label>Adresse e-mail<input name="email" type="email" autoComplete="email" placeholder="nom@exemple.com" /></label>
        <label className="consent-row"><input type="checkbox" name="consent" /> J’accepte de recevoir les communications de l’AJECCH par e-mail.</label>
        <p className="form-privacy">Vous pourrez demander le désabonnement à tout moment. L’inscription sera activée après la mise en place du stockage sécurisé et du mécanisme de désabonnement.</p>
        <button className="button button-gold" type="button" disabled>Abonnement bientôt disponible</button>
      </form>
    </div>
  );
}