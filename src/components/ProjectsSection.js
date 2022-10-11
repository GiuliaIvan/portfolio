import ProjectRow from "./ProjectRow";
import { useEffect, useState } from "react";

export default function ProjectsSection() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      async function getData() {
        const response = await fetch(
          "https://portfolio.giuliaivan.website/wp-json/wp/v2/posts?_embed"
        );
        const data = await response.json();
        // console.log(data);
        setPosts(data);
      }
      getData();
    }, []);

    return (
      <div className="projects-section">
        <div className="small-title projects-small-title">
          <h3>from plain ideas</h3>
        </div>

        <div className="title projects-title">
          <h1>... to GR8 things</h1>
        </div>

        <section className="grid-container grid-container-projects project-cards">
          {posts.map((post) => (
            <ProjectRow key={post.id} post={post} />
          ))}
        </section>
      </div>
    );
}