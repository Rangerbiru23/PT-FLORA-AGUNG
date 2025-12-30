import { Droplet, Package, Truck, Shield, Recycle, Award, ChevronRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Minyak Nabati",
      description: "Berbagai jenis minyak nabati berkualitas tinggi untuk industri makanan, kosmetik, dan farmasi.",
      features: ["Minyak Kelapa Sawit", "Minyak Kedelai", "Minyak Jagung", "Minyak Bunga Matahari"]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Lemak Nabati",
      description: "Supplier lemak nabati murni dengan spesifikasi sesuai kebutuhan industri Anda.",
      features: ["Lemak Kelapa", "Lemak Coklat", "Mentega Nabati", "Shortening"]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Distribusi Logistik",
      description: "Jasa distribusi dan pengiriman produk ke seluruh Indonesia dengan sistem yang terpercaya.",
      features: ["Pengiriman Tepat Waktu", "Armada Terpercaya", "Tracking Real-time", "Asuransi Pengiriman"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Kontrol Kualitas",
      description: "Sistem kontrol kualitas ketat untuk memastikan produk memenuhi standar tertinggi.",
      features: ["Sertifikasi Halal", "Uji Laboratorium", "Traceability", "Quality Assurance"]
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Produk Berkelanjutan",
      description: "Menyediakan produk-produk yang ramah lingkungan dan berkelanjutan.",
      features: ["Sertifikasi RSPO", "Produk Organik", "Ramah Lingkungan", "Carbon Neutral"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Konsultasi Teknis",
      description: "Layanan konsultasi teknis untuk membantu memilih produk yang tepat untuk kebutuhan Anda.",
      features: ["Expert Consultation", "Product Customization", "Technical Support", "R&D Collaboration"]
    }
  ];

  const industries = [
    { name: "Industri Makanan & Minuman", percentage: 35 },
    { name: "Industri Kosmetik", percentage: 25 },
    { name: "Industri Farmasi", percentage: 20 },
    { name: "Industri Kimia", percentage: 15 },
    { name: "Lainnya", percentage: 5 }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Layanan <span className="text-green-600">Unggulan Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            PT FLORA AGUNG menyediakan berbagai layanan komprehensif dalam perdagangan 
            minyak dan lemak nabati untuk memenuhi kebutuhan industri Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:border-green-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group">
                Pelajari Lebih Lanjut
                <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Industry Focus */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Fokus Industri
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Kami melayani berbagai sektor industri dengan produk-produk berkualitas tinggi 
                yang disesuaikan dengan kebutuhan spesifik setiap industri.
              </p>
              
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700 font-medium">{industry.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${industry.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 font-medium w-12 text-right">
                        {industry.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Mengapa Memilih PT FLORA AGUNG?
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Kualitas Terjamin</h5>
                    <p className="text-gray-600 text-sm">Produk dengan standar kualitas internasional</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Harga Kompetitif</h5>
                    <p className="text-gray-600 text-sm">Penawaran harga yang bersaing di pasar</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Pengiriman Tepat Waktu</h5>
                    <p className="text-gray-600 text-sm">Logistik terpercaya untuk pengiriman tepat waktu</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Layanan Pelanggan</h5>
                    <p className="text-gray-600 text-sm">Support 24/7 untuk semua kebutuhan Anda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}