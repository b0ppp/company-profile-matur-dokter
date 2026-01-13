  import { useState } from 'react';
  import { Smartphone, Download, CheckCircle, Star, Users, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
  import { PhoneMockup } from '../components/PhoneMockup';
  
  // Import app screenshots - ALL BERANDA SCREENS
  import imgBeranda from "@/assets/homePage.jpeg";
  import imgLayanan from "@/assets/layananPage.jpeg";
  import imgKonsultasi from "@/assets/konsultasiPage.jpeg";
  import imgBerita from "@/assets/beritaPage.jpeg";
  import imgTeleponDarurat from "@/assets/sosPage.jpeg";
  
  export default function DownloadPage() {
    const [activeScreen, setActiveScreen] = useState(0);
  
    const appScreens = [
      {
        image: imgBeranda,
        title: "Beranda Aplikasi",
        description: "Halaman utama aplikasi dengan berbagai layanan kesehatan"
      },
      {
        image: imgLayanan,
        title: "Layanan Gawat Darurat",
        description: "Dapatkan pertolongan medis segera di Kabupaten Klaten"
      },
      {
        image: imgKonsultasi,
        title: "Konsultasi Kesehatan",
        description: "Konsultasi online dengan dokter profesional"
      },
      {
        image: imgBerita,
        title: "Berita Kesehatan",
        description: "Informasi terkini tentang kesehatan dan penyakit"
      },
      {
        image: imgTeleponDarurat,
        title: "Telepon Darurat",
        description: "Panggilan darurat 24/7 ke fasilitas kesehatan terdekat"
      }
    ];
  
    const features = [
      {
        icon: Zap,
        title: "Akses Cepat",
        desc: "Interface yang intuitif untuk akses layanan kesehatan dalam hitungan detik",
        color: "from-yellow-500 to-orange-500"
      },
      {
        icon: Shield,
        title: "Data Aman",
        desc: "Keamanan data pribadi dan medis terjamin dengan enkripsi tingkat tinggi",
        color: "from-green-500 to-green-600"
      },
      {
        icon: Users,
        title: "100K+ Pengguna",
        desc: "Dipercaya oleh lebih dari 100.000 masyarakat Kabupaten Klaten",
        color: "from-blue-500 to-blue-600"
      },
      {
        icon: Star,
        title: "Rating 4.8/5",
        desc: "Penilaian tinggi dari pengguna untuk kepuasan layanan aplikasi",
        color: "from-purple-500 to-purple-600"
      }
    ];
  
    const appFeatures = [
      "SOS Darurat 24/7",
      "Emergency Call 119",
      "Info Rumah Sakit & Puskesmas",
      "Lokasi Apotek Terdekat",
      "Stok Darah PMI Real-time",
      "Artikel Kesehatan",
      "Konsultasi Online",
      "Navigasi GPS",
      "Notifikasi Push"
    ];
  
    const nextScreen = () => {
      setActiveScreen((prev) => (prev + 1) % appScreens.length);
    };
  
    const prevScreen = () => {
      setActiveScreen((prev) => (prev - 1 + appScreens.length) % appScreens.length);
    };
  
    return (
      <div className="pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#1a2742] to-[#0f1924] py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
                  <span className="font-bold text-sm">DOWNLOAD APLIKASI</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                  Download<br />Matur Dokter
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Akses seluruh layanan kesehatan di Kabupaten Klaten dalam satu aplikasi mobile. Gratis untuk Android dan iOS.
                </p>
  
                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold flex items-center justify-center space-x-3 shadow-xl">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-600">GET IT ON</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </button>
  
                  <button className="bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-bold flex items-center justify-center space-x-3">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white/80">Download on the</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </button>
                </div>
  
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold mb-1">100K+</div>
                    <div className="text-gray-400 text-sm">Downloads</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">4.8</div>
                    <div className="text-gray-400 text-sm">Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">50+</div>
                    <div className="text-gray-400 text-sm">Faskes</div>
                  </div>
                </div>
              </div>
  
              {/* Right - Phone Preview */}
              <div className="relative">
                <PhoneMockup image={appScreens[activeScreen].image} className="animate-float" />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevScreen}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextScreen}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
  
                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                  {appScreens.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveScreen(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === activeScreen 
                          ? 'w-8 bg-gradient-to-r from-[#C41E3A] to-[#E85D75]' 
                          : 'w-2 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
  
                {/* Screen Description */}
                <div className="text-center mt-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{appScreens[activeScreen].title}</h3>
                  <p className="text-gray-300">{appScreens[activeScreen].description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* App Screenshots Gallery */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-4">
                <span className="font-bold text-sm">PREVIEW APLIKASI</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Tampilan Aplikasi Mobile
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Interface yang modern, intuitif, dan mudah digunakan untuk semua kalangan
              </p>
            </div>
  
            {/* Screenshots Grid */}
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {appScreens.map((screen, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center transform hover:-translate-y-2 transition-all cursor-pointer"
                  onClick={() => setActiveScreen(index)}
                >
                  <PhoneMockup image={screen.image} className="scale-75" />
                  <h3 className="text-center mt-4 font-bold text-gray-900">{screen.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Kenapa Pilih Matur Dokter?
              </h2>
              <p className="text-xl text-gray-600">
                Aplikasi kesehatan terpercaya untuk masyarakat Klaten
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="text-center p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl hover:border-[#C41E3A] hover:shadow-xl transition-all"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
  
        {/* Features List */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Fitur Lengkap dalam Satu Aplikasi
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Semua yang Anda butuhkan untuk akses layanan kesehatan di Kabupaten Klaten
                </p>
  
                <div className="grid grid-cols-2 gap-4">
                  {appFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-[#C41E3A] transition-all">
                      <CheckCircle className="w-6 h-6 text-[#C41E3A] flex-shrink-0" />
                      <span className="font-semibold text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
  
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C41E3A] to-[#E85D75] rounded-3xl blur-3xl opacity-20"></div>
                <PhoneMockup image={imgLayanan} className="relative" />
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#E85D75]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Smartphone className="w-20 h-20 text-white mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Download Sekarang, Gratis!
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Tersedia untuk Android dan iOS. Akses seluruh fitur kesehatan dalam genggaman Anda.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="bg-white text-[#C41E3A] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-xl flex items-center space-x-3">
                <Download className="w-6 h-6" />
                <span>Download Android</span>
              </button>
              <button className="bg-[#1a2742] text-white px-10 py-5 rounded-xl hover:bg-[#0f1924] transition-all font-bold text-lg shadow-xl flex items-center space-x-3">
                <Download className="w-6 h-6" />
                <span>Download iOS</span>
              </button>
            </div>
  
            <p className="text-white/80 text-sm">
              Versi 2.1.0 • Terakhir diupdate: Januari 2026
            </p>
          </div>
        </section>
      </div>
    );
  }