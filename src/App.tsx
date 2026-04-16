import { BrowserRouter, Routes, Route } from "react-router-dom";
import StatsQuiz from "./pages/StatsQuiz";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/stats-quiz" element={<StatsQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}
