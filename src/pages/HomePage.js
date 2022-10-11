import Header from "../components/Header";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";

export default function HomePage() {
    return (
      <section> {/*className="page">*/}
        <Header />
        <About />
        <ProjectsSection />
      </section>
    );
}
