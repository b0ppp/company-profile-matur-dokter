import { Building2, Heart, Phone, Activity, Handshake, Award, Users, Globe, Target, CheckCircle } from 'lucide-react';

export default function PartnershipPage() {
  const mainPartners = [
    {
      name: "Kementerian Kesehatan RI",
      description: "Kemitraan dengan Kemenkes untuk standar layanan kesehatan nasional dan implementasi program kesehatan pemerintah",
      icon: Building2,
      color: "from-green-500 to-green-600",
      benefits: ["Standar Nasional", "Program Prioritas", "Sertifikasi Resmi"]
    },
    {
      name: "Palang Merah Indonesia",
      description: "Kolaborasi untuk ketersediaan stok darah, layanan donor darah, dan tanggap darurat bencana",
      icon: Heart,
      color: "from-red-500 to-red-600",
      benefits: ["Stok Darah", "Donor Darah", "Tanggap Darurat"]
    },
    {
      name: "Emergency Call 119",
      description: "Integrasi dengan layanan panggilan darurat kesehatan nasional untuk respons cepat kondisi medis mendesak",
      icon: Phone,
      color: "from-orange-500 to-orange-600",
      benefits: ["Respons Cepat", "24/7 Standby", "Ambulans Siaga"]
    },
    {
      name: "Fasilitas Kesehatan Klaten",
      description: "Kerjasama dengan seluruh rumah sakit, puskesmas, klinik, dan apotek di Kabupaten Klaten",
      icon: Activity,
      color: "from-blue-500 to-blue-600",
      benefits: ["Jaringan Luas", "Data Terintegrasi", "Layanan Terpadu"]
    }
  ];

  const achievements = [
    { icon: Handshake, number: "50+", label: "Mitra Kesehatan", desc: "Kerjasama strategis" },
    { icon: Users, number: "100K+", label: "Pengguna Aktif", desc: "Masyarakat terlayani" },
    { icon: Award, number: "26", label: "Kecamatan", desc: "Cakupan wilayah" },
    { icon: Globe, number: "100%", label: "Terintegrasi", desc: "Sistem digital" }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Jangkauan Luas",
      desc: "Menjangkau seluruh wilayah Kabupaten Klaten dengan 26 kecamatan dan ratusan desa untuk pelayanan kesehatan yang merata.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Activity,
      title: "Integrasi Data",
      desc: "Sistem terintegrasi memudahkan pertukaran informasi antar fasilitas kesehatan untuk pelayanan yang lebih efisien.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "Kualitas Terjamin",
      desc: "Standar pelayanan sesuai dengan pedoman Kementerian Kesehatan RI untuk mutu layanan kesehatan yang terpercaya.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2742] to-[#0f1924] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <span className="font-bold text-sm">KEMITRAAN</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Bersama Membangun<br />Ekosistem Kesehatan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kolaborasi strategis dengan berbagai pihak untuk memberikan layanan kesehatan terbaik bagi masyarakat Kabupaten Klaten
          </p>
        </div>
      </section>

      {/* Main Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-4">
              <span className="font-bold text-sm">MITRA STRATEGIS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Partner Terpercaya Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kerjasama dengan institusi terkemuka untuk layanan kesehatan yang berkualitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainPartners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-3xl p-10 hover:border-[#C41E3A] hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {partner.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100">
                    {partner.benefits.map((benefit, idx) => (
                      <span 
                        key={idx}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg font-medium hover:bg-[#C41E3A]/10 hover:text-[#C41E3A] transition-all"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>{benefit}</span>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dipercaya oleh Institusi Terkemuka
            </h2>
            <p className="text-xl text-gray-600">
              Partner resmi dalam ekosistem kesehatan Indonesia
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group text-center transform hover:-translate-y-2">
              <Building2 className="w-16 h-16 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Kemenkes RI</h3>
              <p className="text-sm text-gray-600">Kementerian Kesehatan</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group text-center transform hover:-translate-y-2">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">PMI Klaten</h3>
              <p className="text-sm text-gray-600">Palang Merah Indonesia</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group text-center transform hover:-translate-y-2">
              <Phone className="w-16 h-16 text-orange-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Call 119</h3>
              <p className="text-sm text-gray-600">Emergency Services</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group text-center transform hover:-translate-y-2">
              <Activity className="w-16 h-16 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">Faskes Klaten</h3>
              <p className="text-sm text-gray-600">Fasilitas Kesehatan</p>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-8 bg-gradient-to-br from-[#C41E3A] to-[#E85D75] rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="font-semibold mb-1">{achievement.label}</div>
                  <div className="text-sm text-white/80">{achievement.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-4">
              <span className="font-bold text-sm">MANFAAT KEMITRAAN</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Kolaborasi yang Menguntungkan
            </h2>
            <p className="text-xl text-gray-600">
              Untuk kesehatan masyarakat yang lebih baik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-10 border-2 border-gray-100 hover:border-[#C41E3A] hover:shadow-2xl transition-all"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#E85D75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Handshake className="w-20 h-20 text-white mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Tertarik Bermitra dengan Kami?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Bergabunglah dalam membangun ekosistem kesehatan yang lebih baik untuk masyarakat Kabupaten Klaten.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:dinkes@klatenkab.go.id"
                className="bg-white text-[#C41E3A] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-xl"
              >
                Hubungi Kami
              </a>
              <a 
                href="tel:02723391330"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-[#C41E3A] transition-all font-bold text-lg"
              >
                Telepon (0272) 3391 330
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
