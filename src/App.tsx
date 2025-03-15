
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import AppointmentPage from "./pages/AppointmentPage";
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
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
