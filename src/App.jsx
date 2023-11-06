import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import GuestLayouts from "./Layouts/GuestLayouts";
import AdminDashboard from "./Layouts/Admin/AdminDashboard";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
          <Route path="/" element={<GuestLayouts />}>
           <Route path="/" element={<Navigate to="/login" />} />
           <Route path="login" element={<PublicRoute Component={Login} />} />
           <Route path="*" element={<Navigate to="/login" replace />} />
           <Route path="register" element={<PublicRoute Component={Register} />} />
        </Route>
           <Route
            path="/admin"
            element={<PrivateRoute Component={AdminDashboard} />}
        />
      </Routes>
    </>
  );
}

export default App;
