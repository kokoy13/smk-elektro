import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import "./index.css"

// Components
import DashboardLayout from "./components/layout/dashboard-layout"

// Auth Pages
import LoginPage from "./pages/auth/login"
import ForgotPasswordPage from "./pages/auth/forgot-password"
import LandingPage from "./pages/landing"

// Dashboard Pages
import AdminDashboard from "./pages/dashboard/admin"
import TeacherDashboard from "./pages/dashboard/guru"
import StudentDashboard from "./pages/dashboard/siswa"
import ParentDashboard from "./pages/dashboard/orangtua"

// Master Data Pages
import StudentMasterData from "./pages/master-data/siswa"
import TeacherMasterData from "./pages/master-data/guru"
import ClassMasterData from "./pages/master-data/kelas"

// Academic Pages
import TeacherSchedule from "./pages/akademik/jadwal"
import InputNilai from "./pages/akademik/input-nilai"
import LihatNilai from "./pages/akademik/lihat-nilai"
import Rapor from "./pages/akademik/rapor"

// Exam Pages
import BankSoal from "./pages/ujian/bank-soal"
import BuatUjian from "./pages/ujian/buat-ujian"

// PPDB Pages
import PPDBForm from "./pages/ppdb/form"
import PPDBDokumen from "./pages/ppdb/dokumen"
import PPDBStatus from "./pages/ppdb/status"

// Financial Pages
import Pembayaran from "./pages/keuangan/pembayaran"
import Riwayat from "./pages/keuangan/riwayat"

// Report Pages
import LaporanAbsensi from "./pages/laporan/absensi"
import LaporanNilai from "./pages/laporan/nilai"
import LaporanPenerimaan from "./pages/laporan/penerimaan"

// User Pages
import ProfilePage from "./pages/profile"
import SettingsPage from "./pages/settings"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  // Admin Routes
  {
    path: "/dashboard/admin",
    element: (
        <DashboardLayout>
          <AdminDashboard />
        </DashboardLayout>
    ),
  },
  {
    path: "/master-data/siswa",
    element: (
        <DashboardLayout>
          <StudentMasterData />
        </DashboardLayout>
    ),
  },
  {
    path: "/master-data/guru",
    element: (
        <DashboardLayout>
          <TeacherMasterData />
        </DashboardLayout>
    ),
  },
  {
    path: "/master-data/kelas",
    element: (
        <DashboardLayout>
          <ClassMasterData />
        </DashboardLayout>
    ),
  },
  // Teacher Routes
  {
    path: "/dashboard/guru",
    element: (
        <DashboardLayout>
          <TeacherDashboard />
        </DashboardLayout>
    ),
  },
  {
    path: "/akademik/jadwal",
    element: (
        <DashboardLayout>
          <TeacherSchedule />
        </DashboardLayout>
    ),
  },
  {
    path: "/akademik/input-nilai",
    element: (
        <DashboardLayout>
          <InputNilai />
        </DashboardLayout>
    ),
  },
  {
    path: "/akademik/lihat-nilai",
    element: (
        <DashboardLayout>
          <LihatNilai />
        </DashboardLayout>
    ),
  },
  {
    path: "/akademik/rapor",
    element: (
        <DashboardLayout>
          <Rapor />
        </DashboardLayout>
    ),
  },
  // Student Routes
  {
    path: "/dashboard/siswa",
    element: (
        <DashboardLayout>
          <StudentDashboard />
        </DashboardLayout>
    ),
  },
  // Parent Routes
  {
    path: "/dashboard/orangtua",
    element: (
        <DashboardLayout>
          <ParentDashboard />
        </DashboardLayout>
    ),
  },
  // Exam Routes
  {
    path: "/ujian/bank-soal",
    element: (
        <DashboardLayout>
          <BankSoal />
        </DashboardLayout>
    ),
  },
  {
    path: "/ujian/buat-ujian",
    element: (
        <DashboardLayout>
          <BuatUjian />
        </DashboardLayout>
    ),
  },
  // PPDB Routes
  {
    path: "/ppdb/form",
    element: (
        <DashboardLayout>
          <PPDBForm />
        </DashboardLayout>
    ),
  },
  {
    path: "/ppdb/dokumen",
    element: (
        <DashboardLayout>
          <PPDBDokumen />
        </DashboardLayout>
    ),
  },
  {
    path: "/ppdb/status",
    element: (
        <DashboardLayout>
          <PPDBStatus />
        </DashboardLayout>
    ),
  },
  // Financial Routes
  {
    path: "/keuangan/pembayaran",
    element: (
        <DashboardLayout>
          <Pembayaran />
        </DashboardLayout>
    ),
  },
  {
    path: "/keuangan/riwayat",
    element: (
        <DashboardLayout>
          <Riwayat />
        </DashboardLayout>
    ),
  },
  // Report Routes
  {
    path: "/laporan/absensi",
    element: (
        <DashboardLayout>
          <LaporanAbsensi />
        </DashboardLayout>
    ),
  },
  {
    path: "/laporan/nilai",
    element: (
        <DashboardLayout>
          <LaporanNilai />
        </DashboardLayout>
    ),
  },
  {
    path: "/laporan/penerimaan",
    element: (
        <DashboardLayout>
          <LaporanPenerimaan />
        </DashboardLayout>
    ),
  },
  // User Routes
  {
    path: "/profile",
    element: (
        <DashboardLayout>
          <ProfilePage />
        </DashboardLayout>
    ),
  },
  {
    path: "/settings",
    element: (
        <DashboardLayout>
          <SettingsPage />
        </DashboardLayout>
    ),
  },
  // Catch-all redirect
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
