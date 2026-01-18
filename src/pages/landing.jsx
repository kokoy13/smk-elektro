import { Link } from "react-router-dom"
import { BookOpen, Users, BarChart3, Zap } from "lucide-react"
import { Button } from "../components/ui/button"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
        {/* Navigation */}
        <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    <span className="text-xl font-bold text-gray-900">SMKS Elektro Sijunjung</span>
                </div>
                <Link to="/login">
                    <Button>Masuk</Button>
                </Link>
            </div>
            </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sistem Informasi Sekolah Modern</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Platform manajemen sekolah yang komprehensif untuk guru, siswa, orang tua, dan administrator
            </p>
            <Link to="/login">
                <Button size="lg" className="mb-12">
                    Mulai Sekarang
                </Button>
            </Link>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Manajemen Pengguna</h3>
                <p className="text-gray-600">Kelola admin, guru, siswa, dan orang tua dengan mudah</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Akademik</h3>
                <p className="text-gray-600">Input nilai, jadwal, rapor, dan ujian online</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Laporan</h3>
                <p className="text-gray-600">Laporan absensi, nilai, dan penerimaan siswa</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Keuangan</h3>
                <p className="text-gray-600">Manajemen pembayaran SPP dan riwayat transaksi</p>
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2026 SMKS Elektro Sijunjung. Semua hak dilindungi.</p>
            </div>
        </footer>
        </div>
    )
}
