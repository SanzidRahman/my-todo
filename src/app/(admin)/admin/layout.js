import AppSidebar from "@/components/application/admin/AppSidebar";
import Topbar from "@/components/application/admin/Topbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="md:w-[calc(100vw-16rem)] ">
        <div className="min-h-[calc(100vh-40px)] pt-16 pl-4 ">
          <Topbar />
          {children}
        </div>
        <div className="h-10 w-full flex justify-center items-center border-t">
          footer
        </div>
      </main>
    </SidebarProvider>
  );
};

export default layout;
