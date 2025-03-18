
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DoctorSidebar from "@/components/DoctorSidebar";
import PrescriptionForm from "@/components/PrescriptionForm";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrescriptionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [patientName, setPatientName] = useState("John Doe");
  
  // Get patient name from location state if available
  useEffect(() => {
    if (location.state && location.state.patientName) {
      setPatientName(location.state.patientName);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      
      <SidebarProvider defaultOpen={true}>
        <div className="flex flex-grow w-full">
          <DoctorSidebar 
            activeSection="appointments"
            onSectionChange={() => {}}
          />
          
          <SidebarInset className="p-4 md:p-6 bg-[#f8fafc]">
            <main className="container mx-auto">
              <div className="mb-6">
                <Button 
                  variant="ghost" 
                  onClick={() => navigate("/dashboard")}
                  className="mb-4 text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Dashboard
                </Button>
                
                <h1 className="text-2xl font-bold">Prescription</h1>
                <p className="text-gray-500 mt-1">
                  Create and manage prescriptions for your patients
                </p>
              </div>
              
              <PrescriptionForm patientName={patientName} />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default PrescriptionPage;
