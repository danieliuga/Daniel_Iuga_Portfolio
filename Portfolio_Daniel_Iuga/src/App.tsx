import { useState } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Projects from './Components/Projects';
import About from './Components/About';
import ContactModal from './Components/ContactModal';
import Footer from './Components/Footer';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero onContactClick={() => setShowModal(true)} />
        <Skills />
        <Services />
        <Projects />
        <About />
      </main>
      <Footer />
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default App;
