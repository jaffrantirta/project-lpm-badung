"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  target: number;
  label: string;
}

export default function StatisticsSection() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats: StatItem[] = [
    { target: 6, label: "Kecamatan" },
    { target: 16, label: "Kelurahan" },
    { target: 46, label: "Desa" },
    { target: 356, label: "Banjar" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const increment = stat.target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < stat.target) {
          current += increment;
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
          setTimeout(updateCounter, 20);
        } else {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = stat.target;
            return newCounts;
          });
        }
      };

      updateCounter();
    });
  };

  return (
    <section ref={sectionRef} className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Menjangkau Lebih Luas, Melayani Lebih Dekat
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl">
            Cakupan pelayanan dan jangkauan lembaga hingga tingkat banjar
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="counter text-4xl md:text-5xl font-bold mb-2">
                {counts[index].toLocaleString()}
              </div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
