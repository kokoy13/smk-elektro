import Sidebar from "./sidebar"
import Navbar from "./navbar"

export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full">
        <Navbar />
        <main className="mt-20 p-6 bg-gray-50 min-h-screen">{children}</main>
      </div>
    </div>
  )
}
