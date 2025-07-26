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
        <div className="w-full min-h-screen p-4">
            <MobileNavbar />
            <Header />
            <Outlet />
        </div>
    )
}