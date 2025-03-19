
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import AppointmentPage from "./pages/AppointmentPage";
import PrescriptionLookup from "./pages/PrescriptionLookup";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RecordsDashboard from "./pages/RecordsDashboard";
import MedicalCertificatePage from "./pages/MedicalCertificatePage";
import DoctorLoginPage from "./pages/DoctorLoginPage";
import PharmacistPage from "./pages/PharmacistPage";
import PrescriptionPage from "./pages/PrescriptionPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import NotFound from "./pages/NotFound";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "/appointment",
    element: <AppointmentPage />,
  },
  {
    path: "/prescription",
    element: <PrescriptionLookup />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/records",
    element: <RecordsDashboard />,
  },
  {
    path: "/medical-certificate",
    element: <MedicalCertificatePage />,
  },
  {
    path: "/doctor-login",
    element: <DoctorLoginPage />,
  },
  {
    path: "/pharmacist",
    element: <PharmacistPage />,
  },
  {
    path: "/prescription-page",
    element: <PrescriptionPage />,
  },
  {
    path: "/appointments",
    element: <AppointmentsPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
