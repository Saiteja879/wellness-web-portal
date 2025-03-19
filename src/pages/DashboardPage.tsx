
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DoctorSidebar from "@/components/DoctorSidebar";
import AppointmentsTable from "@/components/AppointmentsTable";
import RequestsTable from "@/components/RequestsTable";
import Footer from "@/components/Footer";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<"appointments" | "requests">("appointments");

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      
      <SidebarProvider defaultOpen={true}>
        <div className="flex flex-grow w-full">
          <DoctorSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          
          <SidebarInset className="p-4 md:p-6 bg-[#f8fafc]">
            <main className="container mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl font-bold">
                  {activeSection === "appointments" ? "Appointments" : "Patient Requests"}
                </h1>
                <p className="text-gray-500 mt-1">
                  {activeSection === "appointments" 
                    ? "Manage your patient appointments and prescriptions" 
                    : "Review and process patient document requests"}
                </p>
              </div>
              
              {activeSection === "appointments" ? (
                <AppointmentsTable />
              ) : (
                <RequestsTable />
              )}
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default DashboardPage;
