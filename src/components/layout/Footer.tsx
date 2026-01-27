import { Mail, MessageCircle, MapPin, Phone, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/icon_matur_dokter.png';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f1419] via-[#1a2332] to-[#0f1419] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
              src={logoImage} 
              alt="Logo Matur Dokter" 
              className="w-12 h-12 rounded-xl object-contain shadow-md" 
              />
              <div>
                <h3 className="font-bold text-lg text-white">Matur Dokter</h3>
                <p className="text-sm text-gray-400">Dinkes Kab. Klaten</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform layanan kesehatan terpadu untuk masyarakat Kabupaten Klaten yang lebih sehat dan sejahtera.
            </p>
            {/* Social Media */}
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/maturdokterklaten"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#C41E3A] hover:to-[#E85D75] transition"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.instagram.com/maturdokter_kabklaten?igsh=MThkZnYwbTgybGprYg=="
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#C41E3A] hover:to-[#E85D75] transition"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://x.com/MaturdokterK"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#C41E3A] hover:to-[#E85D75] transition"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a 
                href="https://www.youtube.com/@dinaskesehatan2581"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-[#C41E3A] hover:to-[#E85D75] transition"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Halaman</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-[#E85D75] transition">Beranda</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-[#E85D75] transition">Tentang Kami</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-[#E85D75] transition">Fitur Layanan</Link></li>
              <li><Link to="/partnership" className="text-gray-400 hover:text-[#E85D75] transition">Kemitraan</Link></li>
              <li><Link to="/download" className="text-gray-400 hover:text-[#E85D75] transition">Download App</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-[#E85D75] transition">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#E85D75] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">0822 60000 910</span>
              </li>
              {/* <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#E85D75] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">dinas.kesehatan@klaten.go.id</span>
              </li> */}
              <li className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-[#E85D75] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">0822 60000 910</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E85D75] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Jl. Pemuda Nomor No.313, Mlinjon, Tonggalan, Kec. Klaten Tengah, Kabupaten Klaten, Jawa Tengah 57412</span>
              </li>
            </ul>
          </div>

          {/* Emergency */}
          <div>
            <h4 className="font-bold text-white mb-6">Layanan Darurat</h4>
            <div className="bg-gradient-to-r from-[#C41E3A] to-[#E85D75] rounded-xl p-6 shadow-lg">
              <h5 className="font-bold mb-2">Darurat Medis?</h5>
              <p className="text-sm text-white/90 mb-4">Hubungi segera</p>
              <a 
                href="tel:119"
                className="flex items-center justify-center space-x-2 bg-white text-[#C41E3A] px-6 py-3 rounded-lg hover:bg-gray-100 transition font-bold text-xl shadow-md"
              >
                <Phone className="w-5 h-5" />
                <span>119</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2026 Matur Dokter - Dinas Kesehatan Kabupaten Klaten. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Dikembangkan untuk meningkatkan kualitas pelayanan kesehatan masyarakat Klaten
          </p>
        </div>
      </div>
    </footer>
  );
}