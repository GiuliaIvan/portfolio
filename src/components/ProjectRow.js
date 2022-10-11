import parse from "html-react-parser";

export default function ProjectRow({ post }) {
    let image = "https://portfolio.giuliaivan.website/wp-json/wp/v2/posts?_embed";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
      <article className="project-article figure">
        <img
          className="project-image"
          src={post.acf.image ? post.acf.image.url : image}
          alt={post.acf.image ? post.acf.image.alt : "Default Image"}
        />

        <figcaption>
          <h2>{parse(post.title.rendered)}</h2>
          {parse(post.content.rendered)}
          <p>{post.acf.title}</p>
          <p>
            {post.acf.website ? (
              <a
                className="website-link"
                href={post.acf.website}
                target="_blank"
                rel="noreferrer"
              >
                See the website
              </a>
            ) : (
              <p>No link available</p>
            )}{" "}
          </p>
        </figcaption>
      </article>
    );
}