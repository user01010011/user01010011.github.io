import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pageContainer">
      <Header />
      <div className="sectionContainer">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <Footer />
      </div>
    </div>
  )
}

export default App;
