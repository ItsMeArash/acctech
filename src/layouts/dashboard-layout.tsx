import { Outlet } from "react-router-dom";
import { DesktopNavbar, MobileNavbar } from "./navbar";
import Header from "./header";

export function DesktopDashboardLayout() {
    return (
        <div className="w-full min-h-screen flex">
            <DesktopNavbar />
            <div className="w-full flex flex-col">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export function MobileDashboardLayout() {
    return (
        <div className="w-full min-h-screen dark:bg-[#191D2A]">
            <MobileNavbar />
            <Header />
            <Outlet />
        </div>
    )
}