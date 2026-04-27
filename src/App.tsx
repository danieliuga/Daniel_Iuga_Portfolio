import { useState } from 'react';
import SplashScreen from './Components/SplashScreen';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import AiAssistant from './Components/AiAssistant';
import Services from './Components/Services';
import ContactModal from './Components/ContactModal';
import Footer from './Components/Footer';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SplashScreen />
      <Header />
      <main>
        <Hero onContactClick={() => setShowModal(true)} />
        <About />
        <Skills />
        <Projects />
        <AiAssistant />
        <Education />
        <Services />
      </main>
      <Footer />
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default App;
