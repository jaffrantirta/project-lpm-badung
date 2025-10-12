export default function HistorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sejarah LPM Badung
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Lembaga Pemberdayaan Masyarakat (LPM) Kabupaten Badung didirikan
              pada tahun 2001 sebagai bagian dari reformasi birokrasi
              pemerintahan daerah. Pembentukan LPM ini dilatarbelakangi oleh
              kebutuhan akan lembaga yang khusus menangani pemberdayaan
              masyarakat di tingkat kabupaten.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Sejak awal berdirinya, LPM Badung telah berkomitmen untuk menjadi
              jembatan antara pemerintah dan masyarakat dalam mewujudkan
              pembangunan yang berkelanjutan dan inklusif.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan pengalaman lebih dari dua dekade, LPM Badung terus
              berkembang dan beradaptasi dengan kebutuhan zaman untuk memberikan
              pelayanan terbaik kepada masyarakat.
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                23+ Tahun
              </h3>
              <p className="text-gray-600">
                Pengalaman melayani masyarakat Badung
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
