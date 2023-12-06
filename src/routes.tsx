import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import Details from "./pages/Details";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path=":type/:id" element={<Details />} />
          <Route path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
