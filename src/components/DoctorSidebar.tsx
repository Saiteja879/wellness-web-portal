
import { CalendarClock, ClipboardList, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type DoctorSidebarProps = {
  activeSection: "appointments" | "requests";
  onSectionChange: (section: "appointments" | "requests") => void;
};

const DoctorSidebar = ({ activeSection, onSectionChange }: DoctorSidebarProps) => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === "appointments"}
                  onClick={() => onSectionChange("appointments")}
                >
                  <CalendarClock size={20} />
                  <span>Appointments</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === "requests"}
                  onClick={() => onSectionChange("requests")}
                >
                  <FileText size={20} />
                  <span>Requests</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DoctorSidebar;
