import { Award, Users, Globe, HeartHandshake, Target, Lightbulb } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Kualitas Unggul",
      description: "Kami hanya menyediakan produk minyak dan lemak nabati dengan kualitas terbaik yang melewati standar industri."
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Integritas",
      description: "Berbisnis dengan jujur, transparan, dan bertanggung jawab dalam setiap transaksi."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pelanggan Prioritas",
      description: "Kepuasan pelanggan adalah fokus utama kami dalam setiap layanan yang diberikan."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Komitmen",
      description: "Dedikasi penuh untuk memberikan solusi terbaik bagi kebutuhan bisnis Anda."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovasi",
      description: "Terus mengembangkan produk dan layanan yang lebih baik untuk masa depan."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Berkelanjutan",
      description: "Mendukung praktik bisnis yang ramah lingkungan dan berkelanjutan."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tentang <span className="text-green-600">PT FLORA AGUNG</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perusahaan terpercaya dalam perdagangan besar minyak dan lemak nabati yang telah 
            melayani berbagai industri dengan komitmen terhadap kualitas dan kepuasan pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Perdagangan Besar Minyak dan Lemak Nabati Terpercaya
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  PT FLORA AGUNG adalah perusahaan yang bergerak di bidang perdagangan besar minyak 
                  dan lemak nabati. Dengan lokasi strategis di Jakarta Selatan, kami siap melayani 
                  kebutuhan berbagai industri di seluruh Indonesia.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Kami menyediakan berbagai jenis produk minyak dan lemak nabati berkualitas tinggi 
                  yang digunakan dalam industri makanan, kosmetik, farmasi, dan berbagai aplikasi 
                  industri lainnya.
                </p>
              </div>

              {/* Company Info */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-lg font-semibold text-green-900 mb-4">Informasi Perusahaan</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-32">Nama Perusahaan:</span>
                    <span className="text-gray-900 font-semibold">PT FLORA AGUNG</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-32">Bidang Usaha:</span>
                    <span className="text-gray-900">Perdagangan Besar Minyak dan Lemak Nabati</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-32">Alamat:</span>
                    <span className="text-gray-900">Jl. Tebet Timur II No. 31, Tebet, Jakarta Selatan</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-gray-700 w-32">Telepon:</span>
                    <span className="text-gray-900">0852-8570-3497</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/about-image.jpg" 
                alt="PT FLORA AGUNG Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-green-600 text-white rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold">2024</div>
              <div className="text-sm">Tahun Berdiri</div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nilai-Nilai Perusahaan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}