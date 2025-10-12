export default function VisionMissionSection() {
  const missions = [
    "Meningkatkan kapasitas dan kualitas sumber daya manusia",
    "Mengembangkan ekonomi kerakyatan yang berkelanjutan",
    "Memperkuat partisipasi masyarakat dalam pembangunan",
    "Melestarikan nilai-nilai budaya lokal",
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
            <p className="text-lg leading-relaxed text-center">
              &quot;Terwujudnya masyarakat Kabupaten Badung yang mandiri,
              sejahtera, dan berpartisipasi aktif dalam pembangunan
              berkelanjutan&quot;
            </p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
              MISI
            </h3>
            <ul className="space-y-4 text-gray-700">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    {index + 1}
                  </span>
                  <span>{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
