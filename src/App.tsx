import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PartnershipPage from './pages/PartnershipPage';
import ContactPage from './pages/ContactPage';
import DownloadPage from './pages/DownloadPage';
import ConsultationPage from './pages/ConsultationPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
        <div className="min-h-screen bg-white flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/partnership" element={<PartnershipPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/consultation" element={<ConsultationPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  );
}