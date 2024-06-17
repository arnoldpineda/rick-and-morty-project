import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/Homepage";
import CharacterDetail from "../pages/CharacterDetail";

export const AppRouter = () => {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail/:id" element={<CharacterDetail />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
};
