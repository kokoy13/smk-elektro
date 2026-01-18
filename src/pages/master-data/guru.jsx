"use client"

import { useState } from "react"

const INITIAL_DATA = [
  { id: 1, nip: "196801011993031001", nama: "Dr. Budi Santoso", bidang: "Matematika", email: "budi@school.com" },
  {
    id: 2,
    nip: "197105121998021002",
    nama: "Siti Nurhaliza, S.Pd",
    bidang: "Bahasa Inggris",
    email: "siti@school.com",
  },
  { id: 3, nip: "197503032001022003", nama: "Ahmad Wijaya, M.Si", bidang: "Fisika", email: "ahmad@school.com" },
]

export default function TeacherMasterData() {
  const [teachers, setTeachers] = useState(INITIAL_DATA)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTeachers = teachers.filter(
    (t) =>
      t.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.nip.includes(searchTerm) ||
      t.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Data Guru & Staf</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">Tambah Guru</button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <input
          type="text"
          placeholder="Cari guru..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />

        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">NIP</th>
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Bidang</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((teacher) => (
              <tr key={teacher.id} className="border-t">
                <td className="px-4 py-2">{teacher.nip}</td>
                <td className="px-4 py-2">{teacher.nama}</td>
                <td className="px-4 py-2">{teacher.bidang}</td>
                <td className="px-4 py-2">{teacher.email}</td>
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
