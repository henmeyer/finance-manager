import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Dashboard from "../pages/Dashboard";
import MoneyFlow from "../pages/MoneyFlow";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RouterRoutes>
        <Route path="/">
          <Route exact path="/app/" element={<Dashboard />} />
          <Route exact path="/app/money-flow" element={<MoneyFlow />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
