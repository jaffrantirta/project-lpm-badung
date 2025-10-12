import React from "react";
import { programsData } from "@/data/program/programsData";

export default function ProgramSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          id="programs-container"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programsData.map((program: any, index: number) => (
            <div
              key={index}
              className="program-card bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className={`${program.color} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <span className="bg-white text-blue-900 bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {program.category}
                  </span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {program.icon}
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>
                    <strong>Target:</strong> {program.target}
                  </p>
                  <p>
                    <strong>Durasi:</strong> {program.duration}
                  </p>
                </div>
                <button
                  className={`w-full ${program.color} text-white py-2 rounded-lg hover:${program.accent} transition duration-300`}
                >
                  Lihat Lebih Lanjut
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
