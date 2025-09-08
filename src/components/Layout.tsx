import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};