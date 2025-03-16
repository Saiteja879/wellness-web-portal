
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import AppointmentPage from "./pages/AppointmentPage";
import PrescriptionLookup from "./pages/PrescriptionLookup";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
