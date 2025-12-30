import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Kebijakan Privasi - PT FLORA AGUNG",
  description: "Kebijakan Privasi PT FLORA AGUNG mengatur bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai dengan peraturan yang berlaku.",
  keywords: ["kebijakan privasi", "PT FLORA AGUNG", "data pribadi", "perlindungan data", "privasi"],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Kebijakan Privasi <span className="text-green-600">PT FLORA AGUNG</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed">
                  PT FLORA AGUNG ("kami", "perusahaan") berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda 
                  ketika Anda menggunakan layanan kami, mengunjungi website kami, atau berinteraksi dengan kami.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Informasi Pribadi</h3>
                    <p className="text-gray-600">Kami dapat mengumpulkan informasi pribadi seperti:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat perusahaan atau alamat pengiriman</li>
                      <li>Informasi perusahaan (jabatan, nama perusahaan, dll)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Informasi Non-Pribadi</h3>
                    <p className="text-gray-600">Kami juga mengumpulkan informasi non-pribadi seperti:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                      <li>Data penggunaan website</li>
                      <li>Informasi browser dan perangkat</li>
                      <li>Alamat IP</li>
                      <li>Cookie dan teknologi pelacakan lainnya</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Cara Kami Menggunakan Informasi Anda</h2>
                <p className="text-gray-600 mb-4">Kami menggunakan informasi yang kami kumpulkan untuk:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Menyediakan produk dan layanan yang Anda minta</li>
                  <li>Memproses pesanan dan transaksi</li>
                  <li>Memberikan dukungan pelanggan</li>
                  <li>Mengirimkan informasi produk dan penawaran khusus</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                  <li>Mencegah aktivitas penipuan dan keamanan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pembagian Informasi</h2>
                <p className="text-gray-600 mb-4">Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga, kecuali:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Dengan persetujuan Anda yang jelas</li>
                  <li>Kepada mitra bisnis tepercaya yang membantu kami menyediakan layanan</li>
                  <li>Untuk memenuhi persyaratan hukum atau peraturan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                  <li>Dalam konteks transaksi bisnis (seperti merger atau akuisisi)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Keamanan Data</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kami menerapkan langkah-langkah keamanan yang wajar dan sesuai untuk melindungi informasi pribadi Anda dari akses, 
                  penggunaan, atau pembagian yang tidak sah. Langkah-langkah ini termasuk enkripsi data, firewall, dan akses terbatas 
                  ke informasi pribadi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hak Anda</h2>
                <p className="text-gray-600 mb-4">Anda memiliki hak untuk:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dalam batas yang diizinkan oleh hukum)</li>
                  <li>Menolak atau membatasi pemrosesan data Anda</li>
                  <li>Meminta portabilitas data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookie</h2>
                <p className="text-gray-600 leading-relaxed">
                  Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Cookie adalah file teks kecil yang disimpan 
                  di browser Anda. Anda dapat mengatur browser Anda untuk menolak cookie, namun ini dapat mempengaruhi fungsionalitas website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Link ke Pihak Ketiga</h2>
                <p className="text-gray-600 leading-relaxed">
                  Website kami mungkin mengandung link ke website pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi 
                  dari website pihak ketiga tersebut. Kami mendorong Anda untuk membaca kebijakan privasi dari setiap website yang Anda kunjungi.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Perubahan Kebijakan Privasi</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diposting di halaman ini dengan 
                  tanggal "Terakhir diperbarui" yang diperbarui. Kami mendorong Anda untuk secara berkala meninjau kebijakan ini.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Kontak Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik privasi kami, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="text-gray-700"><strong>PT FLORA AGUNG</strong></p>
                  <p className="text-gray-600">JALAN TEBET TIMUR II NOMOR 31</p>
                  <p className="text-gray-600">Tebet Timur, Tebet, Jakarta Selatan</p>
                  <p className="text-gray-600">DKI Jakarta</p>
                  <p className="text-gray-600">Email: privacy@ptfloraagung.com</p>
                  <p className="text-gray-600">Telepon: 0852-8570-3497</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}