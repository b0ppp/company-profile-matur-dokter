import { Building2, Target, Eye, CheckCircle2, Award, Heart, Shield, Users, TrendingUp, Smartphone, Download, Home, Pill, Building, UsersRound, User, Hospital } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PhoneMockup } from '../components/common/PhoneMockup';

// Import app screenshot - NEW BERANDA
// import imgBeranda from "@/assets/homePage.jpeg";

export default function AboutPage() {
  const missions = [
    "Meningkatkan akses dan kualitas pelayanan kesehatan masyarakat",
    "Menyediakan informasi kesehatan yang akurat dan terpercaya",
    "Mengoptimalkan penggunaan teknologi digital dalam layanan kesehatan",
    "Membangun sistem kesehatan yang responsif dan terintegrasi",
    "Meningkatkan kesadaran masyarakat akan pentingnya kesehatan"
  ];

  const values = [
    {
      icon: Award,
      title: "Profesional",
      desc: "Pelayanan berkualitas tinggi",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Responsif",
      desc: "Tanggap kebutuhan masyarakat",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Transparan",
      desc: "Akuntabel dan terpercaya",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Inovatif",
      desc: "Teknologi terkini",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2742] to-[#0f1924] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <span className="font-bold text-sm">TENTANG KAMI</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Dinas Kesehatan<br />Kabupaten Klaten
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Berkomitmen untuk meningkatkan kualitas pelayanan kesehatan masyarakat melalui inovasi digital dan layanan terpadu
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-6">
                <span className="font-bold text-sm">PROFIL KAMI</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Tentang Matur Dokter
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dinas Kesehatan Kabupaten Klaten berkomitmen untuk meningkatkan kualitas pelayanan kesehatan masyarakat melalui inovasi digital. <strong className="text-[#C41E3A]">Matur Dokter</strong> hadir sebagai platform terintegrasi yang menghubungkan masyarakat dengan seluruh layanan kesehatan di Kabupaten Klaten.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dengan memanfaatkan teknologi informasi, kami mempermudah akses informasi fasilitas kesehatan, layanan darurat, konsultasi medis, hingga informasi kesehatan terkini untuk seluruh warga Klaten.
              </p>

              <div className="bg-gradient-to-r from-[#C41E3A]/5 to-[#E85D75]/5 border-l-4 border-[#C41E3A] p-6 rounded-r-xl">
                <p className="text-gray-700 italic leading-relaxed">
                  "Kesehatan adalah hak setiap warga. Dengan teknologi, kami memastikan layanan kesehatan dapat diakses dengan mudah, cepat, dan terpercaya oleh seluruh masyarakat Klaten."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-[#C41E3A] to-[#E85D75] rounded-2xl p-8 text-white transform hover:scale-105 transition-all">
                <Building className="w-12 h-12 mb-4" />
                <div className="text-4xl font-bold mb-2">34</div>
                <div className="text-white/90">Puskesmas</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-all">
                <Hospital className="w-12 h-12 mb-4" />
                <div className="text-4xl font-bold mb-2">13</div>
                <div className="text-green-100">Rumah Sakit</div>
              </div>
              {/* <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-all">
                <Target className="w-12 h-12 mb-4" />
                <div className="text-4xl font-bold mb-2">30+</div>
                <div className="text-blue-100">Klinik</div>
              </div> */}
              {/* <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-all">
                <Heart className="w-12 h-12 mb-4" />
                <div className="text-4xl font-bold mb-2">100K+</div>
                <div className="text-purple-100">Pengguna</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-6">
              <span className="font-bold text-sm">VISI & MISI</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Komitmen untuk Klaten Sehat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bersama membangun sistem kesehatan yang lebih baik dan terjangkau
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Visi */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border-t-4 border-[#C41E3A] hover:shadow-2xl transition-all">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#C41E3A] to-[#E85D75] rounded-2xl flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Visi</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mewujudkan Kabupaten Klaten yang sehat, mandiri, dan berdaya saing melalui pelayanan kesehatan yang berkualitas, merata, dan terjangkau dengan dukungan teknologi informasi yang modern dan terintegrasi.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border-t-4 border-blue-500 hover:shadow-2xl transition-all">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Misi</h3>
              </div>
              <ul className="space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C41E3A] flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center group hover:-translate-y-2 transform"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Struktur Organisasi
            </h2>
            <p className="text-xl text-gray-600">
              Tim profesional yang berkomitmen melayani kesehatan masyarakat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C41E3A] hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#C41E3A] to-[#E85D75] rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kepala Dinas</h3>
              <p className="text-gray-600">
                Memimpin dan mengkoordinasikan seluruh program kesehatan
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C41E3A] hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sekretaris Dinas</h3>
              <p className="text-gray-600">
                Mengoordinasikan administrasi, perencanaan, dan dukungan operasional dinas
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C41E3A] hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bidang Pelayanan Kesehatan</h3>
              <p className="text-gray-600">
                Mengelola dan mengawasi kualitas pelayanan kesehatan
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C41E3A] hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Pill className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bidang Sumber Daya Kesehatan</h3>
              <p className="text-gray-600">
                Mengelola tenaga kesehatan, fasilitas, dan perizinan kesehatan
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C41E3A] hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bidang Pencegahan dan Pengendalian Penyakit</h3>
              <p className="text-gray-600">
                Menangani pencegahan dan pengendalian penyakit
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C41E3A] hover:shadow-xl transition-all text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bidang Kesehatan Masyarakat</h3>
              <p className="text-gray-600">
                Mengelola upaya promotif dan preventif kesehatan masyarakat
              </p>
            </div>
            

          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Aplikasi Matur Dokter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Akses layanan kesehatan di Kabupaten Klaten dengan mudah melalui aplikasi Matur Dokter
            </p>
          </div>

          {/* --- PERBAIKAN DIMULAI DARI SINI --- */}
          {/* 1. Kita batasi lebar total menjadi max-w-4xl dan taruh tengah (mx-auto) */}
          {/* 2. Gunakan flex-col dan gap-8 untuk jarak antar card yang rapi */}
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            
            {/* Card 1: Video */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Video Pengenalan Aplikasi
              </h3>

              {/* Video Container - Responsive aspect ratio (Mobile: 18:9, Desktop: 20:9) */}
              
              {/* Mobile view - 18:9 (lebih pendek dari 16:9) */}
              <div className="md:hidden flex justify-center">
                <div className="relative w-full rounded-xl shadow-lg overflow-hidden bg-white border border-gray-200" style={{ aspectRatio: '18 / 9' }}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dV4dB9xh4jU"
                    title="Video Pengenalan Matur Dokter"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Desktop view - 20:9 (wider) */}
              <div className="hidden md:flex justify-center">
                <div className="relative w-full max-w-5xl rounded-xl shadow-lg overflow-hidden bg-white border border-gray-200" style={{ aspectRatio: '20 / 9' }}>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dV4dB9xh4jU"
                    title="Video Pengenalan Matur Dokter"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>                              
            </div>

            {/* Card 2: Fitur Utama */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fitur Utama</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Smartphone className="w-6 h-6 text-[#C41E3A] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Akses informasi fasilitas kesehatan</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Download className="w-6 h-6 text-[#C41E3A] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Layanan konsultasi medis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Smartphone className="w-6 h-6 text-[#C41E3A] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Informasi kesehatan terkini</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/download" className="bg-[#C41E3A] text-white px-4 py-2 rounded-full hover:bg-[#E85D75] transition-all inline-block">
                  Unduh Aplikasi
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
}