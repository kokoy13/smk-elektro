import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const classData = [
  { kelas: "X RPL 1", siswa: 35, hadir: 32, alpha: 2, izin: 1 },
  { kelas: "X RPL 2", siswa: 33, hadir: 31, alpha: 1, izin: 1 },
  { kelas: "XI TKJ", siswa: 36, hadir: 34, alpha: 2, izin: 0 },
  { kelas: "XI RPL", siswa: 38, hadir: 36, alpha: 1, izin: 1 },
]

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Guru</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Kelas Mengajar", value: "4", icon: "🏫" },
          { label: "Total Siswa", value: "142", icon: "👥" },
          { label: "Rata-rata Absensi", value: "95%", icon: "✓" },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Kehadiran Siswa</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={classData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="kelas" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="hadir" fill="#0066cc" />
            <Bar dataKey="alpha" fill="#ff6b6b" />
            <Bar dataKey="izin" fill="#ffc107" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
