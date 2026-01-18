import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const statsData = [
  { month: "Jan", siswa: 400, guru: 24, pendapatan: 2400 },
  { month: "Feb", siswa: 450, guru: 24, pendapatan: 2210 },
  { month: "Mar", siswa: 480, guru: 25, pendapatan: 2290 },
  { month: "Apr", siswa: 520, guru: 25, pendapatan: 2000 },
  { month: "May", siswa: 580, guru: 26, pendapatan: 2181 },
  { month: "Jun", siswa: 620, guru: 26, pendapatan: 2500 },
]

const programData = [
  { name: "TKJ", value: 150 },
  { name: "RPL", value: 200 },
  { name: "MEKATRONIKA", value: 120 },
  { name: "OTOMOTIF", value: 180 },
]

const COLORS = ["#0066cc", "#00b4d8", "#0099cc", "#0055aa"]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Siswa", value: "1,450", icon: "👥" },
          { label: "Total Guru", value: "85", icon: "👨‍🏫" },
          { label: "Total Kelas", value: "48", icon: "🏫" },
          { label: "Pendapatan SPP", value: "Rp 2.5M", icon: "💰" },
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tren Statistik</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={statsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="siswa" stroke="#0066cc" />
              <Line type="monotone" dataKey="guru" stroke="#00b4d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribusi Program</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={programData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {programData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
