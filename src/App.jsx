import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';
import ExclusiveSection from './components/ExclusiveSection';
import FeedbackAndContact from './components/FeedbackAndContact';

function App() {
  return (
    <div className="min-h-screen bg-lensfit-bg font-gordita text-white selection:bg-lensfit-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductSection />
        <ExclusiveSection />
        <FeedbackAndContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
