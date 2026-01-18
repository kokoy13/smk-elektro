export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm fixed top-0 left-64 right-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Sistem Informasi SMKS Elektro Sijunjung</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{new Date().toLocaleDateString("id-ID")}</span>
        </div>
      </div>
    </nav>
  )
}
