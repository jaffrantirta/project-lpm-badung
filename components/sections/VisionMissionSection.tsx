export default function VisionMissionSection() {
  const missions = [
    "Memperkokoh kerukunan hidup umat beragama serta melestarikan tradisi, adat, seni dan budaya Bali.",
    "Meningkatkan kualitas kehidupan krama Badung di bidang Pendidikan, Kesehatan dan kesejahteraan sosial.",
    "Menciptakan pusat-pusat pertumbuhan ekonomi baru secara merata diseluruh wilayah Kabupaten Badung melalui optimalisasi potensi wilayah.",
    "Mengintegrasikan pembangunan sektor pertanian dengan pariwisata.",
    "Meningkatkan kualitas infrastruktur publik di Kawasan pariwisata, permukiman serta membangun jaringan jalan baru.",
    "Mewujudkan Tata Kelola pemerintahan yang transparan, akuntabel, dan profesional berbasis kompetensi dan digitalisasi.",
    "Meningkatkan promosi pariwisata.",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visi & Misi
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">VISI</h3>
            <p className="text-lg leading-relaxed text-center mt-0 md:mt-56">
              &quot;Sinergitas DPD LPM Kabupaten Badung Demi Mewujudkan Sapta
              Kriya Pemerintah Kabupaten Badung&quot;
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
              MISI
            </h3>
            <ul className="space-y-4 text-gray-700">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-900 text-white text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                  </div>
                  <p className="flex-1 leading-relaxed">{mission}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
