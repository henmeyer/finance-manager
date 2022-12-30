import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Dashboard from "../pages/Dashboard";
import MoneyFlow from "../pages/MoneyFlow";


const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RouterRoutes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/money-flow" element={<MoneyFlow />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
