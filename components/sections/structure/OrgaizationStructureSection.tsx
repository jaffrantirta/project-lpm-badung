import React from "react";

export default function OrgaizationStructureSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16 fade-in">
          <div className="w-full max-w-sm">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border-2 border-blue-900">
              <div className="bg-gradient-to-r from-blue-900 to-blue-800 h-32"></div>
              <div className="relative px-6 pb-6">
                <div className="absolute -top-44 left-1/2 transform -translate-x-1/2">
                  <div className="w-42 h-42 rounded-full border-4 border-white bg-gray-300 overflow-hidden shadow-xl">
                    <img
                      src="/images/structure/leader.jpg"
                      alt="I Putu Putra Jaya Wardana. SE.MT (MsTr)"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-20">
                  <div className="bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                    KETUA
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    I Putu Putra Jaya Wardana. SE.MT (MsTr)
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Pemimpin dan Koordinator Utama
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-px h-12 bg-gray-300"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute top-0 left-1/4 right-1/4 h-px bg-gray-300 -translate-y-8"></div>

          <div className="hidden md:block absolute left-1/4 w-px h-8 bg-gray-300 -translate-y-8"></div>
          <div className="hidden md:block absolute right-1/4 w-px h-8 bg-gray-300 -translate-y-8"></div>

          <div className="fade-in delay-150">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-24"></div>
              <div className="relative px-6 pb-6">
                <div className="absolute -top-36 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-300 overflow-hidden shadow-xl">
                    <img
                      src="/images/structure/secretary.jpg"
                      alt="I Dewa Putu Ardita Yasa, S.Ag., M.Ag"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-16">
                  <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                    SEKRETARIS
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    I Dewa Putu Ardita Yasa, S.Ag., M.Ag
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Administrasi & Koordinasi
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in delay-100">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover border border-gray-200">
              <div className="bg-gradient-to-r from-green-500 to-green-600 h-24"></div>
              <div className="relative px-6 pb-6">
                <div className="absolute -top-36 left-1/2 transform -translate-x-1/2">
                  <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-300 overflow-hidden shadow-xl">
                    <img
                      src="/images/structure/treasurer.jpg"
                      alt="Kadek Dwi Rastiti Sadhayanti, S.I.Kom"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center mt-16">
                  <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-2">
                    BENDAHARA
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Kadek Dwi Rastiti Sadhayanti, S.I.Kom
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Pengelola Keuangan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-8 text-white text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-4">
              Bekerja Bersama untuk Masyarakat
            </h3>
            <p className="text-lg leading-relaxed">
              Tim pengurus LPM Kabupaten Badung berkomitmen penuh untuk melayani
              dan memberdayakan masyarakat dengan dedikasi tinggi dan
              profesionalisme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
