export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Logo LPM Kabupaten Badung"
                className="h-10 object-contain rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">LPM KABUPATEN BADUNG</h3>
            <p className="text-gray-400 mb-4">
              Lembaga Pemberdayaan Masyarakat yang berkomitmen untuk memajukan
              kesejahteraan masyarakat Badung.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Pengaduan</h4>
            <div className="space-y-2 text-gray-400">
              {/* <p>📍 Jl. Raya Mengwi, Badung, Bali</p> */}
              <p>
                📞 WhatsApp:{" "}
                <a className="underline" href="https://wa.me/6283141748248">
                  +62 831-4174-8248
                </a>
              </p>
              {/* <p>✉️ info@lpmbadung.go.id</p> */}
            </div>
          </div>
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
            <div className="space-y-2 text-gray-400">
              <p>Senin - Jumat: 08:00 - 16:00</p>
              <p>Sabtu: 08:00 - 12:00</p>
              <p>Minggu: Tutup</p>
            </div>
          </div> */}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} LPM Kabupaten Badung. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
