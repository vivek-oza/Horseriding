import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SessionSchedule from './components/SessionSchedule';
import AboutAcademy from './components/AboutAcademy';
import ImageGallery from './components/ImageGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import './styles/variables.css';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <SessionSchedule />
        <AboutAcademy />
        <ImageGallery />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
