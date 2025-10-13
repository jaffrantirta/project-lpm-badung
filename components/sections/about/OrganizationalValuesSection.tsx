import React from "react";

export default function OrganizationalValuesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nilai-Nilai Organisasi
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nilai-nilai yang menjadi pedoman dalam setiap aktivitas dan
            pelayanan LPM Badung
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 group">
            <div className="w-16 h-16 bg-blue-900 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white group-hover:text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">SPECIFIC</h3>
            <p className="text-sm">
              Setiap program dirancang dengan tujuan yang jelas dan fokus pada
              kebutuhan masyarakat.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 group">
            <div className="w-16 h-16 bg-blue-900 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white group-hover:text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">MEASURABLE</h3>
            <p className="text-sm">
              Kami menetapkan indikator keberhasilan yang bisa diukur agar
              hasilnya dapat dievaluasi secara nyata.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 group">
            <div className="w-16 h-16 bg-blue-900 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white group-hover:text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">ACHIEVABLE</h3>
            <p className="text-sm">
              Target yang dibuat realistis dan sesuai dengan kapasitas sumber
              daya yang dimiliki.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 group">
            <div className="w-16 h-16 bg-blue-900 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white group-hover:text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">RELEVANT</h3>
            <p className="text-sm">
              Semua kegiatan diselaraskan dengan visi pembangunan daerah dan
              kebutuhan masyarakat Badung.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-900 hover:text-white transition duration-300 group">
            <div className="w-16 h-16 bg-blue-900 group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white group-hover:text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">TIME BASED</h3>
            <p className="text-sm">
              Setiap program memiliki batas waktu pelaksanaan agar capaian dapat
              dipantau secara teratur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
