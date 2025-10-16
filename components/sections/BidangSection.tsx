import {
  AcademicCapIcon,
  BookOpenIcon,
  CpuChipIcon,
  GlobeAltIcon,
  HeartIcon,
  HomeModernIcon,
  InboxIcon,
  PresentationChartBarIcon,
  RectangleGroupIcon,
  ShareIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";

export default function BidangSection() {
  const bidang = [
    {
      icon: BookOpenIcon,
      title: "Bidang Hukum",
      description:
        "Menangani kajian, pendampingan, dan advokasi hukum untuk memperkuat kesadaran serta kepastian hukum di masyarakat.",
    },
    {
      icon: RectangleGroupIcon,
      title: "Bidang Seni, Adat, Budaya & Agama",
      description:
        "Melestarikan dan mengembangkan nilai seni, budaya, adat, serta kehidupan beragama yang harmonis dan berkarakter lokal.",
    },
    {
      icon: PresentationChartBarIcon,
      title: "Bidang Ekonomi Pembangunan & UMKM",
      description:
        "Mendorong pertumbuhan ekonomi daerah melalui penguatan UMKM dan inovasi pembangunan berkelanjutan.",
    },
    {
      icon: GlobeAltIcon,
      title: "Bidang Pariwisata",
      description:
        "Mengembangkan potensi pariwisata daerah berbasis budaya dan kearifan lokal untuk meningkatkan kesejahteraan masyarakat.",
    },
    {
      icon: HomeModernIcon,
      title: "Bidang Lingkungan dan Kesehatan",
      description:
        "Berperan dalam pelestarian lingkungan dan peningkatan kesadaran hidup sehat di masyarakat.",
    },
    {
      icon: AcademicCapIcon,
      title: "Bidang Kelembagaan, Pendidikan dan Pelatihan",
      description:
        "Memperkuat kapasitas kelembagaan dan sumber daya manusia melalui pendidikan serta pelatihan berkualitas.",
    },
    {
      icon: ShoppingBagIcon,
      title: "Bidang Ketahanan Pangan",
      description:
        "Menjamin ketersediaan dan keberlanjutan pangan lokal melalui inovasi dan kolaborasi lintas sektor.",
    },
    {
      icon: CpuChipIcon,
      title: "Bidang Teknologi Komunikasi & Statistik",
      description:
        "Mengoptimalkan pemanfaatan teknologi informasi dan data statistik untuk mendukung transparansi dan efisiensi organisasi.",
    },
    {
      icon: HeartIcon,
      title: "Bidang Pemuda dan Olahraga",
      description:
        "Membangun karakter dan semangat generasi muda melalui kegiatan olahraga dan kepemudaan yang produktif.",
    },
    {
      icon: ShareIcon,
      title: "Bidang Hubungan Masyarakat",
      description:
        "Menjalin komunikasi publik yang efektif dan memperkuat citra positif organisasi di tengah masyarakat.",
    },
    {
      icon: InboxIcon,
      title: "Bidang Perkebunan, Perikanan & Pertanian",
      description:
        "Mendukung pengembangan sektor pertanian, perkebunan, dan perikanan yang berdaya saing dan berkelanjutan.",
    },
    {
      icon: UserCircleIcon,
      title: "Bidang Pemberdayaan Perempuan",
      description:
        "Meningkatkan partisipasi dan peran aktif perempuan dalam pembangunan sosial, ekonomi, dan kepemimpinan.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Bidang - Bidang
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {bidang.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="justify-center flex w-full">
                <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl text-center font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
