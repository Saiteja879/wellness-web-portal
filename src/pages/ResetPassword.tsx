import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from "@/components/ui/sidebar";
import { UserPlus, Stethoscope, Pill } from "lucide-react";
import DashboardHeader from "@/components/DashboardHeader";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }

    setError("");
    alert("Password reset successfully!"); // Replace with backend API call
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full bg-[#f5f7fa]">
        {/* Header */}
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
                  <SidebarMenuButton tooltip="Add Medicines" onClick={() => navigate("/add-medicine")}>
                    <Pill />
                    <span>Add Medicines</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

          {/* Main Content - Reset Password Form */}
          <SidebarInset>
            <div className="flex flex-1 justify-center items-center p-6">
              <Card className="max-w-md w-full shadow-lg">
                <CardHeader>
                  <CardTitle>Reset Password</CardTitle>
                </CardHeader>
                <CardContent>
                  {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                  {/* Current Password */}
                  <label className="block mb-2 text-gray-700">Current Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter current password"
                    className="w-full p-2 border rounded mb-4"
                  />

                  {/* New Password */}
                  <label className="block mb-2 text-gray-700">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full p-2 border rounded mb-4"
                  />

                  {/* Confirm New Password */}
                  <label className="block mb-2 text-gray-700">Confirm New Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="w-full p-2 border rounded mb-4"
                  />

                  {/* Reset Button */}
                  <Button className="w-full mt-2" onClick={handleReset}>
                    Reset Password
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

export default ResetPassword;
