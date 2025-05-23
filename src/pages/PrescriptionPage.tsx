import { useState } from "react";
import { CalendarClock, ClipboardList, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

import DashboardHeader from "@/components/DashboardHeader";
import Footer from "@/components/Footer";

const PrescriptionPage = () => {
    const navigate=useNavigate();
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, medicine: "", quantity: "", use: { M: false, A: false, N: false } },
  ]);

  // Toggle M, A, N buttons
  const toggleUsage = (index: number, time: "M" | "A" | "N") => {
    const updatedPrescriptions = prescriptions.map((prescription, i) =>
      i === index
        ? { ...prescription, use: { ...prescription.use, [time]: !prescription.use[time] } }
        : prescription
    );
    setPrescriptions(updatedPrescriptions);
  };

  // Update input fields
  const updatePrescription = (index: number, field: "medicine" | "quantity", value: string) => {
    const updatedPrescriptions = prescriptions.map((prescription, i) =>
      i === index ? { ...prescription, [field]: value } : prescription
    );
    setPrescriptions(updatedPrescriptions);
  };

  // Add new row
  const addRow = () => {
    setPrescriptions([
      ...prescriptions,
      { id: prescriptions.length + 1, medicine: "", quantity: "", use: { M: false, A: false, N: false } },
    ]);
  };

  // Delete row
  const deleteRow = (index: number) => {
    const updatedPrescriptions = prescriptions.filter((_, i) => i !== index);
    setPrescriptions(updatedPrescriptions);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full bg-[#f5f7fa]">
        <DashboardHeader page="g"/>
        <div className="flex flex-1 min-h-screen pt-8 mt-12 pb-6 mb-10">
          {/* Sidebar */}
          <Sidebar variant="inset" side="left" collapsible="icon" className="fixed h-full z-0">
            <SidebarContent className="pt-8 mt-12">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={true} tooltip="Appointments">
                    <CalendarClock size={20} />
                    <span>Appointments</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Requests" onClick={()=>{navigate('/j')}}>
                    <ClipboardList size={20} />
                    <span>Requests</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          {/* Prescription Form */}
          <div className="flex flex-col w-full px-8">
            <h1 className="text-2xl font-bold mb-4">Prescription :-</h1>

            <Card className="p-6">
              <div className="overflow-x-auto">
                <Table className="border border-gray-300">
                  <TableHeader className="bg-gray-50">
                    <TableRow>
                      <TableHead className="w-12 font-semibold text-gray-700 border-r">S.No</TableHead>
                      <TableHead className="font-semibold text-gray-700 border-r">Medicine</TableHead>
                      <TableHead className="font-semibold text-gray-700 border-r">Quantity</TableHead>
                      <TableHead className="font-semibold text-gray-700 border-r">Use</TableHead>
                      <TableHead className="w-16 font-semibold text-gray-700">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {prescriptions.map((prescription, index) => (
                      <TableRow key={index} className="hover:bg-gray-50 border-t">
                        <TableCell className="font-medium border-r">{index + 1}</TableCell>
                        <TableCell className="border-r">
                          <Input
                            type="text"
                            value={prescription.medicine}
                            onChange={(e) => updatePrescription(index, "medicine", e.target.value)}
                            placeholder="Enter medicine"
                          />
                        </TableCell>
                        <TableCell className="border-r">
                          <Input
                            type="text"
                            value={prescription.quantity}
                            onChange={(e) => updatePrescription(index, "quantity", e.target.value)}
                            placeholder="Enter quantity"
                          />
                        </TableCell>
                        <TableCell className="flex gap-2 border-r">
                          {["M", "A", "N"].map((time) => (
                            <Button
                              key={time}
                              variant={prescription.use[time as "M" | "A" | "N"] ? "default" : "outline"}
                              size="sm"
                              onClick={() => toggleUsage(index, time as "M" | "A" | "N")}
                            >
                              {time}
                            </Button>
                          ))}
                        </TableCell>
                        <TableCell className="text-center">
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => deleteRow(index)}
                          >
                            <Trash size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex justify-between mt-4">
                <Button onClick={addRow} className="px-4 py-2 bg-green-500 text-white">
                  + Add Medicine
                </Button>
                <Button className="px-4 py-2 bg-blue-500 text-white">Upload</Button>
              </div>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default PrescriptionPage;
