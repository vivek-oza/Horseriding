import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SessionSchedule from './components/SessionSchedule';
import WhyUs from './components/WhyUs';
import AboutAcademy from './components/AboutAcademy';
import ImageGallery from './components/ImageGallery';
import Testimonials from './components/Testimonials';
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
        <WhyUs />
        <AboutAcademy />
        <ImageGallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
