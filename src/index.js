import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import {Home, Schedule, Artists, Food, Surfing, Tickets, NoPage} from "./pages";
import './index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="artists" element={<Artists />} />
          <Route path="food" element={<Food />} />
          <Route path="surfing" element={<Surfing />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);