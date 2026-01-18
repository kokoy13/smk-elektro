export default function TeacherSchedule() {
  const scheduleData = [
    { hari: "Senin", jam: "08:00-09:30", mapel: "Matematika", kelas: "X RPL 1", guru: "Budi Santoso" },
    { hari: "Senin", jam: "09:45-11:15", mapel: "Bahasa Inggris", kelas: "X RPL 1", guru: "Siti Nurhaliza" },
    { hari: "Selasa", jam: "08:00-09:30", mapel: "Fisika", kelas: "X TKJ", guru: "Ahmad Wijaya" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Jadwal Pelajaran</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Hari</th>
              <th className="px-4 py-2 text-left">Jam</th>
              <th className="px-4 py-2 text-left">Mata Pelajaran</th>
              <th className="px-4 py-2 text-left">Kelas</th>
              <th className="px-4 py-2 text-left">Guru</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{item.hari}</td>
                <td className="px-4 py-2">{item.jam}</td>
                <td className="px-4 py-2">{item.mapel}</td>
                <td className="px-4 py-2">{item.kelas}</td>
                <td className="px-4 py-2">{item.guru}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
