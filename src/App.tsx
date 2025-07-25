import { Routes, Route } from "react-router-dom";
import { DesktopDashboardLayout, MobileDashboardLayout } from "./layouts/dashboard-layout";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  return (
    <Routes>
      <Route
        path="/"
        element={isMobile ? <MobileDashboardLayout /> : <DesktopDashboardLayout />}
      />
    </Routes>
  );
}

export default App;
