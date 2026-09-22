import { useState } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import GradientBlobs from "./components/GradientBlobs";
import ParticleField from "./components/ParticleField";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {loading && <Preloader onDone={() => setLoading(false)} />}
      <SmoothScroll>
        <CustomCursor />
        <GradientBlobs />
        <ParticleField />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
        <div className="relative z-10">
          <Footer />
        </div>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
