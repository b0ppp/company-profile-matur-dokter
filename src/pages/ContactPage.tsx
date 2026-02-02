import { Mail, MessageCircle, MapPin, Phone, Clock, Facebook, Instagram, Twitter, Youtube, Send, X } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim. Tim kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      info: "0822 60000 910",
      link: "tel:082260000910",
      color: "from-[#C41E3A] to-[#E85D75]"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "0822 60000 910",
      link: "https://wa.me/6282260000910",
      color: "from-green-500 to-green-600"
    },
    // {
    //   icon: Mail,
    //   title: "Email",
    //   info: "dinas.kesehatan@klaten.go.id",
    //   link: "mailto:dinas.kesehatan@klaten.go.id",
    //   color: "from-blue-500 to-blue-600"
    // },
    {
      icon: MapPin,
      title: "Alamat",
      info: "Jl. Pemuda Nomor No.313, Klaten, Jawa Tengah 57412",
      link: "https://www.google.com/maps/place/Kantor+Dinas+Kesehatan+Kab.+Klaten/@-7.7139131,110.5918125,20.72z/data=!4m6!3m5!1s0x2e7a4409ac90a0e1:0xc0d28ab61f24fe49!8m2!3d-7.7138959!4d110.5917606!16s%2Fg%2F1pztfdls1?entry=ttu&g_ep=EgoyMDI2MDEyNi4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const faqItems = [
    {
      question: "Bagaimana cara menggunakan aplikasi Matur Dokter?",
      answer: "Download aplikasi dari Play Store, lakukan registrasi dengan data diri yang valid, dan Anda bisa langsung mengakses semua fitur layanan kesehatan."
    },
    {
      question: "Apakah aplikasi ini gratis?",
      answer: "Ya, aplikasi Matur Dokter dapat diunduh dan digunakan secara gratis oleh seluruh masyarakat Kabupaten Klaten."
    },
    {
      question: "Bagaimana cara menghubungi layanan darurat?",
      answer: "Anda dapat menggunakan tombol SOS Darurat di aplikasi atau langsung menghubungi nomor darurat yang terhubung langsung dengan Matur Dokter 24 jam."
    },
    {
      question: "Apakah data pribadi saya aman?",
      answer: "Ya, kami menggunakan sistem keamanan tingkat tinggi untuk melindungi data pribadi pengguna sesuai dengan standar keamanan nasional."
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2742] to-[#0f1924] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <span className="font-bold text-sm">HUBUNGI KAMI</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Butuh Bantuan atau Informasi?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tim kami siap membantu Anda. Jangan ragu untuk menghubungi kami melalui berbagai saluran komunikasi yang tersedia.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#C41E3A] group text-center transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-500 mb-2 font-semibold">{contact.title}</div>
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      className="font-bold text-gray-900 hover:text-[#C41E3A] transition block"
                    >
                      {contact.info}
                    </a>
                  ) : (
                    <div className="font-bold text-gray-900">
                      {contact.info}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl p-10 border-2 border-gray-100 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Kirim Pesan
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C41E3A] focus:outline-none transition text-gray-900"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C41E3A] focus:outline-none transition text-gray-900"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C41E3A] focus:outline-none transition text-gray-900"
                      placeholder="08xx xxxx xxxx"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C41E3A] focus:outline-none transition text-gray-900"
                      placeholder="Perihal pesan"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#C41E3A] focus:outline-none transition resize-none text-gray-900"
                      placeholder="Tuliskan pesan Anda..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C41E3A] to-[#E85D75] text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all font-bold text-lg flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Kirim Pesan</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Info & Map */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="bg-gradient-to-br from-[#1a2742] to-[#0f1924] rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-start space-x-4 mb-6">
                  <Clock className="w-8 h-8 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Jam Operasional</h3>
                    <div className="space-y-3">
                      {/* <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-white/80">Senin - Kamis:</span>
                        <span className="font-bold">08.00 - 14.00 WIB</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-white/80">Jumat:</span>
                        <span className="font-bold">08.00 - 11.00 WIB</span>
                      </div> */}
                      <div className="flex justify-between items-center pt-3">
                        <span className="text-white/80">PSC 119 Matur Dokter :</span>
                        <span className="font-bold bg-gradient-to-r from-[#C41E3A] to-[#E85D75] px-4 py-2 rounded-lg">24 Jam</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
                <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 relative flex items-center justify-center">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-[#C41E3A] mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Dinas Kesehatan Kabupaten Klaten
                    </h3>
                    <p className="text-gray-600">
                      Jl. Pemuda Nomor No.313, Mlinjon, Tonggalan,<br />
                      Kec. Klaten Tengah, Kabupaten Klaten, Jawa Tengah 57412
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Ikuti Media Sosial Kami</h3>
                <div className="flex space-x-4 mb-6">
                  <a 
                    href="https://www.facebook.com/maturdokterklaten"
                    className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Facebook className="w-7 h-7 text-white" />
                  </a>
                  <a 
                    href="https://www.instagram.com/maturdokter_kabklaten?igsh=MThkZnYwbTgybGprYg=="
                    className="w-14 h-14 bg-pink-600 rounded-xl flex items-center justify-center hover:bg-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Instagram className="w-7 h-7 text-white" />
                  </a>
                  <a 
                    href="https://x.com/MaturdokterK"
                    className="w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center hover:bg-blue-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <X className="w-7 h-7 text-white" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@dinaskesehatan2581"
                    className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center hover:bg-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <Youtube className="w-7 h-7 text-white" />
                  </a>
                </div>
                <p className="text-gray-600">
                  Dapatkan informasi kesehatan terbaru dan update layanan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-20 bg-gradient-to-r from-[#C41E3A] to-[#E85D75]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Phone className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Darurat Medis?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Jangan ragu untuk segera menghubungi layanan darurat kesehatan. Tim kami siap membantu 24/7.
          </p>
          <a 
            href="tel:119"
            className="inline-flex items-center space-x-3 bg-white text-[#C41E3A] px-12 py-6 rounded-xl hover:bg-gray-100 transition-all font-bold text-2xl shadow-2xl transform hover:-translate-y-1"
          >
            <Phone className="w-8 h-8" />
            <span>Hubungi 119</span>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#C41E3A]/10 text-[#C41E3A] px-4 py-2 rounded-full mb-4">
              <span className="font-bold text-sm">FAQ</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Temukan jawaban untuk pertanyaan umum
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border-2 border-gray-100 hover:border-[#C41E3A] hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
