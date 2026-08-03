import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GithubLeetcode from "@/components/GithubLeetcode";
import EducationCertifications from "@/components/EducationCertifications";
import Experience from "@/components/Experience";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubLeetcode />
        <EducationCertifications />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
