import React from "react";

export default function AchievementsSection() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pencapaian & Prestasi
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl">
            Rekam jejak LPM Badung dalam melayani masyarakat
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div
              className="counter text-4xl md:text-5xl font-bold mb-2"
              data-target="247"
            >
              0
            </div>
            <p className="text-lg">Kasus Ditangani (2024)</p>
          </div>
          <div className="text-center">
            <div
              className="counter text-4xl md:text-5xl font-bold mb-2"
              data-target="1250"
            >
              0
            </div>
            <p className="text-lg">Total Program Selesai</p>
          </div>
          <div className="text-center">
            <div
              className="counter text-4xl md:text-5xl font-bold mb-2"
              data-target="89"
            >
              0
            </div>
            <p className="text-lg">Desa/Kelurahan Terlayani</p>
          </div>
          <div className="text-center">
            <div
              className="counter text-4xl md:text-5xl font-bold mb-2"
              data-target="125000"
            >
              0
            </div>
            <p className="text-lg">Masyarakat Terdampak</p>
          </div>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              🏆 Penghargaan Terbaik
            </h3>
            <p>
              Lembaga Pemberdayaan Masyarakat Terbaik Tingkat Provinsi Bali 2023
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              📈 Peningkatan Kinerja
            </h3>
            <p>
              Peningkatan 35% dalam penyelesaian program pemberdayaan masyarakat
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">
              🤝 Kemitraan Strategis
            </h3>
            <p>Menjalin kerjasama dengan 45+ organisasi dan lembaga</p>
          </div>
        </div>
      </div>
    </section>
  );
}
