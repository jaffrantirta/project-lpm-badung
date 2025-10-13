import React from "react";

const programs = [
  {
    no: 1,
    bidang: "Seni, Adat, Budaya & Agama",
    kegiatan:
      "Seminar dan Ikrar Kerukunan antar umat beragama di Kabupaten Badung",
    pihak: "Semua elemen agama berikrar menjaga Badung",
  },
  {
    no: 2,
    bidang: "Ekonomi Kreatif",
    kegiatan:
      "Acara rutin tahunan “BADUNG DIGI FEST” — festival musik, seni, budaya, dan UMKM",
    pihak: "Pelaku UMKM, seniman, masyarakat umum",
  },
  {
    no: 3,
    bidang: "Teknologi & Komunikasi",
    kegiatan: "Pelatihan digital marketing dan digitalisasi desa",
    pihak: "Wirausaha (warga desa)",
  },
  {
    no: 4,
    bidang: "Pendidikan & Pelatihan",
    kegiatan:
      "Survei jumlah SDM (sarjana) di tiap Kecamatan/Kelurahan serta pelatihan bagi yang belum ahli",
    pihak: "Warga desa",
  },
  {
    no: 5,
    bidang: "Pariwisata",
    kegiatan:
      "Optimalisasi promosi titik pariwisata yang sedang dan belum berkembang",
    pihak: "Warga desa, wisatawan",
  },
  {
    no: 6,
    bidang: "Pertanian, Perikanan & Ketahanan Pangan",
    kegiatan:
      "Kerjasama dengan Fakultas Agroteknologi untuk mendukung pembangunan berkelanjutan",
    pihak: "Warga, kampus yang ditunjuk",
  },
  {
    no: 7,
    bidang: "Hukum",
    kegiatan:
      "Pembuatan Asosiasi LBH untuk membantu warga Badung yang tidak mampu dalam kasus hukum",
    pihak: "Warga, lawyer atau konsultan hukum",
  },
  {
    no: 8,
    bidang: "Lingkungan",
    kegiatan: "Program '1 Biopori 1 Rumah' di wilayah Badung",
    pihak: "Warga",
  },
];

export default function BidangProgramSection() {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            BIDANG PROGRAM LPM KABUPATEN BADUNG
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl">
            Kolaborasi lintas sektor dalam mendukung pembangunan berkelanjutan
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-white border-opacity-20">
            <thead className="bg-white bg-opacity-10">
              <tr>
                <th className="py-3 px-4 text-left text-blue-900 font-semibold">
                  No
                </th>
                <th className="py-3 px-4 text-left text-blue-900 font-semibold">
                  Bidang Program
                </th>
                <th className="py-3 px-4 text-left text-blue-900 font-semibold">
                  Kegiatan
                </th>
                <th className="py-3 px-4 text-left text-blue-900 font-semibold">
                  Pihak Terkait
                </th>
              </tr>
            </thead>
            <tbody>
              {programs.map((item) => (
                <tr
                  key={item.no}
                  className="border-t border-white border-opacity-10 hover:bg-blue-800 hover:bg-opacity-10 transition"
                >
                  <td className="py-3 px-4">{item.no}</td>
                  <td className="py-3 px-4 font-medium">{item.bidang}</td>
                  <td className="py-3 px-4">{item.kegiatan}</td>
                  <td className="py-3 px-4">{item.pihak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
