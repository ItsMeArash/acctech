import { Outlet } from "react-router-dom";
import { DesktopNavbar, MobileNavbar } from "./navbar";
import Header from "./header";

export function DesktopDashboardLayout() {
    return (
        <div className="w-full min-h-screen flex">
            <DesktopNavbar />
            <div className="w-full flex flex-col gap-4 px-4">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export function MobileDashboardLayout() {
    return (
        <div className="w-full min-h-screen flex p-4">
            <MobileNavbar />
            <Outlet />
        </div>
    )
}