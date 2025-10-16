export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Siapa Itu LPM Badung?
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-justify text-gray-700 leading-relaxed mb-6">
              Lembaga Pemberdayaan Masyarakat (LPM) Kabupaten Badung adalah
              lembaga pemerintah yang bertugas untuk memberdayakan masyarakat
              dalam berbagai aspek kehidupan sosial, ekonomi, dan budaya.
            </p>
            <p className="text-lg text-justify text-gray-700 leading-relaxed">
              Kami berkomitmen untuk menjadi jembatan antara pemerintah dan
              masyarakat dalam mewujudkan pembangunan yang berkelanjutan dan
              inklusif di Kabupaten Badung.
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Melayani Masyarakat
              </h3>
              <p className="text-gray-600">REBORN OF SOUL KINDNESS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
