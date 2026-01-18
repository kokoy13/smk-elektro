import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts"

const paymentData = [
  { name: "Lunas", value: 8, color: "#00b894" },
  { name: "Termin", value: 3, color: "#ffc107" },
  { name: "Belum Bayar", value: 1, color: "#ff6b6b" },
]

export default function ParentDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Orang Tua</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Rata-rata Nilai", value: "88", icon: "📚" },
          { label: "Kehadiran", value: "94%", icon: "✓" },
          { label: "SPP Terakhir", value: "Lunas", icon: "💳" },
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
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Pembayaran SPP</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={paymentData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {paymentData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
