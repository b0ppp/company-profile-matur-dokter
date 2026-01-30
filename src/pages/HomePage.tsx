import {
  Phone,
  Building2,
  Heart,
  Stethoscope,
  Pill,
  AlertCircle,
  MapPin,
  Clock,
  Users,
  Activity,
  ArrowRight,
  CheckCircle,
  Smartphone,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { PhoneMockup } from "../components/common/PhoneMockup";

// Import app screenshots - NEW BERANDA
import imgBeranda from "@/assets/homePage.jpeg";
import imgTeleponDarurat from "@/assets/sosPage.jpeg";

export default function HomePage() {
  const calls = [{ number: "1", label: "Call Center" }];

  const stats = [
    // { number: "1", label: "Call Center" },
    { number: "34", label: "Puskesmas" },
    { number: "13", label: "Rumah Sakit" },
    // { number: "100%", label: "Integrasi Sistem Digital" }
  ];

  const services = [
    {
      icon: AlertCircle,
      title: "SOS Darurat",
      desc: "Panggilan darurat cepat 24/7",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Phone,
      title: "Call 119",
      desc: "Emergency medis nasional",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Building2,
      title: "Info Rumah Sakit",
      desc: "Data lengkap RS di Klaten",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Stethoscope,
      title: "Info Puskesmas",
      desc: "Lokasi & jadwal puskesmas",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Pill,
      title: "Info Apotek",
      desc: "Apotek terdekat & stok obat",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Heart,
      title: "Stok Darah PMI",
      desc: "Ketersediaan donor darah",
      color: "from-red-600 to-red-700",
    },
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#C41E3A] via-[#E85D75] to-[#C41E3A] overflow-hidden">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-white font-semibold text-sm">
                  Dinas Kesehatan Kabupaten Klaten
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Matur Dokter
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-4 font-semibold">
                Layanan Kesehatan Terpadu Kabupaten Klaten
              </p>

              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Platform digital yang menghubungkan masyarakat dengan seluruh
                fasilitas kesehatan di Kabupaten Klaten. Akses informasi
                kesehatan, panggilan darurat, dan konsultasi medis dalam satu
                aplikasi.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="tel:119"
                  className="inline-flex items-center space-x-2 bg-white text-[#C41E3A] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  <span>Telepon Darurat</span>
                </a>
                <Link
                  to="/features"
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#C41E3A] transition-all font-bold text-lg"
                >
                  <span>Lihat Fitur</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl">
                <p className="text-white/90 text-lg font-bold">2026</p>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="grid grid-cols-1 gap-4">
              {calls.map((call, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {call.number}
                  </div>
                  <div className="text-white/90 font-medium">{call.label}</div>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform"
                  >
                    <div className="text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white/90 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-4">
              <span className="font-bold text-sm">FITUR UNGGULAN</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Layanan Kesehatan Lengkap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              9 fitur utama yang memudahkan akses kesehatan untuk seluruh
              masyarakat Klaten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#C41E3A] hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              to="/features"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg"
            >
              <span>Lihat Semua Fitur</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-6">
                <span className="font-bold text-sm">APLIKASI MOBILE</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Kesehatan di Genggaman Anda
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Download aplikasi Matur Dokter untuk akses cepat ke seluruh
                layanan kesehatan di Kabupaten Klaten. Interface yang modern dan
                mudah digunakan untuk semua kalangan.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Akses Cepat</h4>
                    <p className="text-gray-600 text-sm">
                      SOS Darurat dalam 1 sentuhan
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Navigasi GPS</h4>
                    <p className="text-gray-600 text-sm">
                      Temukan faskes terdekat
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">24/7 Siaga</h4>
                    <p className="text-gray-600 text-sm">
                      Layanan darurat nonstop
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/download"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download Aplikasi</span>
              </Link>
            </div>

            {/* Right - Phone Mockups */}
            <div className="relative">
              {/* ===== MOBILE ONLY ===== */}
              <div className="md:hidden flex justify-center py-24">
                <div className="relative">
                  {/* Phone */}
                  <div className="transform -rotate-6 scale-90">
                    <PhoneMockup image={imgTeleponDarurat} />
                  </div>

                  {/* Download Badge */}
                  <div
                    className="absolute -top-4 -left-4 bg-gradient-to-r 
                                  from-[#C41E3A] to-[#E85D75] text-white px-6 
                                  py-2 rounded-2xl shadow-xl font-bold"
                  >
                    500+ Downloads
                  </div>

                  {/* Rating Badge */}
                  <div
                    className="absolute -bottom-4 -right-4 bg-gradient-to-r 
                                  from-green-500 to-green-600 text-white px-6 py-2 
                                  rounded-2xl shadow-xl font-bold"
                  >
                    ⭐ 4.8 Rating
                  </div>
                </div>
              </div>

              {/* ===== DESKTOP & TABLET ===== */}
              <div className="hidden md:flex justify-center space-x-1">
                <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-300 px-5">
                  <PhoneMockup image={imgTeleponDarurat} />
                </div>

                <div className="transform rotate-6 hover:rotate-0 transition-transform duration-300 mt-12">
                  <PhoneMockup image={imgBeranda} />
                </div>

                {/* Floating Elements */}
                <div
                  className="absolute -top-4 -left-4 bg-gradient-to-r 
                                from-[#C41E3A] to-[#E85D75] text-white px-6 py-3 
                                rounded-2xl shadow-xl font-bold"
                >
                  <Smartphone className="w-6 h-6 inline mr-2" />
                  500+ Downloads
                </div>

                <div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r 
                                from-green-500 to-green-600 text-white px-6 py-3 
                                rounded-2xl shadow-xl font-bold"
                >
                  ⭐ 4.8 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
