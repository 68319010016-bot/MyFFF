import Header from './components/Header';
import Contact from './components/Contact';
import { Graphics, Hero, Journey, About, Skills, Work, Footer } from './components/Sections';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">ข้ามไปยังเนื้อหา</a>
      <Graphics />
      <Header />
      <main id="main">
        <Hero />
        <Journey />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
