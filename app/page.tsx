import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero/>
        <About/>
        <Project/>
        <Skills/>
        <Resume/>
        <Contact/>
        <Footer/>
    </>
  );
}
