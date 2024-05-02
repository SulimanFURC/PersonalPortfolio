import Hero from "./components/Hero/page";
import Navbar from "./components/Navbar/page";
import Skills from "./components/Skills/page";
import WorkExperience from "./components/WorkExperience/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactMe from "./components/Contact/page";
import Footer from "./components/Footer/page";
import Projects from "./components/Projects/page";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}
