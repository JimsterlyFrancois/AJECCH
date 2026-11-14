# AJECCH — administration du site

## Espaces et rôles

- **Super Admin — siège 1** : contrôle complet, équipe, rôles, publications et bibliothèque média.
- **Super Admin — siège 2** : mêmes droits que le siège 1.
- **Publication & Médias** : crée, publie, modifie et supprime les actualités, annonces et événements ; téléverse, remplace, masque et supprime les images du site public. Ne peut pas attribuer de rôles ni consulter la gestion de l’équipe.

Les sièges sont protégés par une contrainte unique en base. Le système empêche également de désactiver ou supprimer le dernier Super Admin actif.

## Variables d’environnement Vercel

Le projet doit contenir les variables suivantes pour Production, Preview et Development :

- \`NEXT_PUBLIC_SUPABASE_URL\`
- \`NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY\`

Aucune clé \`service_role\` n’est utilisée dans le navigateur.

## Première activation du Super Admin

1. Dans Supabase, ouvrir **Authentication → Users** et créer le compte du premier responsable AJECCH avec son adresse e-mail et son mot de passe. Confirmer le compte selon les réglages d’authentification du projet.
2. Dans le **SQL Editor** de Supabase, exécuter cette requête pour récupérer le code privé créé par la migration :

   ```sql
   select token
   from private.ajecch_bootstrap_tokens
   where used_at is null
   limit 1;
   ```

3. Conserver ce code hors du dépôt Git et le transmettre uniquement au premier responsable autorisé. Ne pas le publier dans une issue, un document public ou une variable `NEXT_PUBLIC_`.
4. Se connecter sur \`/administration/connexion\`, puis ouvrir \`/administration\` et saisir le nom d’affichage et le code.
5. Le code est à usage unique. Il est consommé au moment de la création du siège Super Admin 1.

## Ajouter les deux autres comptes

Après la première activation, le Super Admin :

1. crée les deux autres comptes via **Supabase → Authentication → Users** ;
2. copie l’UUID de chaque nouvel utilisateur ;
3. dans **Administration → Équipe & accès**, attribue le siège Super Admin 2 au deuxième responsable et le rôle Publication & Médias au troisième.

La création directe des utilisateurs dans Auth est volontairement réservée au tableau de bord Supabase : aucun formulaire d’inscription public ne peut s’octroyer un rôle privilégié.

## Bibliothèque d’images

Le bucket public \`ajecch-public-media\` accepte les images JPG, PNG, WebP et AVIF jusqu’à 8 Mo. Le téléchargement public est autorisé ; l’ajout, le remplacement et la suppression nécessitent une session associée à un rôle Super Admin ou Publication & Médias.

Les emplacements gérés depuis l’espace média sont : \`brand.logo\`, \`home.hero\`, \`home.actions\`, \`home.gallery\` et \`home.contact\`.

## Développement

Le schéma initial est conservé dans \`supabase/migrations/20261114000000_ajecch_admin_cms.sql\`. Les versions exactes des clients Supabase sont épinglées dans \`package.json\`.
