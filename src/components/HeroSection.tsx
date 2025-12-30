import { ArrowRight, CheckCircle, TrendingUp, Shield, Truck, Users } from 'lucide-react';

export default function HeroSection() {
  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Kualitas Terjamin",
      description: "Produk minyak dan lemak nabati berkualitas tinggi"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Pengiriman Tepat Waktu",
      description: "Logistik terpercaya untuk pengiriman tepat waktu"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bergaransi",
      description: "Jaminan kepuasan pelanggan"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/hero-banner.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              <span className="text-sm font-medium">Trusted Since 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">PT FLORA AGUNG</span>
              <br />
              Perdagangan Besar Minyak dan Lemak Nabati
            </h1>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Perusahaan terpercaya dalam penyediaan minyak dan lemak nabati berkualitas tinggi. 
              Kami berkomitmen untuk memberikan produk terbaik dengan layanan profesional untuk 
              memenuhi kebutuhan industri Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-green-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg"
              >
                Hubungi Kami
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all border border-white/30"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-green-100 text-sm">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-green-100 text-sm">Produk Variasi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-green-100 text-sm">Layanan Support</div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-green-900 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-green-100">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}