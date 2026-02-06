import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Safety from './components/Safety';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primeDark min-h-screen text-white selection:bg-accentOrange selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Safety />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
