import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const gradeData = [
  { semester: "Sem 1", nilai: 85, rata: 82 },
  { semester: "Sem 2", nilai: 88, rata: 84 },
  { semester: "Sem 3", nilai: 90, rata: 86 },
]

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Siswa</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Rata-rata Nilai", value: "86", icon: "📈" },
          { label: "Kehadiran", value: "96%", icon: "✓" },
          { label: "Semester Aktif", value: "3", icon: "📚" },
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Perkembangan Nilai</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={gradeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semester" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="nilai" stroke="#0066cc" />
            <Line type="monotone" dataKey="rata" stroke="#00b4d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
