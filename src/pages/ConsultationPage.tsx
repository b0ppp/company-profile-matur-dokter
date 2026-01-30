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
      description: "Sebagian dari dokter yang terdaftar di Matur Dokter."
    },
    {
      image: imgKonsulDokter,
      title: "Konsultasi Dokter",
      description: "Menu chat untuk konsultasi keluhan."
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

      {/*Section Dokter */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-6">
                <span className="font-bold text-sm">Fitur Konsultasi</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Konsultasi Dokter
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
