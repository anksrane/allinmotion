/* Path: src\routes\AppRouter.jsx */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "../components";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
