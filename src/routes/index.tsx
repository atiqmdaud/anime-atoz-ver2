import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home/HomePage";
import AnimeDetailsPage from "@/feactures/anime/pages/AnimeDetailsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/anime/:id" element={<AnimeDetailsPage />} />
    </Routes>
  );
}
