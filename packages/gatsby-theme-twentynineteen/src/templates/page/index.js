import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {ContactForm} from "../../components/ContactForm";

const SinglePage = props => {
  const {
    pageContext: { id, postId, title, content, excerpt,uri},
  } = props;


  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <article
        data-id={id}
        id={`post-${postId}`}
        className={`post-${postId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
      >
        <header className="entry-header">
          <h1 className="entry-title">{title}</h1>
          <div className="entry-meta" />
          {/* .meta-info */}
        </header>

        <div
          className="entry-content"
        >
			{
				'contact' === uri  ? <ContactForm apiRootUrl={'https://futurecapable.dev/wp-json/cf-api'} /> : <div dangerouslySetInnerHTML={{ __html: content }} />
			}

		</div>
        {/* .entry-content */}

        <footer className="entry-footer" />
      </article>
      {/* #post-${ID} */}
    </Layout>
  )
};

export default SinglePage
