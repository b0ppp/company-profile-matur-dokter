import {
  MessageSquare,
  Clock,
  Users,
  CheckCircle2,
  Phone,
  Video,
  FileText,
  AlertCircle,
  CheckCircle,
  MapPin,
  Download,
  Smartphone,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PhoneMockup } from "../components/common/PhoneMockup";

// Import app screenshots - NEW BERANDA
import imgDaftarDokter from "@/assets/daftar_dokter.jpeg";
import imgKonsulDokter from "@/assets/konsultasi_dokter.jpeg";
import imgKonsulMedis from "@/assets/konsultasi_medis.jpeg";
import imgHomecare from "@/assets/homecare.jpeg";

export default function ConsultationPage() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [activeShowcase, setActiveShowcase] = useState(0);

  const consultationTypes = [
    {
      icon: Phone,
      title: "Konsultasi Telepon",
      desc: "Berbicara langsung dengan tenaga medis profesional",
      features: ["Respon cepat", "Privasi terjamin", "Tersedia 24/7"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Video,
      title: "Konsultasi Video",
      desc: "Tatap muka virtual dengan dokter spesialis",
      features: [
        "Pemeriksaan visual",
        "Resep digital",
        "Rekam medis terintegrasi",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: MessageSquare,
      title: "Chat Konsultasi",
      desc: "Tanya jawab dengan tenaga kesehatan kapan saja",
      features: ["Fleksibel", "Riwayat chat tersimpan", "Lampiran dokumen"],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Pilih Jenis Konsultasi",
      desc: "Pilih metode konsultasi yang paling sesuai dengan kebutuhan Anda",
    },
    {
      number: "2",
      title: "Pilih Tenaga Medis",
      desc: "Lihat profil dan keahlian tenaga medis yang tersedia",
    },
    {
      number: "3",
      title: "Jadwalkan Sesi",
      desc: "Tentukan waktu konsultasi yang sesuai dengan jadwal Anda",
    },
    {
      number: "4",
      title: "Lakukan Konsultasi",
      desc: "Terhubung dengan tenaga medis dan dapatkan solusi kesehatan Anda",
    },
  ];

  const faqs = [
    {
      question: "Berapa biaya konsultasi?",
      answer:
        "Biaya konsultasi bervariasi tergantung jenis konsultasi dan tenaga medis yang dipilih. Lihat detail harga di aplikasi Matur Dokter.",
    },
    {
      question: "Apakah konsultasi aman dan privat?",
      answer:
        "Ya, semua konsultasi dijamin aman dan privat. Data pribadi Anda dilindungi dengan enkripsi tingkat enterprise.",
    },
    {
      question: "Apakah hasil konsultasi dapat digunakan untuk klaim asuransi?",
      answer:
        "Ya, hasil konsultasi dapat digunakan untuk klaim asuransi kesehatan. Kami akan memberikan surat keterangan medis yang resmi.",
    },
    {
      question: "Berapa lama waktu tunggu konsultasi?",
      answer:
        "Waktu tunggu tergantung ketersediaan tenaga medis. Biasanya dapat dimulai dalam 15-30 menit setelah pemesanan.",
    },
  ];

  const appScreens = [
    {
      image: imgDaftarDokter,
      title: "Daftar Dokter",
      description: "60+ dokter profesional bersertifikat siap membantu Anda."
    },
    {
      image: imgKonsulDokter,
      title: "Konsultasi Dokter",
      description: "Chat langsung dengan dokter pilihan Anda."
    }
  ];

  const featureShowcases = [
    {
      image: imgKonsulMedis,
      title: "Konsultasi Medis Online",
      subtitle: "#Dokter Online",
      description: "Terhubung langsung dengan dokter spesialis yang tersedia tanpa perlu meninggalkan rumah. Fitur pencarian memudahkan Anda menemukan dokter yang sesuai dengan kebutuhan kesehatan Anda.",
      features: [
        "Akses daftar dokter profesional bersertifikat",
        "Status ketersediaan real-time dengan indikator online",
        "Pencarian dokter berdasarkan spesialisasi",
        "Profile lengkap tenaga medis"
      ],
      color: "from-red-500 to-red-600",
      highlight: "Respons cepat, privasi terjamin"
    },
    {
      image: imgHomecare,
      title: "Layanan Homecare",
      subtitle: "Informasi Kesehatan",
      description: "Tidak perlu keluar rumah untuk mendapatkan informasi kesehatan yang Anda butuhkan. Tim medis profesional siap memberikan edukasi kesehatan dan konsultasi langsung di rumah Anda.",
      features: [
        "Informasi kesehatan komprehensif dari ahli medis",
        "Edukasi tentang vaksinasi dan tindakan preventif",
        "Konsultasi ibu hamil dan posyandu",
        "Layanan kesehatan tanpa perlu keluar rumah"
      ],
      color: "from-blue-500 to-blue-600",
      highlight: "Layanan home-based, informasi terakurat"
    }
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
      <section className="bg-gradient-to-br from-[#1a2742] to-[#0f1924] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <span className="font-bold text-sm">LAYANAN KONSULTASI</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Konsultasi Kesehatan
            <br />
            Kapan Saja, Di Mana Saja
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Terhubung dengan tenaga medis profesional melalui berbagai metode
            konsultasi yang fleksibel dan terjangkau
          </p>
        </div>
      </section>

      {/* Feature Showcase Section - Konsultasi Medis & Homecare */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-6">
              <span className="font-bold text-sm">FITUR UNGGULAN</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Layanan Terintegrasi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Akses berbagai layanan kesehatan digital dalam satu aplikasi yang mudah digunakan
            </p>
          </div>

          {/* Showcase Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Feature Info */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#C41E3A]/20 to-[#E85D75]/20 rounded-full">
                <span className="text-[#C41E3A] font-bold text-sm">{featureShowcases[activeShowcase].subtitle}</span>
              </div>
              
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {featureShowcases[activeShowcase].title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {featureShowcases[activeShowcase].description}
              </p>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {featureShowcases[activeShowcase].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${featureShowcases[activeShowcase].color} flex items-center justify-center flex-shrink-0 mt-1`}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Highlight Box */}
              <div className={`bg-gradient-to-r ${featureShowcases[activeShowcase].color} rounded-2xl p-6 text-white mb-8`}>
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-6 h-6 flex-shrink-0" />
                  <p className="font-bold">{featureShowcases[activeShowcase].highlight}</p>
                </div>
              </div>

              {/* Toggle Buttons */}
              <div className="flex gap-4">
                {featureShowcases.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveShowcase(idx)}
                    className={`px-6 py-3 rounded-lg font-bold transition-all ${
                      idx === activeShowcase
                        ? 'bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white shadow-lg'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {featureShowcases[idx].title.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="flex justify-center">
              <PhoneMockup image={featureShowcases[activeShowcase].image} className="animate-float" />
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="mt-20 pt-20 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Keunggulan Masing-Masing Layanan
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Konsultasi Medis Card */}
              <div className="group bg-gradient-to-br from-red-50 to-white rounded-3xl p-8 border-2 border-red-200 hover:border-red-400 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-gray-900">Konsultasi Medis Online</h4>
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Antarmuka intuitif dengan daftar dokter lengkap</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Status ketersediaan real-time dokter</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Pencarian spesialisasi dokter yang dibutuhkan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Komunikasi langsung via chat konsultasi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700">Respon cepat dari tenaga medis profesional</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 bg-red-100/50 rounded-lg p-4 border-l-4 border-red-500">
                  <span className="font-bold text-red-700">Solusi Ideal Untuk:</span> Konsultasi keluhan kesehatan umum, second opinion, atau resep tindak lanjut tanpa harus berkunjung ke klinik.
                </p>
              </div>

              {/* Homecare Card */}
              <div className="group bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-gray-900">Homecare & Informasi</h4>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Edukasi kesehatan dari ahli medis bersertifikat</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Informasi vaksinasi dan tindakan preventif</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Layanan konsultasi ibu hamil dan posyandu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Tidak perlu keluar rumah untuk konsultasi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">Layanan home-based dengan tim profesional</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 bg-blue-100/50 rounded-lg p-4 border-l-4 border-blue-500">
                  <span className="font-bold text-blue-700">Solusi Ideal Untuk:</span> Edukasi kesehatan keluarga, konsultasi preventif, atau layanan kesehatan dasar tanpa perlu ke puskesmas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Section Dokter */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
            {/* Left Content */}
            <div className="py-8 lg:py-12">
              <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-6">
                <span className="font-bold text-sm">JARINGAN DOKTER PROFESIONAL</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                60+ Dokter Siap Membantu
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Kami bangga memiliki lebih dari 60 dokter berpengalaman dan bersertifikat profesional yang siap memberikan layanan kesehatan 
                terbaik untuk masyarakat Kabupaten Klaten. Setiap dokter telah melalui proses verifikasi ketat untuk memastikan kualitas dan kredibilitas layanan.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#C41E3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-bold text-gray-900 text-lg">Dokter Berpengalaman</h4>
                    <p className="text-gray-600 text-base">60+ dokter profesional bersertifikat</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#C41E3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-bold text-gray-900 text-lg">Berbagai Spesialisasi</h4>
                    <p className="text-gray-600 text-base">Dokter umum, spesialis, dan tenaga kesehatan</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#C41E3A] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div className="pt-0.5">
                    <h4 className="font-bold text-gray-900 text-lg">Siap Melayani 24/7</h4>
                    <p className="text-gray-600 text-base">Konsultasi kapan saja sesuai kebutuhan Anda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Phone Mockups */}
            <div className="relative">
              <PhoneMockup image={appScreens[activeScreen].image} className="animate-float" />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevScreen}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black backdrop-blur-sm hover:bg-gray/20 text-white p-3 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextScreen}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black backdrop-blur-sm hover:bg-gray/20 text-white p-3 rounded-full transition-all"
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
                        : 'w-2 bg-black'
                    }`}
                  />
                ))}
              </div>

              {/* Screen Description */}
              <div className="text-center mt-6 text-black">
                <h3 className="text-xl font-bold mb-2">{appScreens[activeScreen].title}</h3>
                <p className="text-black-300">{appScreens[activeScreen].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pertanyaan Umum
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#E85D75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Konsultasi?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Unduh aplikasi Matur Dokter sekarang dan mulai konsultasi dengan
            tenaga medis profesional  
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.maturdokter">
              <button className="bg-white text-[#C41E3A] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-xl">
                Download Android
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
