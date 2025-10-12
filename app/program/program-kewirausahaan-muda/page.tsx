import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Beranda
                </Link>
              </li>
              <li>
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <Link
                  href="/program"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Program
                </Link>
              </li>
              <li>
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                <span className="text-gray-900 font-medium">
                  Kewirausahaan Muda
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center mb-4">
                <span className="bg-white text-blue-900 bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                  Program Ekonomi
                </span>
                <span className="ml-4 bg-green-500 px-4 py-2 rounded-full text-sm font-medium">
                  Pendaftaran Dibuka
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Program Kewirausahaan Muda
              </h1>
              <p className="text-xl mb-8 leading-relaxed">
                Mengembangkan jiwa kewirausahaan pemuda melalui pelatihan
                komprehensif, mentoring, dan pendampingan bisnis untuk
                menciptakan wirausaha muda yang mandiri dan inovatif.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300 shadow-lg">
                  Daftar Sekarang
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition duration-300">
                  Download Brosur
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
                <svg
                  className="w-full h-64 text-blue-900 opacity-80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
                <div className="text-center mt-4">
                  <p className="text-lg font-semibold">
                    Pelatihan Kewirausahaan
                  </p>
                  <p className="text-sm opacity-80">
                    Sesi mentoring dan workshop bisnis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Durasi
              </h3>
              <p className="text-gray-600">3 Bulan Intensif</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Peserta
              </h3>
              <p className="text-gray-600">50 Orang per Batch</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sertifikat
              </h3>
              <p className="text-gray-600">Tersertifikasi Resmi</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Biaya
              </h3>
              <p className="text-gray-600">GRATIS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tentang Program
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  Program Kewirausahaan Muda adalah inisiatif strategis LPM
                  Kabupaten Badung untuk mengembangkan ekosistem kewirausahaan
                  yang kuat di kalangan pemuda. Program ini dirancang khusus
                  untuk memberikan bekal komprehensif mulai dari mindset,
                  keterampilan teknis, hingga jaringan bisnis.
                </p>
                <p className="mb-6">
                  Melalui pendekatan pembelajaran yang interaktif dan praktis,
                  peserta akan dibimbing oleh mentor berpengalaman dari berbagai
                  bidang industri. Program ini tidak hanya fokus pada teori
                  bisnis, tetapi juga implementasi nyata melalui proyek bisnis
                  yang akan dikembangkan selama masa pelatihan.
                </p>
                <p>
                  Lulusan program ini diharapkan mampu menjadi wirausaha muda
                  yang mandiri, inovatif, dan berkontribusi positif terhadap
                  perekonomian daerah serta menciptakan lapangan kerja bagi
                  masyarakat sekitar.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tujuan Program
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Mengembangkan Mindset Entrepreneur
                    </h3>
                    <p className="text-gray-600">
                      Membangun pola pikir wirausaha yang kreatif, inovatif, dan
                      berani mengambil risiko terukur.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Memberikan Keterampilan Praktis
                    </h3>
                    <p className="text-gray-600">
                      Melatih keterampilan bisnis praktis seperti pemasaran
                      digital, manajemen keuangan, dan pengembangan produk.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Membangun Jaringan Bisnis
                    </h3>
                    <p className="text-gray-600">
                      Menghubungkan peserta dengan ekosistem bisnis lokal dan
                      nasional untuk pengembangan usaha.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Menciptakan Lapangan Kerja
                    </h3>
                    <p className="text-gray-600">
                      Mendorong terciptanya wirausaha baru yang dapat menyerap
                      tenaga kerja dan menggerakkan ekonomi lokal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kurikulum Program
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kurikulum yang dirancang sistematis untuk mengembangkan kemampuan
              kewirausahaan secara komprehensif
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Bulan Pertama
                </h3>
                <p className="text-gray-600">Fondasi Kewirausahaan</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Mindset & Motivasi Entrepreneur
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Identifikasi Peluang Bisnis
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Riset Pasar & Analisis Kompetitor
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Business Model Canvas
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Bulan Kedua
                </h3>
                <p className="text-gray-600">Pengembangan Bisnis</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Perencanaan Bisnis
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Manajemen Keuangan & Akuntansi
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Strategi Pemasaran Digital
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Branding & Komunikasi
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Bulan Ketiga
                </h3>
                <p className="text-gray-600">Implementasi & Scaling</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Peluncuran Produk/Layanan
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Manajemen Operasional
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Strategi Pengembangan Usaha
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-900 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Pitching & Presentasi Bisnis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jadwal Kegiatan
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Jadwal Reguler
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Sesi Pembelajaran
                        </h4>
                        <p className="text-gray-600">
                          Setiap Selasa & Kamis, 19:00 - 21:00 WITA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Mentoring Session
                        </h4>
                        <p className="text-gray-600">
                          Setiap Sabtu, 09:00 - 12:00 WITA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Workshop Praktik
                        </h4>
                        <p className="text-gray-600">
                          Setiap Minggu ke-2 & ke-4, Full Day
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">
                    Milestone Penting
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-blue-900 rounded-full mt-2 mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Minggu ke-4
                        </h4>
                        <p className="text-gray-600">
                          Presentasi Business Model Canvas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-blue-900 rounded-full mt-2 mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Minggu ke-8
                        </h4>
                        <p className="text-gray-600">
                          Peluncuran MVP (Minimum Viable Product)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-4 h-4 bg-blue-900 rounded-full mt-2 mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Minggu ke-12
                        </h4>
                        <p className="text-gray-600">
                          Final Pitching & Graduation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Persyaratan Pendaftaran
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Persyaratan Umum
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-900 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Usia 18-35 tahun
                    </h4>
                    <p className="text-gray-600">
                      Dibuktikan dengan KTP yang masih berlaku
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-900 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Domisili Kabupaten Badung
                    </h4>
                    <p className="text-gray-600">
                      Dibuktikan dengan KTP atau surat keterangan domisili
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-900 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Pendidikan minimal SMA/SMK
                    </h4>
                    <p className="text-gray-600">Fotokopi ijazah terakhir</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-900 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Memiliki motivasi kuat
                    </h4>
                    <p className="text-gray-600">
                      Untuk menjadi wirausaha dan mengembangkan bisnis
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Dokumen yang Diperlukan
              </h3>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-8 h-8 text-blue-900 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Formulir Pendaftaran
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Diisi lengkap dan ditandatangani
                    </p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-8 h-8 text-blue-900 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Fotokopi KTP
                    </h4>
                    <p className="text-gray-600 text-sm">Yang masih berlaku</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-8 h-8 text-blue-900 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Fotokopi Ijazah
                    </h4>
                    <p className="text-gray-600 text-sm">Pendidikan terakhir</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <svg
                    className="w-8 h-8 text-blue-900 mr-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Pas Foto 3x4
                    </h4>
                    <p className="text-gray-600 text-sm">Sebanyak 2 lembar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
