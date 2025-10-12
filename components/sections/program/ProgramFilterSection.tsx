import React from "react";

export default function ProgramFilterSection() {
  return (
    <section className="py-8 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Kategori Program
          </h2>
          <p className="text-gray-600">
            Pilih kategori untuk melihat program yang sesuai
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="filter-btn active px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300"
            data-filter="all"
          >
            Semua Program
          </button>
          <button
            className="filter-btn px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300"
            data-filter="ekonomi"
          >
            Ekonomi
          </button>
          <button
            className="filter-btn px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300"
            data-filter="sosial"
          >
            Sosial
          </button>
          <button
            className="filter-btn px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300"
            data-filter="budaya"
          >
            Budaya
          </button>
          <button
            className="filter-btn px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300"
            data-filter="teknologi"
          >
            Teknologi
          </button>
          <button
            className="filter-btn px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition duration-300"
            data-filter="lingkungan"
          >
            Lingkungan
          </button>
        </div>
      </div>
    </section>
  );
}
