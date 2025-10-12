export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lembaga Pemberdayaan Masyarakat
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8">
            Kabupaten Badung
          </h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Membangun masyarakat yang mandiri, sejahtera, dan berpartisipasi
            aktif dalam pembangunan daerah
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
}
