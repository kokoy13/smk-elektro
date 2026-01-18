import { useState } from "react"
import { Link } from "react-router-dom"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleReset = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setMessage("Link reset password telah dikirim ke email Anda")
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600">Reset Password</h1>
            <p className="text-gray-600 text-sm mt-2">SMKS Elektro Sijunjung</p>
          </div>

          {!message ? (
            <form onSubmit={handleReset} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Masukkan email Anda"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
              >
                {loading ? "Mengirim..." : "Kirim Link Reset"}
              </button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">{message}</div>
          )}

          <div className="flex justify-center w-full">
            <Link
              to="/login"
              className="w-max cursor-pointer mt-4 text-blue-600 hover:text-blue-700 underline"
            >
              Kembali ke Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
