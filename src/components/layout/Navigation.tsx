import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// 1. IMPORT LOGO ANDA DI SINI
// Pastikan path (lokasi file) sesuai dengan struktur folder Anda
import logoImage from '@/assets/icon_matur_dokter.png'; 

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/about', label: 'Tentang' },
    { path: '/features', label: 'Fitur Layanan' },
    { path: '/consultation', label: 'Konsultasi' },
    { path: '/partnership', label: 'Kemitraan' },
    { path: '/download', label: 'Download' },
    { path: '/contact', label: 'Kontak' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition">
            
            {/* --- BAGIAN YANG DIUBAH (DARI DIV KE IMG) --- */}
            <img 
              src={logoImage} 
              alt="Logo Matur Dokter" 
              className="w-12 h-12 rounded-xl object-contain shadow-md" 
            />
            {/* ------------------------------------------- */}

            <div>
              <h1 className="font-bold text-lg text-[#1a1a1a]">Matur Dokter</h1>
              <p className="text-xs text-gray-500">Dinkes Kab. Klaten</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#C41E3A]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Emergency Button Desktop */}
          <a
            href="tel:119"
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span>Telp. Darurat</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:119"
              className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white px-4 py-3 rounded-lg font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>Telepon Darurat</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}