
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogOut } from "lucide-react";

// Sample appointment data
const sampleAppointments = [
  { id: 1, name: "Sai Teja", reason: "Fever", date: "2023-10-15" },
  { id: 2, name: "Jane Smith", reason: "Cold & Cough", date: "2023-10-15" },
  { id: 3, name: "Sam Johnson", reason: "Headache", date: "2023-10-15" },
  { id: 4, name: "Maria Garcia", reason: "Back Pain", date: "2023-10-16" },
  { id: 5, name: "Robert Chen", reason: "Allergic Reaction", date: "2023-10-16" },
];

const AppointmentsPage = () => {
  const [appointments] = useState(sampleAppointments);
  const navigate = useNavigate();

  const handlePrescription = (appointment: any) => {
    navigate('/prescription-page', { state: { patientName: appointment.name } });
  };

  const handleNavigateTo = (route: string) => {
    navigate(route);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#8DBBF2] py-3 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img 
            src="/image/hi.jpg" 
            alt="NITC Logo" 
            className="h-16 w-auto object-contain"
          />
          <h1 className="text-2xl font-bold">NITC Health Care Center</h1>
        </div>
        
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 text-black hover:bg-blue-400"
          onClick={() => navigate('/')}
        >
          <span>Logout</span>
          <LogOut size={18} />
        </Button>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-48 bg-gray-200 p-0">
          <div 
            className="p-4 bg-[#8DBBF2] cursor-pointer font-medium"
            onClick={() => handleNavigateTo('/appointments')}
          >
            Appointments
          </div>
          <div 
            className="p-4 cursor-pointer hover:bg-gray-300 font-medium"
            onClick={() => handleNavigateTo('/dashboard')}
          >
            Requests
          </div>
        </div>
        
        {/* Appointments Table */}
        <div className="flex-1 p-4 bg-gray-300">
          <Table className="bg-gray-300 border-collapse">
            <TableHeader>
              <TableRow className="border border-gray-400">
                <TableHead className="w-20 border border-gray-400 text-black font-bold">S.No</TableHead>
                <TableHead className="border border-gray-400 text-black font-bold">Name</TableHead>
                <TableHead className="border border-gray-400 text-black font-bold">Reason</TableHead>
                <TableHead className="border border-gray-400 text-black font-bold">Prescription</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((appointment, index) => (
                <TableRow key={appointment.id} className="border border-gray-400">
                  <TableCell className="border border-gray-400 font-medium">{index + 1}</TableCell>
                  <TableCell className="border border-gray-400">{appointment.name}</TableCell>
                  <TableCell className="border border-gray-400">{appointment.reason}</TableCell>
                  <TableCell className="border border-gray-400">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="bg-gray-200 hover:bg-gray-300 text-black"
                      onClick={() => handlePrescription(appointment)}
                    >
                      Prescription
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        Designed and developed by Puneeth
      </footer>
    </div>
  );
};

export default AppointmentsPage;
