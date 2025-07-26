import { Routes, Route } from "react-router-dom";
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
          <Route path="orders-tracking" element={<OrdersTracking />}/>
      </Route>
    </Routes>
  );
}

export default App;
