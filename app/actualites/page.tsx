import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { getPublishedPosts, getSiteMedia } from "@/lib/public-content";

export const metadata = {
  title: "Actualités | AJECCH",
  description: "Suivez les nouvelles et annonces de l'Association des Jeunes Chrétiens du Cap-Haïtien."
};

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const [media, posts] = await Promise.all([getSiteMedia(), getPublishedPosts()]);
  const logoUrl = media["brand.logo"] ?? null;

  return (
    <>
      <SiteHeader active="/actualites" logoUrl={logoUrl} />
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
              <p className="news-intro">Les publications officielles de l’association sont regroupées ici.</p>
              {posts.length > 0 ? (
                <div className="public-news-list">
                  {posts.map((post) => (
                    <article className="public-news-card" id={post.slug} key={post.id}>
                      {post.cover_url && <img className="public-news-cover" src={post.cover_url} alt="" loading="lazy" />}
                      <div className="public-news-copy">
                        <span className="public-news-category">{post.category === "event" ? "Événement" : post.category === "announcement" ? "Annonce" : "Actualité"}</span>
                        {post.published_at && <time dateTime={post.published_at}>{new Date(post.published_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time>}
                        <h3>{post.title}</h3>
                        {post.excerpt && <p className="public-news-excerpt">{post.excerpt}</p>}
                        {post.body && <p>{post.body}</p>}
                        {post.category === "event" && (post.event_starts_at || post.event_location) && (
                          <p className="public-news-event-meta">
                            {post.event_starts_at && <>Date : {new Date(post.event_starts_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</>}
                            {post.event_location && <> · Lieu : {post.event_location}</>}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="empty-news"><span className="empty-news-icon">✳</span><h3>Les publications arrivent bientôt.</h3><p>Les premières actualités seront ajoutées dès que les contenus auront été validés par l’association.</p><a className="button button-outline" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Voir la page Facebook <span>↗</span></a></div>
              )}
            </div>
            <aside className="news-aside"><div className="section-kicker">SUIVRE AJECCH</div><h3>Retrouvez aussi l’association sur Facebook.</h3><p>Consultez la page officielle pour les publications et annonces déjà partagées.</p><a className="text-link" href="https://www.facebook.com/AJECCH" target="_blank" rel="noreferrer">Ouvrir Facebook <span>↗</span></a><div className="aside-rule" /><span className="aside-small">INFORMATIONS OFFICIELLES</span><p>Les annonces publiées sur ce site sont gérées par les responsables autorisés de l’AJECCH.</p></aside>
          </div>
        </section>
      </main>
      <SiteFooter logoUrl={logoUrl} />
    </>
  );
}
