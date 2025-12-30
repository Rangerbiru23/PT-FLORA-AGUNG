import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Syarat & Ketentuan - PT FLORA AGUNG",
  description: "Syarat dan Ketentuan PT FLORA AGUNG mengatur penggunaan website, produk, dan layanan perdagangan besar minyak dan lemak nabati.",
  keywords: ["syarat dan ketentuan", "PT FLORA AGUNG", "perjanjian", "layanan", "peraturan"],
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Syarat & Ketentuan <span className="text-green-600">PT FLORA AGUNG</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat dan Ketentuan</h2>
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di website PT FLORA AGUNG. Syarat dan Ketentuan ini mengatur penggunaan website, 
                  produk, dan layanan yang kami sediakan. Dengan mengakses atau menggunakan website kami, 
                  Anda setuju untuk terikat oleh Syarat dan Ketentuan ini.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Informasi Perusahaan</h2>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="text-gray-700"><strong>Nama Perusahaan:</strong> PT FLORA AGUNG</p>
                  <p className="text-gray-700"><strong>Bidang Usaha:</strong> Perdagangan Besar Minyak dan Lemak Nabati</p>
                  <p className="text-gray-700"><strong>Alamat:</strong> JALAN TEBET TIMUR II NOMOR 31, Tebet Timur, Tebet, Jakarta Selatan, DKI Jakarta</p>
                  <p className="text-gray-700"><strong>Telepon:</strong> 0852-8570-3497</p>
                  <p className="text-gray-700"><strong>Email:</strong> info@ptfloraagung.com</p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Layanan Kami</h2>
                <p className="text-gray-600 mb-4">PT FLORA AGUNG menyediakan layanan meliputi:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Perdagangan besar minyak nabati (minyak kelapa sawit, minyak kedelai, minyak jagung, dll)</li>
                  <li>Perdagangan besar lemak nabati (lemak kelapa, lemak coklat, mentega nabati, dll)</li>
                  <li>Layanan distribusi dan logistik</li>
                  <li>Konsultasi teknis produk</li>
                  <li>Layanan purna jual dan dukungan pelanggan</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pemesanan dan Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Proses Pemesanan</h3>
                    <p className="text-gray-600">
                      Pemesanan dapat dilakukan melalui website, telepon, email, atau langsung di kantor kami. 
                      Setiap pemesanan akan dikonfirmasi melalui email atau telepon.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 Syarat Pembayaran</h3>
                    <p className="text-gray-600">
                      Pembayaran dapat dilakukan melalui transfer bank atau metode pembayaran lain yang disepakati. 
                      Syarat pembayaran akan disesuaikan dengan kesepakatan kontrak atau ketentuan yang berlaku.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4.3 Harga</h3>
                    <p className="text-gray-600">
                      Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. 
                      Harga yang berlaku adalah harga pada saat pemesanan dikonfirmasi.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pengiriman dan Pengiriman</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">5.1 Waktu Pengiriman</h3>
                    <p className="text-gray-600">
                      Waktu pengiriman akan disesuaikan dengan ketersediaan stok dan lokasi pengiriman. 
                      Kami akan memberikan estimasi waktu pengiriman pada saat konfirmasi pesanan.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">5.2 Biaya Pengiriman</h3>
                    <p className="text-gray-600">
                      Biaya pengiriman akan ditanggung oleh pembeli kecuali ada kesepakatan lain yang disepakati secara tertulis.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">5.3 Resiko Pengiriman</h3>
                    <p className="text-gray-600">
                      Resiko kehilangan atau kerusakan barang selama pengiriman menjadi tanggung jawab pembeli 
                      setelah barang diserahkan kepada pihak pengangkut.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kualitas Produk dan Garansi</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1 Standar Kualitas</h3>
                    <p className="text-gray-600">
                      Kami berkomitmen untuk menyediakan produk yang memenuhi standar kualitas yang telah ditetapkan 
                      dan sesuai dengan spesifikasi yang disepakati.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">6.2 Klaim Produk</h3>
                    <p className="text-gray-600">
                      Setiap klaim terkait kualitas produk harus diajukan dalam waktu 7 hari sejak tanggal penerimaan barang 
                      dengan disertai bukti yang mendukung.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kebijakan Pengembalian</h2>
                <p className="text-gray-600 mb-4">
                  Pengembalian produk hanya dapat dilakukan dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Produk rusak saat diterima</li>
                  <li>Produk tidak sesuai dengan spesifikasi yang disepakati</li>
                  <li>Produk cacat produksi</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Pengembalian harus disetujui terlebih dahulu oleh manajemen kami dan akan diproses sesuai dengan prosedur yang berlaku.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hak Kekayaan Intelektual</h2>
                <p className="text-gray-600 leading-relaxed">
                  Semua konten di website ini termasuk tetapi tidak terbatas pada teks, gambar, logo, dan desain 
                  dilindungi oleh hak cekayaan intelektual milik PT FLORA AGUNG. Tidak ada bagian dari website ini 
                  yang boleh direproduksi tanpa izin tertulis dari kami.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Pembatasan Tanggung Jawab</h2>
                <p className="text-gray-600 leading-relaxed">
                  PT FLORA AGUNG tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul 
                  dari penggunaan website kami atau produk yang kami sediakan, sejauh diizinkan oleh hukum yang berlaku.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Force Majeure</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kami tidak bertanggung jawab atas keterlambatan atau kegagalan pemenuhan kewajiban yang disebabkan 
                  oleh kejadian di luar kendali kami (force majeure), termasuk tetapi tidak terbatas pada bencana alam, 
                  perang, pemogokan, atau gangguan pasokan.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privasi Data</h2>
                <p className="text-gray-600 leading-relaxed">
                  Perlindungan data pribadi Anda adalah prioritas kami. Penggunaan data pribadi diatur dalam 
                  Kebijakan Privasi kami yang dapat Anda akses melalui link yang tersedia di website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Hukum yang Berlaku</h2>
                <p className="text-gray-600 leading-relaxed">
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                  Setiap sengketa akan diselesaikan melalui musyawarah untuk mufakat, dan jika tidak tercapai kesepakatan, 
                  akan diselesaikan melalui pengadilan yang berwenang di Jakarta.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Perubahan Syarat dan Ketentuan</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kami berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif 
                  sejak dipublikasikan di website. Penggunaan website yang berkelanjutan merupakan penerimaan 
                  terhadap perubahan tersebut.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Kontak Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <p className="text-gray-700"><strong>PT FLORA AGUNG</strong></p>
                  <p className="text-gray-600">JALAN TEBET TIMUR II NOMOR 31</p>
                  <p className="text-gray-600">Tebet Timur, Tebet, Jakarta Selatan</p>
                  <p className="text-gray-600">DKI Jakarta</p>
                  <p className="text-gray-600">Email: legal@ptfloraagung.com</p>
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