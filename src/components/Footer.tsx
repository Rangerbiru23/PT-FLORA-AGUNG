import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Leaf, Droplet } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-900 to-green-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">PT FLORA AGUNG</h3>
                <p className="text-green-200 text-sm">Perdagangan Besar Minyak dan Lemak Nabati</p>
              </div>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              Perusahaan terpercaya dalam perdagangan besar minyak dan lemak nabati. 
              Kami menyediakan produk berkualitas tinggi dengan layanan terbaik untuk 
              memenuhi kebutuhan industri Anda.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-green-100 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#about" className="text-green-100 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="text-green-100 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#contact" className="text-green-100 hover:text-white transition-colors">Kontak</a></li>
              <li><a href="/privacy" className="text-green-100 hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="/terms" className="text-green-100 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-100">JALAN TEBET TIMUR II NOMOR 31</p>
                  <p className="text-green-100">Tebet Timur, Tebet, Jakarta Selatan</p>
                  <p className="text-green-100">DKI Jakarta</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300 flex-shrink-0" />
                <a href="tel:085285703497" className="text-green-100 hover:text-white transition-colors">
                  0852-8570-3497
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300 flex-shrink-0" />
                <a href="mailto:info@ptfloraagung.com" className="text-green-100 hover:text-white transition-colors">
                  info@ptfloraagung.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">
              © 2024 PT FLORA AGUNG. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-green-200 hover:text-white text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="/terms" className="text-green-200 hover:text-white text-sm transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}