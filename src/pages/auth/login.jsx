import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = (e) =>{
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600">SMKS Elektro</h1>
            <p className="text-gray-600 text-sm mt-2">Sijunjung</p>
            <p className="text-gray-500 text-xs mt-4">Sistem Informasi Sekolah</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">error manis</div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Masukkan email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 mb-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Masukkan password"
                required
              />
              <Link to="/forgot-password" className="text-blue-600 text-sm underline pl-2">Lupa password</Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
            >
              {loading ? "Loading..." : "Masuk"}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-white text-sm">
          <p>© 2026 SMKS Elektro Sijunjung. Semua hak dilindungi.</p>
        </div>
      </div>
    </div>
  )
}
