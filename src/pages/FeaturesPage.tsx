import { 
  AlertCircle, 
  Phone, 
  Building2, 
  Home, 
  Stethoscope, 
  Pill, 
  Droplets, 
  FileText,
  MessageSquare,
  Smartphone,
  Clock,
  MapPin,
  CheckCircle,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { PhoneMockup } from '../components/common/PhoneMockup';

// Import app screenshot - NEW BERANDA
import imgBerita from "@/assets/layananPage.jpeg";

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: AlertCircle,
      title: "SOS Darurat",
      description: "Tombol darurat untuk akses cepat ke layanan kesehatan mendesak. Satu sentuhan langsung terhubung dengan layanan emergency terdekat 24/7.",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-white",
      highlight: true
    },
    {
      icon: Phone,
      title: "Emergency Call 119",
      description: "Panggilan langsung ke nomor darurat kesehatan nasional 24/7. Respons cepat untuk kondisi medis yang membutuhkan penanganan segera.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-white",
      highlight: true
    },
    {
      icon: Building2,
      title: "Info Rumah Sakit",
      description: "Direktori lengkap rumah sakit di Klaten dengan informasi lokasi, layanan unggulan, dokter spesialis, dan nomor kontak.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-white"
    },
    {
      icon: Home,
      title: "Info Puskesmas",
      description: "Daftar lengkap puskesmas terdekat dengan jam operasional, fasilitas kesehatan dasar, program imunisasi.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-white"
    },
    {
      icon: Stethoscope,
      title: "Info Klinik",
      description: "Informasi klinik kesehatan swasta dan pemerintah di seluruh wilayah Kabupaten Klaten dengan spesialisasi layanan.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-white"
    },
    {
      icon: Pill,
      title: "Info Apotek",
      description: "Lokasi apotek terdekat dengan informasi ketersediaan obat, jam buka, layanan 24 jam, dan sistem antar obat.",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-white"
    },
    {
      icon: Droplets,
      title: "Stok Darah PMI",
      description: "Informasi real-time ketersediaan stok darah di PMI Klaten. Cek golongan darah yang dibutuhkan dan jadwal donor.",
      color: "from-red-600 to-red-700",
      bgColor: "from-red-50 to-white"
    },
    {
      icon: FileText,
      title: "Artikel Kesehatan",
      description: "Tips kesehatan, artikel medis terpercaya, info penyakit, panduan pencegahan dari tenaga medis profesional.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-white"
    },
    {
      icon: MessageSquare,
      title: "Konsultasi Medis",
      description: "Layanan konsultasi online dengan dokter dan tenaga kesehatan profesional. Tanya jawab seputar keluhan kesehatan.",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-white"
    }
  ];

  const additionalFeatures = [
    { icon: MapPin, title: "Navigasi Lokasi", desc: "Petunjuk arah ke fasilitas kesehatan" },
    { icon: Clock, title: "Jam Operasional", desc: "Jadwal buka tutup setiap fasilitas" },
    { icon: Smartphone, title: "Notifikasi Push", desc: "Pengingat kesehatan langsung ke ponsel" }
  ];

  const steps = [
    { number: "1", title: "Download Aplikasi", desc: "Unduh Matur Dokter dari Play Store atau App Store" },
    { number: "2", title: "Registrasi Akun", desc: "Buat akun dengan data diri yang valid" },
    { number: "3", title: "Pilih Layanan", desc: "Akses fitur yang Anda butuhkan" },
    { number: "4", title: "Nikmati Layanan", desc: "Dapatkan layanan kesehatan terpadu" }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2742] to-[#0f1924] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <span className="font-bold text-sm">FITUR LAYANAN</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            9 Fitur Layanan Kesehatan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Semua yang Anda butuhkan untuk akses kesehatan dalam satu aplikasi. Dirancang untuk kemudahan dan kecepatan layanan.
          </p>
        </div>
      </section>

      {/* Emergency Features */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-4">
              <span className="font-bold text-sm">FITUR DARURAT</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Akses Cepat untuk Kondisi Mendesak
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Respons cepat untuk keadaan darurat medis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {mainFeatures.filter(f => f.highlight).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-[#C41E3A] to-[#E85D75] rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* All Features Grid */}
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fitur Lengkap Lainnya
            </h3>
            <p className="text-lg text-gray-600">
              Informasi fasilitas kesehatan di seluruh Kabupaten Klaten
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.filter(f => !f.highlight).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${feature.bgColor} border-2 border-gray-100 rounded-2xl p-8 hover:border-[#C41E3A] hover:shadow-xl transition-all transform hover:-translate-y-2 group`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Fitur Pendukung
            </h3>
            <p className="text-lg text-gray-600">
              Kemudahan tambahan untuk pengalaman terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-xl p-8 hover:border-[#C41E3A] hover:shadow-lg transition-all text-center group"
                >
                  <div className="w-16 h-16 bg-[#C41E3A]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-[#C41E3A] group-hover:to-[#E85D75] transition-all">
                    <Icon className="w-8 h-8 text-[#C41E3A] group-hover:text-white transition-all" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-4">
              <span className="font-bold text-sm">CARA MENGGUNAKAN</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Mudah, Cepat, dan Efisien
            </h2>
            <p className="text-xl text-gray-600">
              4 langkah sederhana untuk menggunakan Matur Dokter
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-xl">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#E85D75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Siap Menggunakan Semua Fitur?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Download aplikasi Matur Dokter sekarang dan nikmati kemudahan akses layanan kesehatan
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#C41E3A] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all font-bold text-lg shadow-xl">
              Download Android
            </button>
            <button className="bg-[#1a2742] text-white px-10 py-5 rounded-xl hover:bg-[#0f1924] transition-all font-bold text-lg shadow-xl">
              Download iOS
            </button>
          </div>
        </div>
      </section>

      {/* App Screenshot */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tampilan Aplikasi
            </h3>
            <p className="text-lg text-gray-600">
              Lihat bagaimana aplikasi Matur Dokter terlihat dan bekerja
            </p>
          </div>

          <div className="flex justify-center">
            <PhoneMockup image={imgBerita} />
          </div>
        </div>
      </section>
    </div>
  );
}