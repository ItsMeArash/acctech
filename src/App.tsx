import { Routes, Route, Navigate } from "react-router-dom";
import { DesktopDashboardLayout, MobileDashboardLayout } from "./layouts/dashboard-layout";
import useIsMobile from "./hooks/useIsMobile";
import OrdersTracking from "./pages/orders-tracking";

function App() {
  const isMobile = useIsMobile();

  return (
    <Routes>
      <Route
        path="/"
        element={isMobile ? <MobileDashboardLayout /> : <DesktopDashboardLayout />}>
        <Route index element={<Navigate to="orders-tracking" replace />} />
        <Route path="orders-tracking" element={<OrdersTracking />} />
      </Route>
    </Routes>
  );
}

export default App;
