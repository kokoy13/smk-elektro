"use client"

import { useState } from "react"

const INITIAL_DATA = [
  { id: 1, kodeKelas: "X-RPL-1", nama: "X RPL 1", jurusan: "RPL", waliKelas: "Budi Santoso", siswa: 35 },
  { id: 2, kodeKelas: "X-RPL-2", nama: "X RPL 2", jurusan: "RPL", waliKelas: "Siti Nurhaliza", siswa: 33 },
  { id: 3, kodeKelas: "X-TKJ-1", nama: "X TKJ 1", jurusan: "TKJ", waliKelas: "Ahmad Wijaya", siswa: 36 },
]

export default function ClassMasterData() {
  const [classes, setClasses] = useState(INITIAL_DATA)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClasses = classes.filter(
    (c) =>
      c.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.jurusan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.waliKelas.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Data Kelas & Jurusan</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Tambah Kelas</button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <input
          type="text"
          placeholder="Cari kelas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />

        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Kode</th>
              <th className="px-4 py-2 text-left">Nama Kelas</th>
              <th className="px-4 py-2 text-left">Jurusan</th>
              <th className="px-4 py-2 text-left">Wali Kelas</th>
              <th className="px-4 py-2 text-left">Jumlah Siswa</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredClasses.map((cls) => (
              <tr key={cls.id} className="border-t">
                <td className="px-4 py-2">{cls.kodeKelas}</td>
                <td className="px-4 py-2">{cls.nama}</td>
                <td className="px-4 py-2">{cls.jurusan}</td>
                <td className="px-4 py-2">{cls.waliKelas}</td>
                <td className="px-4 py-2">{cls.siswa}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:text-blue-700 mr-2">Edit</button>
                  <button className="text-red-600 hover:text-red-700">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
