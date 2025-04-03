import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from "@/components/ui/sidebar";
import { UserPlus, Stethoscope, Pill, Trash2 } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddMedicine = () => {
  const navigate = useNavigate();
  const [medicines, setMedicines] = useState([{ id: 1, name: "", quantity: "" }]);

  const handleAddRow = () => {
    setMedicines([...medicines, { id: Date.now(), name: "", quantity: "" }]);
  };

  const handleDeleteRow = (id: number) => {
    setMedicines(medicines.filter((medicine) => medicine.id !== id));
  };

  const handleChange = (id: number, field: string, value: string) => {
    setMedicines(
      medicines.map((medicine) =>
        medicine.id === id ? { ...medicine, [field]: value } : medicine
      )
    );
  };

  const handleSubmit = () => {
    console.log("Medicines Data:", medicines);
    // Handle form submission logic
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full bg-[#f5f7fa]">
        {/* Dashboard Header */}
        <DashboardHeader page1="reset-password" />

        <div className="flex flex-1 min-h-screen pt-8 mt-12 pb-6 mb-10">
          {/* Sidebar */}
          <Sidebar variant="inset" side="left" collapsible="icon" className="fixed h-full z-0">
            <SidebarContent className="pt-8 mt-12">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Add Doctor" onClick={() => navigate("/add-doctors")}>
                    <UserPlus />
                    <span>Add Doctor</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Add Pharmacist" onClick={() => navigate("/add-pharmacists")}>
                    <Stethoscope />
                    <span>Add Pharmacist</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton isActive={true} tooltip="Add Medicines">
                    <Pill />
                    <span>Add Medicines</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          {/* Main Content - Adding Medicines */}
          <SidebarInset>
            <div className="p-6 w-full">
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle>Add Medicines</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Medicine Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-300 p-2 text-left">Medicine Name</th>
                          <th className="border border-gray-300 p-2 text-left">Quantity</th>
                          <th className="border border-gray-300 p-2 text-center">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {medicines.map((medicine) => (
                          <tr key={medicine.id} className="border border-gray-300">
                            <td className="border border-gray-300 p-2">
                              <input
                                type="text"
                                value={medicine.name}
                                onChange={(e) => handleChange(medicine.id, "name", e.target.value)}
                                placeholder="Enter medicine name"
                                className="w-full p-2 border rounded"
                              />
                            </td>
                            <td className="border border-gray-300 p-2">
                              <input
                                type="number"
                                value={medicine.quantity}
                                onChange={(e) => handleChange(medicine.id, "quantity", e.target.value)}
                                placeholder="Quantity"
                                className="w-full p-2 border rounded"
                              />
                            </td>
                            <td className="border border-gray-300 p-2 text-center">
                              <Button variant="destructive" size="icon" onClick={() => handleDeleteRow(medicine.id)}>
                                <Trash2 size={20} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Add & Submit Buttons in Same Row */}
                  <div className="flex justify-between mt-4">
                    <Button className="w-1/3" onClick={handleAddRow}>
                      Add Medicine
                    </Button>
                    <Button className="w-1/3" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </SidebarInset>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default AddMedicine;
