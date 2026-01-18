"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const MENU_CONFIG = {
  admin: [
    { label: "Dashboard", href: "/dashboard/admin", icon: "📊" },
    {
      label: "Master Data",
      href: "#",
      icon: "📋",
      submenu: [
        { label: "Data Siswa", href: "/master-data/siswa" },
        { label: "Data Guru & Staf", href: "/master-data/guru" },
        { label: "Data Kelas & Jurusan", href: "/master-data/kelas" },
      ],
    },
    {
      label: "Akademik",
      href: "#",
      icon: "📚",
      submenu: [
        { label: "Jadwal Pelajaran", href: "/akademik/jadwal" },
        { label: "Input Nilai", href: "/akademik/input-nilai" },
        { label: "Lihat Nilai", href: "/akademik/lihat-nilai" },
        { label: "Rapor Digital", href: "/akademik/rapor" },
      ],
    },
    {
      label: "Ujian Online",
      href: "#",
      icon: "💻",
      submenu: [
        { label: "Bank Soal", href: "/ujian/bank-soal" },
        { label: "Buat Ujian", href: "/ujian/buat-ujian" },
      ],
    },
    {
      label: "PPDB",
      href: "#",
      icon: "📝",
      submenu: [
        { label: "Form Pendaftaran", href: "/ppdb/form" },
        { label: "Upload Dokumen", href: "/ppdb/dokumen" },
        { label: "Status Pendaftaran", href: "/ppdb/status" },
      ],
    },
    {
      label: "Keuangan",
      href: "#",
      icon: "💰",
      submenu: [
        { label: "Pembayaran SPP", href: "/keuangan/pembayaran" },
        { label: "Riwayat Pembayaran", href: "/keuangan/riwayat" },
      ],
    },
    {
      label: "Laporan",
      href: "#",
      icon: "📄",
      submenu: [
        { label: "Laporan Absensi", href: "/laporan/absensi" },
        { label: "Laporan Nilai", href: "/laporan/nilai" },
        { label: "Laporan Penerimaan Siswa", href: "/laporan/penerimaan" },
      ],
    },
  ],
  guru: [
    { label: "Dashboard", href: "/dashboard/guru", icon: "📊" },
    { label: "Jadwal Pelajaran", href: "/akademik/jadwal", icon: "📅" },
    { label: "Input Nilai", href: "/akademik/input-nilai", icon: "✏️" },
    {
      label: "Ujian Online",
      href: "#",
      icon: "💻",
      submenu: [
        { label: "Bank Soal", href: "/ujian/bank-soal" },
        { label: "Buat Ujian", href: "/ujian/buat-ujian" },
      ],
    },
    { label: "Data Siswa", href: "/master-data/siswa", icon: "👥" },
    { label: "Laporan", href: "/laporan/nilai", icon: "📄" },
  ],
  siswa: [
    { label: "Dashboard", href: "/dashboard/siswa", icon: "📊" },
    { label: "Jadwal Pelajaran", href: "/akademik/jadwal", icon: "📅" },
    { label: "Lihat Nilai", href: "/akademik/lihat-nilai", icon: "📈" },
    { label: "Rapor Digital", href: "/akademik/rapor", icon: "📄" },
    { label: "Absensi", href: "/laporan/absensi", icon: "✓" },
  ],
  orangtua: [
    { label: "Dashboard", href: "/dashboard/orangtua", icon: "📊" },
    { label: "Nilai Siswa", href: "/akademik/lihat-nilai", icon: "📈" },
    { label: "Rapor Digital", href: "/akademik/rapor", icon: "📄" },
    { label: "Absensi Siswa", href: "/laporan/absensi", icon: "✓" },
    { label: "Pembayaran SPP", href: "/keuangan/pembayaran", icon: "💰" },
  ],
}

export default function Sidebar() {
  const location = useLocation()
  const [expandedMenu, setExpandedMenu] = useState(null)

  const role = localStorage.getItem("role")

  const menu = MENU_CONFIG[role] || []

  const isActive = (href) => {
    return location.pathname.startsWith(href) && href !== "#"
  }

  const logout = () => {
    window.location.href = "/login"
  }

  return (
    <aside className="w-64 bg-blue-600 text-white h-screen fixed left-0 top-0 overflow-y-auto shadow-lg">
      <div className="p-6 border-b border-blue-900">
        <h1 className="text-xl font-bold">SMKS Elektro</h1>
        <p className="text-xs text-blue-200 mt-1">Sijunjung</p>
      </div>

      <nav className="p-4">
        {menu.map((item) => {
          const hasSubmenu = item.submenu && item.submenu.length > 0
          const isOpen = expandedMenu === item.label

          return (
            <div key={item.label}>
              {hasSubmenu ? (
                <button
                  onClick={() => setExpandedMenu(isOpen ? null : item.label)}
                  className={`w-full text-left px-4 py-2 rounded-lg mb-1 flex items-center justify-between hover:bg-blue-700 transition ${
                    isOpen ? "bg-blue-700" : ""
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium text-sm">{item.label}</span>
                  </span>
                  <span>{isOpen ? "▼" : "▶"}</span>
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={`block px-4 py-2 rounded-lg mb-1 flex items-center gap-3 hover:bg-blue-700 transition ${
                    isActive(item.href) ? "bg-blue-700 font-semibold" : ""
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              )}

              {hasSubmenu && isOpen && (
                <div className="ml-4 space-y-1 mb-2 border-l border-blue-500 pl-3">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.href}
                      to={subitem.href}
                      className={`block px-3 py-2 rounded text-xs hover:bg-blue-700 transition ${
                        isActive(subitem.href) ? "bg-blue-700 font-semibold" : ""
                      }`}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-blue-700 bg-blue-900">
        <div className="mb-3 pb-3 border-b border-blue-700">
          <p className="text-xs text-blue-200">Logged in as</p>
          {/* <p className="text-sm font-semibold">{user.name}</p>
          <p className="text-xs text-blue-300">{user.role}</p> */}
        </div>
        <button
          onClick={logout}
          className="w-full px-3 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-semibold transition"
        >
          Logout
        </button>
      </div>
    </aside>
  )
}
