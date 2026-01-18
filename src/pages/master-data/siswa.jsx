"use client"

import { useState } from "react"

const INITIAL_DATA = [
  { id: 1, nim: "2024001", nama: "Andi Wijaya", kelas: "X RPL 1", jurusan: "RPL", email: "andi@student.com" },
  { id: 2, nim: "2024002", nama: "Budi Santoso", kelas: "X RPL 1", jurusan: "RPL", email: "budi@student.com" },
  { id: 3, nim: "2024003", nama: "Citra Dewi", kelas: "X TKJ", jurusan: "TKJ", email: "citra@student.com" },
]

export default function StudentMasterData() {
  const [students, setStudents] = useState(INITIAL_DATA)
  const [searchTerm, setSearchTerm] = useState("")
  const [showForm, setShowForm] = useState(false)

  const filteredStudents = students.filter(
    (s) =>
      s.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.nim.includes(searchTerm) ||
      s.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Data Siswa</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
        >
          Tambah Siswa
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <input
          type="text"
          placeholder="Cari siswa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />

        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">NIM</th>
              <th className="px-4 py-2 text-left">Nama</th>
              <th className="px-4 py-2 text-left">Kelas</th>
              <th className="px-4 py-2 text-left">Jurusan</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="px-4 py-2">{student.nim}</td>
                <td className="px-4 py-2">{student.nama}</td>
                <td className="px-4 py-2">{student.kelas}</td>
                <td className="px-4 py-2">{student.jurusan}</td>
                <td className="px-4 py-2">{student.email}</td>
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
