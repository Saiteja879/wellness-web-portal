import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, Sidebar, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarInset } from "@/components/ui/sidebar";
import { UserPlus, Stethoscope, Pill } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddPharmacists = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Pharmacist's Email:", email);
    // Handle form submission logic
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full bg-[#f5f7fa]">
        {/* Dashboard Header */}
        <DashboardHeader page1='reset-password'/>
        
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
                  <SidebarMenuButton isActive={true} tooltip="Add Pharmacist">
                    <Stethoscope />
                    <span>Add Pharmacist</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton tooltip="Add Medicines" onClick={() => navigate("/add-medicine")}>
                    <Pill />
                    <span>Add Medicines</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          {/* Main Content - Adding Pharmacist */}
          <SidebarInset>
            <div className="p-6">
              <Card className="max-w-lg mx-auto">
                <CardHeader>
                  <CardTitle>Add Pharmacist</CardTitle>
                </CardHeader>
                <CardContent>
                  <label className="block mb-2 text-gray-700">Pharmacist's Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter pharmacist's email"
                    className="w-full p-2 border rounded mb-4"
                  />
                  <Button className="w-full" onClick={handleSubmit}>
                    Submit
                  </Button>
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

export default AddPharmacists;
