
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ClipboardEdit } from "lucide-react";

// Sample appointment data
const sampleAppointments = [
  { id: 1, name: "John Doe", reason: "Fever", date: "2023-10-15" },
  { id: 2, name: "Jane Smith", reason: "Cold & Cough", date: "2023-10-15" },
  { id: 3, name: "Sam Johnson", reason: "Headache", date: "2023-10-15" },
  { id: 4, name: "Maria Garcia", reason: "Back Pain", date: "2023-10-16" },
  { id: 5, name: "Robert Chen", reason: "Allergic Reaction", date: "2023-10-16" },
];

const AppointmentsTable = () => {
  const [appointments] = useState(sampleAppointments);

  return (
    <div className="rounded-lg border bg-card">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">Today's Appointments</h2>
      </div>
      <div className="p-2">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-[80px]">S.No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead className="text-right">Prescription</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment, index) => (
              <TableRow key={appointment.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{appointment.name}</TableCell>
                <TableCell>{appointment.reason}</TableCell>
                <TableCell className="text-right">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:shadow-sm transition-shadow"
                  >
                    <ClipboardEdit className="mr-2 h-4 w-4" />
                    Prescription
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AppointmentsTable;
